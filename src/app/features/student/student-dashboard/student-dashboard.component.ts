import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { HACKATON_DATA } from '../../../core/data/hackaton-data';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  activeTab: 'inicio' | 'fases' = 'inicio';
  currentTheme: 'light' | 'dark' = 'dark';
  
  challenge: any;
  phases: any[] = [];
  selectedPhase: any = null;

  // Para quizzes (Fase 1, 2, 5)
  questions: any[] = [];
  currentAnswers: number[] = [];
  score: number | null = null;
  phaseCompleted = false;

  // Para Checklists (Fase 3A, 3B)
  checklistItems: any[] = [];
  checklistAnswers: boolean[] = [];

  // Para Entrega (Fase 4)
  deliveryUrl: string = '';
  deliveryText: string = '';

  constructor(
    private authService: AuthService, 
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.challenge = HACKATON_DATA.challenge;
    this.phases = HACKATON_DATA.phases;
    
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  switchTab(tab: 'inicio' | 'fases') {
    this.activeTab = tab;
  }

  openPhase(phase: any) {
    if (phase.status === 'locked') return;
    this.selectedPhase = phase;
    this.phaseCompleted = false;
    this.score = null;
    
    if (phase.type === 'quiz') {
      this.questions = HACKATON_DATA['questions_phase_' + phase.id] || [];
      this.currentAnswers = new Array(this.questions.length).fill(-1);
    } else if (phase.type === 'checklist') {
      this.checklistItems = HACKATON_DATA['checklists_phase_' + phase.id] || [];
      this.checklistAnswers = new Array(this.checklistItems.length).fill(false);
    }
  }

  closePhase() {
    this.selectedPhase = null;
  }

  selectAnswer(qIndex: number, aIndex: number) {
    this.currentAnswers[qIndex] = aIndex;
  }

  toggleChecklist(index: number) {
    this.checklistAnswers[index] = !this.checklistAnswers[index];
  }

  submitPhase() {
    if (this.selectedPhase.type === 'quiz') {
      let correct = 0;
      this.questions.forEach((q, i) => {
        if (this.currentAnswers[i] === q.correctIndex) correct++;
      });
      this.score = (correct / this.questions.length) * 100;
    } else if (this.selectedPhase.type === 'checklist') {
      // Checklist is pass/fail based on checking all items
      const allChecked = this.checklistAnswers.every(v => v);
      this.score = allChecked ? 100 : 0;
    } else if (this.selectedPhase.type === 'upload') {
      if (this.deliveryUrl && this.deliveryText) {
        this.score = 100; // Mock score for submitting
      } else {
        this.score = 0;
      }
    }

    this.phaseCompleted = true;

    // Desbloquear siguiente fase visualmente si se aprueba
    if (this.score !== null && this.score >= 70) {
      const nextPhaseIndex = this.phases.findIndex(p => p.id === this.selectedPhase.id) + 1;
      if (nextPhaseIndex < this.phases.length) {
        this.phases[nextPhaseIndex].status = 'unlocked';
      }
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
