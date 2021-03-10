import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentGradingsComponent } from './assignment-gradings.component';

describe('AssignmentGradingsComponent', () => {
  let component: AssignmentGradingsComponent;
  let fixture: ComponentFixture<AssignmentGradingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentGradingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentGradingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
