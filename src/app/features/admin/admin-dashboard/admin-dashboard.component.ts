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

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.phases = HACKATON_DATA.phases;
    this.selectedPhase = this.phases[1]; // Módulo 1 by default for content
    this.questions = HACKATON_DATA.questions_phase_1;
  }

  openPhase(phase: any) {
    if (phase.type === 'info') return;
    this.activeView = 'content';
    this.selectedPhase = phase;
    if (phase.type === 'quiz') {
      this.questions = HACKATON_DATA['questions_phase_' + phase.id] || [];
    } else {
      this.questions = [];
    }
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
