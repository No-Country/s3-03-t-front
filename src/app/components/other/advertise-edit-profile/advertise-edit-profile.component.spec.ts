import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseEditProfileComponent } from './advertise-edit-profile.component';

describe('AdvertiseEditProfileComponent', () => {
  let component: AdvertiseEditProfileComponent;
  let fixture: ComponentFixture<AdvertiseEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
