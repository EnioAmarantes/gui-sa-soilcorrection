import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTCComponent } from './ctc.component';

describe('CTCComponent', () => {
  let component: CTCComponent;
  let fixture: ComponentFixture<CTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
