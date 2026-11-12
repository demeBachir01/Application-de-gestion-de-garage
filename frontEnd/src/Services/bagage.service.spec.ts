import { TestBed } from '@angular/core/testing';

import { BagageService } from './bagage.service';

describe('BagageService', () => {
  let service: BagageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
