import { TestBed } from '@angular/core/testing';

import { TesService } from './tes.service';

describe('TesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesService = TestBed.get(TesService);
    expect(service).toBeTruthy();
  });
});
