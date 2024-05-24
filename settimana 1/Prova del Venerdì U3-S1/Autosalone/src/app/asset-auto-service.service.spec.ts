import { TestBed } from '@angular/core/testing';

import { AssetAutoServiceService } from './asset-auto-service.service';

describe('AssetAutoServiceService', () => {
  let service: AssetAutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetAutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
