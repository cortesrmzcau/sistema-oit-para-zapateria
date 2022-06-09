import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroCalzadoComponent } from './numero-calzado.component';

describe('NumeroCalzadoComponent', () => {
  let component: NumeroCalzadoComponent;
  let fixture: ComponentFixture<NumeroCalzadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroCalzadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroCalzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
