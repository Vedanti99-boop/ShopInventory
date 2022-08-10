import { TestBed } from '@angular/core/testing';

import { PrDataService } from './pr-data.service';

describe('PrDataService', () => {
  let service: PrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
