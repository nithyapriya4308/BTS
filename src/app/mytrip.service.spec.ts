import { TestBed } from '@angular/core/testing';

import { MytripService } from './mytrip.service';

describe('MytripService', () => {
  let service: MytripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
