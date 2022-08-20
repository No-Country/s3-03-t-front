import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRentalFormComponent } from './search-rental-form.component';

describe('SearchRentalFormComponent', () => {
  let component: SearchRentalFormComponent;
  let fixture: ComponentFixture<SearchRentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRentalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
