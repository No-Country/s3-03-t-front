import { TestBed } from '@angular/core/testing';

import { SearchRentalService } from './search-rental.service';

describe('SearchRentalService', () => {
  let service: SearchRentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
