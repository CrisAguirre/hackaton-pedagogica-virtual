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
  phases = HACKATON_DATA.phases;
  questions = HACKATON_DATA.questions_phase_1;
  activeView: 'results' | 'content' = 'results';
  currentTheme: 'light' | 'dark' = 'dark';
  
  // Mock submissions for presentation
  submissions = [
    { student: 'invitado', phase: 1, score: 66, submittedAt: new Date() },
    { student: 'invitado', phase: 3, score: null, submittedAt: new Date() }
  ];

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  switchView(view: 'results' | 'content') {
    this.activeView = view;
  }
}
