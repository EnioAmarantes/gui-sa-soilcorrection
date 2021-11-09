import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Potassio } from './potassio';

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

  it('should calc qtdAplicar', () => {
    let potassio = new Potassio();
    expect(potassio.qtdAplicar()).toEqual(0.0);
  })

  it('should calc custoHectar', () => {
    let potassio = new Potassio();
    expect(potassio.custoHectar()).toEqual(0.0);
  })

});
