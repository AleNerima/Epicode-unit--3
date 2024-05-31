import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompletatiComponent } from './task-completati.component';

describe('TaskCompletatiComponent', () => {
  let component: TaskCompletatiComponent;
  let fixture: ComponentFixture<TaskCompletatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCompletatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCompletatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
