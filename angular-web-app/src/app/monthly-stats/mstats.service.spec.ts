import { TestBed } from '@angular/core/testing';

import { MstatsService } from './mstats.service';

describe('MstatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MstatsService = TestBed.get(MstatsService);
    expect(service).toBeTruthy();
  });
});
