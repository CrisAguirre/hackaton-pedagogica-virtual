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
  multipleAnswers: boolean[][] = [];
  openAnswers: string[] = [];
  score: number | null = null;
  phaseCompleted = false;

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
      this.openAnswers = new Array(this.questions.length).fill('');
      this.multipleAnswers = this.questions.map(q => {
        return q.options ? new Array(q.options.length).fill(false) : [];
      });
    }
  }

  selectAnswer(qIndex: number, aIndex: number) {
    this.currentAnswers[qIndex] = aIndex;
  }

  toggleMultipleAnswer(qIndex: number, aIndex: number) {
    this.multipleAnswers[qIndex][aIndex] = !this.multipleAnswers[qIndex][aIndex];
  }

  submitPhase() {
    if (this.selectedPhase.type === 'quiz') {
      let correct = 0;
      let totalWeight = this.questions.length;

      this.questions.forEach((q, i) => {
        if (q.questionType === 'single' || q.questionType === 'visual') {
          if (this.currentAnswers[i] === q.correctIndex) correct++;
        } 
        else if (q.questionType === 'multiple') {
          // Check if all correct options are checked and no wrong options are checked
          let isCorrect = true;
          q.options.forEach((opt: any, optIndex: number) => {
            const shouldBeChecked = q.correctIndexes.includes(optIndex);
            if (this.multipleAnswers[i][optIndex] !== shouldBeChecked) {
              isCorrect = false;
            }
          });
          if (isCorrect) correct++;
        }
        else if (q.questionType === 'open') {
          // Open questions give full points as long as they are not empty (manual review later)
          if (this.openAnswers[i].trim().length > 0) correct++;
        }
      });

      this.score = (correct / totalWeight) * 100;
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
