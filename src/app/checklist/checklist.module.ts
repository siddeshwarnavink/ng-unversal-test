import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChecklistItemComponent } from './add-checklist-item/add-checklist-item.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';



@NgModule({
  declarations: [
    AddChecklistItemComponent,
    ChecklistListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddChecklistItemComponent,
    ChecklistListComponent
  ]
})
export class ChecklistModule { }
