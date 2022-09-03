import { TestBed } from '@angular/core/testing';

import { StringToBooleanService } from './string-to-boolean.service';

describe('StringToBooleanService', () => {
  let service: StringToBooleanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringToBooleanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
