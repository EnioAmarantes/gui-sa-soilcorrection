import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
