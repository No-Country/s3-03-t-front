import { TestBed } from '@angular/core/testing';

import { CreateRentalService } from './create-rental.service';

describe('CreateRentalService', () => {
  let service: CreateRentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
