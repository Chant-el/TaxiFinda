import { TestBed } from '@angular/core/testing';

import { FindtaxiService } from './findtaxi.service';

describe('FindtaxiService', () => {
  let service: FindtaxiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindtaxiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
