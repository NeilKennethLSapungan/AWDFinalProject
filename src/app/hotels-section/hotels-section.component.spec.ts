import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSectionComponent } from './hotels-section.component';

describe('HotelsSectionComponent', () => {
  let component: HotelsSectionComponent;
  let fixture: ComponentFixture<HotelsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
