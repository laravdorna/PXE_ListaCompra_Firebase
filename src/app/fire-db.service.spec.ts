import { TestBed } from '@angular/core/testing';

import { FireDBService } from './fire-db.service';

describe('FireDBService', () => {
  let service: FireDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
