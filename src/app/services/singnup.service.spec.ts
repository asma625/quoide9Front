import { TestBed } from '@angular/core/testing';

import { SingnupService } from './singnup.service';

describe('SingnupService', () => {
  let service: SingnupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingnupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
