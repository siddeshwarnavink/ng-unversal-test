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

  addItem(item: Checklist): Observable<{}> {
    return this.http.post<{}>('http://localhost:3000/checklist', item);
  }

  removeItem(itemId: string): Observable<{}> {
    return this.http.delete<{}>('http://localhost:3000/checklist/' + itemId);
  }
}
