import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerNavComponent } from './passenger-nav.component';

describe('PassengerNavComponent', () => {
  let component: PassengerNavComponent;
  let fixture: ComponentFixture<PassengerNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerNavComponent]
    });
    fixture = TestBed.createComponent(PassengerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
