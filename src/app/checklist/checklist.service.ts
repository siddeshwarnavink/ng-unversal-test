import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Checklist } from './checklist-model';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor(private http: HttpClient) { }

  fetchChecklist(): Observable<Checklist[]> {
    return this.http.get<Checklist[]>('http://localhost:3000/checklist');
  }
}
