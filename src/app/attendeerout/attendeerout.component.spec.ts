import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeroutComponent } from './attendeerout.component';

describe('AttendeeroutComponent', () => {
  let component: AttendeeroutComponent;
  let fixture: ComponentFixture<AttendeeroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeroutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
