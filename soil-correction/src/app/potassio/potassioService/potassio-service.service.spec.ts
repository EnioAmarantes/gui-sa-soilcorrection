import { TestBed } from '@angular/core/testing';

import { PotassioServiceService } from './potassio-service.service';

describe('PotassioServiceService', () => {
  let service: PotassioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotassioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
