import { TestBed, inject } from '@angular/core/testing';

import { FilterResourcesService } from './filter-resources.service';

describe('FilterResourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterResourcesService]
    });
  });

  it('should be created', inject([FilterResourcesService], (service: FilterResourcesService) => {
    expect(service).toBeTruthy();
  }));
});
