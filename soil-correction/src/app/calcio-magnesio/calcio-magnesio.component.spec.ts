import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcioMagnesioComponent } from './calcio-magnesio.component';

describe('CalcioMagnesioComponent', () => {
  let component: CalcioMagnesioComponent;
  let fixture: ComponentFixture<CalcioMagnesioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcioMagnesioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcioMagnesioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
