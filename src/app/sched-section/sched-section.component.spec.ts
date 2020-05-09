import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedSectionComponent } from './sched-section.component';

describe('SchedSectionComponent', () => {
  let component: SchedSectionComponent;
  let fixture: ComponentFixture<SchedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
