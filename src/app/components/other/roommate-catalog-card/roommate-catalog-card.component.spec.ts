import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateCatalogCardComponent } from './roommate-catalog-card.component';

describe('RoommateCatalogCardComponent', () => {
  let component: RoommateCatalogCardComponent;
  let fixture: ComponentFixture<RoommateCatalogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommateCatalogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateCatalogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
