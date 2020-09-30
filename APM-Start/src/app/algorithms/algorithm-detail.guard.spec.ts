import { TestBed } from '@angular/core/testing';

import { AlgorithmDetailGuard } from './algorithm-detail.guard';

describe('AlgorithmDetailGuard', () => {
  let guard: AlgorithmDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlgorithmDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
