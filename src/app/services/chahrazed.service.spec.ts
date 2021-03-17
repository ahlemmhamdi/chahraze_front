import { TestBed } from '@angular/core/testing';

import { ChahrazedService } from './chahrazed.service';

describe('ChahrazedService', () => {
  let service: ChahrazedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChahrazedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
