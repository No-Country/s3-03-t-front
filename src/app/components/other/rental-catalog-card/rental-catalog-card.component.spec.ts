import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCatalogCardComponent } from './rental-catalog-card.component';

describe('RentalCatalogCardComponent', () => {
  let component: RentalCatalogCardComponent;
  let fixture: ComponentFixture<RentalCatalogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCatalogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCatalogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
