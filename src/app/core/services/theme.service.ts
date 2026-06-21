import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'dark' | 'light' = 'dark';
  private themeSubject = new BehaviorSubject<'dark' | 'light'>('dark');
  
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('app-theme') as 'dark' | 'light';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Default to dark
      this.currentTheme = 'dark';
    }
    this.applyTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
  }

  private applyTheme(theme: 'dark' | 'light') {
    localStorage.setItem('app-theme', theme);
    this.themeSubject.next(theme);
    
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
