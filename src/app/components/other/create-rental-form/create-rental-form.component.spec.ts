import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentalFormComponent } from './create-rental-form.component';

describe('CreateRentalFormComponent', () => {
  let component: CreateRentalFormComponent;
  let fixture: ComponentFixture<CreateRentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRentalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
