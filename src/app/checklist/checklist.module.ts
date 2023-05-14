import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChecklistItemComponent } from './add-checklist-item/add-checklist-item.component';



@NgModule({
  declarations: [
    AddChecklistItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddChecklistItemComponent
  ]
})
export class ChecklistModule { }
