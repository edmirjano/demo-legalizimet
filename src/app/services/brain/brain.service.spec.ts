import { TestBed } from '@angular/core/testing';

import { BrainService } from './brain.service';

describe('BrainService', () => {
  let service: BrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
