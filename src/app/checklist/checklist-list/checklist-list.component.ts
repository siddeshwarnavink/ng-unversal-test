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
    this.checklistService.fetchChecklist().subscribe((list: Checklist[]) => {
      this.fetchedList = list;
    });
  }
}
