import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCatalogComponent } from './rental-catalog.component';

describe('RentalCatalogComponent', () => {
  let component: RentalCatalogComponent;
  let fixture: ComponentFixture<RentalCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
