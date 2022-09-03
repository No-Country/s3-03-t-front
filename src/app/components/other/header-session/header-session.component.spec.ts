import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSessionComponent } from './header-session.component';

describe('HeaderSessionComponent', () => {
  let component: HeaderSessionComponent;
  let fixture: ComponentFixture<HeaderSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
