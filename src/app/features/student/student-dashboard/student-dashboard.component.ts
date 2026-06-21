import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
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

  // Para el quiz de fase 1
  questions: any[] = [];
  currentAnswers: number[] = [];
  score: number | null = null;
  phaseCompleted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.challenge = HACKATON_DATA.challenge;
    this.phases = HACKATON_DATA.phases;
    this.questions = HACKATON_DATA.questions_phase_1;
    this.currentAnswers = new Array(this.questions.length).fill(-1);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openPhase(phase: any) {
    if (phase.status === 'locked') return;
    this.selectedPhase = phase;
  }

  closePhase() {
    this.selectedPhase = null;
  }

  selectAnswer(qIndex: number, aIndex: number) {
    this.currentAnswers[qIndex] = aIndex;
  }

  submitPhase1() {
    let correct = 0;
    this.questions.forEach((q, i) => {
      if (this.currentAnswers[i] === q.correctIndex) {
        correct++;
      }
    });
    this.score = (correct / this.questions.length) * 100;
    this.phaseCompleted = true;

    // Aquí iría el HTTP POST al backend para guardar las respuestas
    // fetch('/api/hackaton/submit', ...)
    
    // Desbloquear fase 2 visualmente
    this.phases[2].status = 'unlocked';
  }
}
