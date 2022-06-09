import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSensorComponent } from './id-sensor.component';

describe('IdSensorComponent', () => {
  let component: IdSensorComponent;
  let fixture: ComponentFixture<IdSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
