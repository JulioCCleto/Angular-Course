import { TestBed } from '@angular/core/testing';

import { GenRandomDataServiceService } from './gen-random-data-service.service';

describe('GenRandomDataServiceService', () => {
  let service: GenRandomDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenRandomDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
