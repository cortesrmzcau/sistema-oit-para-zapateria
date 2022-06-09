import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaComparacionTipoClienteComponent } from './grafica-comparacion-tipo-cliente.component';

describe('GraficaComparacionTipoClienteComponent', () => {
  let component: GraficaComparacionTipoClienteComponent;
  let fixture: ComponentFixture<GraficaComparacionTipoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaComparacionTipoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaComparacionTipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
