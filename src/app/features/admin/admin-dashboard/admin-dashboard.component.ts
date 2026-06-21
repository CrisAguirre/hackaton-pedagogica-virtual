import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { HackatonService } from '../../../core/services/hackaton.service';
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
  
  submissions: any[] = [];
  questions: any[] = [];
  currentAnswers: number[] = [];
  multipleAnswers: boolean[][] = [];
  openAnswers: string[] = [];
  score: number | null = null;
  phaseCompleted = false;
  zoomedImageUrl: string | null = null;
  
  // Menu State
  isMobileMenuOpen = false;
  isModulesDropdownOpen = false;
  isDocModalOpen = false;
  isSupportModalOpen = false;

  openDocModal() {
    this.isDocModalOpen = true;
  }

  closeDocModal() {
    this.isDocModalOpen = false;
  }

  openSupportModal() {
    this.isSupportModalOpen = true;
  }

  closeSupportModal() {
    this.isSupportModalOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleModulesDropdown(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isModulesDropdownOpen = !this.isModulesDropdownOpen;
  }

  constructor(
    private authService: AuthService, 
    private router: Router,
    private hackatonService: HackatonService
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
    
    this.loadSubmissions();
    
    // Simulate loading the selected phase
    this.openPhase(this.selectedPhase);
  }

  loadSubmissions() {
    this.hackatonService.getSubmissions().subscribe({
      next: (data) => {
        // Map data from DB to UI format
        this.submissions = data.map(sub => ({
          student: sub.userId?.username || 'Estudiante',
          phase: sub.phase,
          score: sub.score,
          submittedAt: new Date(sub.submittedAt)
        }));
      },
      error: (err) => {
        console.error('Error loading submissions', err);
        this.showToast('Error cargando los registros.');
      }
    });
  }

  toastMessage: string | null = null;

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  openPhase(phase: any) {
    this.isMobileMenuOpen = false;
    this.isModulesDropdownOpen = false;
    window.scrollTo(0, 0);
    
    if (phase.status === 'locked') {
      this.showToast('Nota para el docente: Los estudiantes verán este módulo bloqueado hasta que completen el anterior.');
    }
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
    this.showToast("Modo vista de profesor. Envío de resultados desactivado.");
  }

  showResults() {
    this.isMobileMenuOpen = false;
    this.isModulesDropdownOpen = false;
    window.scrollTo(0, 0);
    
    this.activeView = 'results';
    this.selectedPhase = null;
    this.loadSubmissions();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
