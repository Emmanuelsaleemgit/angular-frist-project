import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroutComponent } from './adminrout.component';

describe('AdminroutComponent', () => {
  let component: AdminroutComponent;
  let fixture: ComponentFixture<AdminroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminroutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
