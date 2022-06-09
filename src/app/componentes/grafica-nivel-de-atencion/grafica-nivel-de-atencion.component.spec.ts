import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaNivelDeAtencionComponent } from './grafica-nivel-de-atencion.component';

describe('GraficaNivelDeAtencionComponent', () => {
  let component: GraficaNivelDeAtencionComponent;
  let fixture: ComponentFixture<GraficaNivelDeAtencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaNivelDeAtencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaNivelDeAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
