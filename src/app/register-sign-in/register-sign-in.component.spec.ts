import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSignInComponent } from './register-sign-in.component';

describe('RegisterSignInComponent', () => {
  let component: RegisterSignInComponent;
  let fixture: ComponentFixture<RegisterSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
