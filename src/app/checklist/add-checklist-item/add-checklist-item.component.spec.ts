import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChecklistItemComponent } from './add-checklist-item.component';

describe('AddChecklistItemComponent', () => {
  let component: AddChecklistItemComponent;
  let fixture: ComponentFixture<AddChecklistItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChecklistItemComponent]
    });
    fixture = TestBed.createComponent(AddChecklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
