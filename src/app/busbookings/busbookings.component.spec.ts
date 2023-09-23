import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusbookingsComponent } from './busbookings.component';

describe('BusbookingsComponent', () => {
  let component: BusbookingsComponent;
  let fixture: ComponentFixture<BusbookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusbookingsComponent]
    });
    fixture = TestBed.createComponent(BusbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
