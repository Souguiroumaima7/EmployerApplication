import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceParkingComponent } from './space-parking.component';

describe('SpaceParkingComponent', () => {
  let component: SpaceParkingComponent;
  let fixture: ComponentFixture<SpaceParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceParkingComponent]
    });
    fixture = TestBed.createComponent(SpaceParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
