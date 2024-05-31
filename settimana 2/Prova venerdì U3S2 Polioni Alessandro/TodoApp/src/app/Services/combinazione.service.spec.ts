import { TestBed } from '@angular/core/testing';

import { CombinazioneService } from './combinazione.service';

describe('CombinazioneService', () => {
  let service: CombinazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
