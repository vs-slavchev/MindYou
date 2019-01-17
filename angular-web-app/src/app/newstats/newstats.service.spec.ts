import { TestBed } from '@angular/core/testing';

import { NewstatsService } from './newstats.service';

describe('StatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewstatsService = TestBed.get(NewstatsService);
    expect(service).toBeTruthy();
  });
});
