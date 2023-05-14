import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddChecklistItemComponent } from './add-checklist-item/add-checklist-item.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddChecklistItemComponent,
    ChecklistListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ChecklistModule
  ],
  exports: [
    ChecklistListComponent
  ]
})
export class ChecklistModule { }
