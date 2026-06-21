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
  challenge: any;
  phases: any[] = [];
  selectedPhase: any = null;

  // State
  questions: any[] = [];
  currentAnswers: number[] = [];
  score: number | null = null;
  phaseCompleted = false;
  checklistItems: any[] = [];
  checklistAnswers: boolean[] = [];
  deliveryUrl: string = '';
  deliveryText: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.challenge = HACKATON_DATA.challenge;
    this.phases = HACKATON_DATA.phases;
    // Auto open the first available phase (Onboarding or Module 1)
    this.openPhase(this.phases[0]);
  }

  openPhase(phase: any) {
    if (phase.status === 'locked') {
      alert('Este módulo está bloqueado. Completa el anterior primero.');
      return;
    }
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
      const allChecked = this.checklistAnswers.every(v => v);
      this.score = allChecked ? 100 : 0;
    } else if (this.selectedPhase.type === 'upload') {
      if (this.deliveryUrl || this.deliveryText) {
        this.score = 100;
      } else {
        this.score = 0;
      }
    }

    this.phaseCompleted = true;

    // Desbloquear siguiente fase
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
