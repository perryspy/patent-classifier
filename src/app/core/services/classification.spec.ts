import { TestBed } from '@angular/core/testing';

import { Classification } from './classification';

describe('Classification', () => {
  let service: Classification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Classification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
