import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRoommateComponent } from './search-roommate.component';

describe('SearchRoommateComponent', () => {
  let component: SearchRoommateComponent;
  let fixture: ComponentFixture<SearchRoommateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRoommateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRoommateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
