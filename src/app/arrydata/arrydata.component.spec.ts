import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrydataComponent } from './arrydata.component';

describe('ArrydataComponent', () => {
  let component: ArrydataComponent;
  let fixture: ComponentFixture<ArrydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
