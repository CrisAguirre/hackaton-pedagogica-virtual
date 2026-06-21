import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SubmissionPayload {
  phase: number;
  answers: any;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class HackatonService {
  private apiUrl = `${environment.backendUrl}/api/hackaton`;

  constructor(private http: HttpClient) { }

  submitPhase(payload: SubmissionPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit`, payload);
  }

  getSubmissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/submissions`);
  }

  getMySubmissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/my-submissions`);
  }
}
