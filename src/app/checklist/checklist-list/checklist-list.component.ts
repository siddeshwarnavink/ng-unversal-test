import { Component, OnInit } from '@angular/core';

import { ChecklistService } from '../checklist.service';
import { Checklist } from '../checklist-model';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css']
})
export class ChecklistListComponent implements OnInit {
  fetchedList: Checklist[] = [];

  constructor(
    private checklistService: ChecklistService
  ) { }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.checklistService.fetchChecklist().subscribe((list: Checklist[]) => {
      this.fetchedList = list;
    });
  }

  addChecklistItem(itemContent: string) {
    const newChecklistItem: Checklist = { id: new Date().toISOString(), content: itemContent };
    this.checklistService.addItem(newChecklistItem).subscribe(() => {
      this.fetchList();
    });
  }

  removeChecklistItem(id: string) {
    this.checklistService.removeItem(id).subscribe(() => {
      this.fetchList();
    });
  }
}
