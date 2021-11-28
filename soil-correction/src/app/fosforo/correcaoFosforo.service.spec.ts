import { TestBed } from '@angular/core/testing';
import { CorrecaoFosforoService } from './correcaoFosforo.service';

describe('CorrecaofosforoService', () => {
  let service: CorrecaoFosforoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrecaoFosforoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
