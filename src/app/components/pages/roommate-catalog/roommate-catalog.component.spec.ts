import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateCatalogComponent } from './roommate-catalog.component';

describe('RoommateCatalogComponent', () => {
  let component: RoommateCatalogComponent;
  let fixture: ComponentFixture<RoommateCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommateCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
