import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotassioComponent } from './potassio.component';

describe('PotassioComponent', () => {
  let component: PotassioComponent;
  let fixture: ComponentFixture<PotassioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotassioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotassioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
