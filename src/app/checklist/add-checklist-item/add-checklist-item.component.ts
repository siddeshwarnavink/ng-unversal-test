import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-checklist-item',
  templateUrl: './add-checklist-item.component.html',
  styleUrls: ['./add-checklist-item.component.css']
})
export class AddChecklistItemComponent {
  newChecklistControl = new FormControl('');

  @Output()
  addItem = new EventEmitter();

  submitForm() {
    this.addItem.emit(this.newChecklistControl.value)
    this.newChecklistControl.setValue('');
  }
}
