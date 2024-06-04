import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumRegistrazioneComponent } from './forum-registrazione.component';

describe('ForumRegistrazioneComponent', () => {
  let component: ForumRegistrazioneComponent;
  let fixture: ComponentFixture<ForumRegistrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumRegistrazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
