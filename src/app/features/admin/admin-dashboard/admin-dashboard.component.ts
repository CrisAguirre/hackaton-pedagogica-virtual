import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { HACKATON_DATA } from '../../../core/data/hackaton-data';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeView: 'results' | 'content' = 'results';
  selectedPhase: any = null;
  phases: any[] = [];
  
  submissions = [
    { student: 'Ana G.', phase: 1, score: 85, submittedAt: new Date('2026-06-20T10:00') },
    { student: 'Carlos M.', phase: 1, score: 60, submittedAt: new Date('2026-06-20T11:30') },
    { student: 'Luis P.', phase: 2, score: null, submittedAt: new Date('2026-06-21T09:15') }
  ];
  questions: any[] = [];
  currentAnswers: number[] = [];
  multipleAnswers: boolean[][] = [];
  openAnswers: string[] = [];
  score: number | null = null;
  phaseCompleted = false;
  zoomedImageUrl: string | null = null;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  openZoom(url: string) {
    this.zoomedImageUrl = url;
  }

  closeZoom() {
    this.zoomedImageUrl = null;
  }

  ngOnInit() {
    this.phases = HACKATON_DATA.phases;
    this.selectedPhase = this.phases[0]; // Start at info/home by default
    
    // Simulate loading the selected phase
    this.openPhase(this.selectedPhase);
  }

  openPhase(phase: any) {
    if (phase.type === 'info') return;
    this.activeView = 'content';
    this.selectedPhase = phase;
    this.phaseCompleted = false;
    this.score = null;

    if (phase.type === 'quiz') {
      this.questions = HACKATON_DATA['questions_phase_' + phase.id] || [];
      this.currentAnswers = new Array(this.questions.length).fill(-1);
      this.openAnswers = new Array(this.questions.length).fill('');
      this.multipleAnswers = this.questions.map((q: any) => {
        return q.options ? new Array(q.options.length).fill(false) : [];
      });
    }
  }

  // Dummy methods to avoid console errors if admin clicks things
  selectAnswer(qIndex: number, aIndex: number) {
    this.currentAnswers[qIndex] = aIndex;
  }

  toggleMultipleAnswer(qIndex: number, aIndex: number) {
    this.multipleAnswers[qIndex][aIndex] = !this.multipleAnswers[qIndex][aIndex];
  }

  submitPhase() {
    alert("Modo vista de profesor. Envío desactivado.");
  }

  showResults() {
    this.activeView = 'results';
    this.selectedPhase = null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
