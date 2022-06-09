import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaNivelAtecionUltimosDiasComponent } from './grafica-nivel-atecion-ultimos-dias.component';

describe('GraficaNivelAtecionUltimosDiasComponent', () => {
  let component: GraficaNivelAtecionUltimosDiasComponent;
  let fixture: ComponentFixture<GraficaNivelAtecionUltimosDiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaNivelAtecionUltimosDiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaNivelAtecionUltimosDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
