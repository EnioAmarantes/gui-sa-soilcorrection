import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fosforo } from './fosforo';

import { FosforoComponent } from './fosforo.component';

describe('FosforoComponent', () => {
  let component: FosforoComponent;
  let fixture: ComponentFixture<FosforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calc qtdAplicar', () => {
    let fosforo = new Fosforo();
    expect(fosforo.qtdAplicar()).toEqual(0.0);
  })

  it('should calc custoHectar', () => {
    let fosforo = new Fosforo();
    expect(fosforo.custoHectar()).toEqual(0.0);
  })

  it('should calc kgaHa', () => {
    let fosforo = new Fosforo();
    expect(fosforo.kgaHa()).toEqual(0.0);
  })
});
