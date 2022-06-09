import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMostradorComponent } from './administracion-mostrador.component';

describe('AdministracionMostradorComponent', () => {
  let component: AdministracionMostradorComponent;
  let fixture: ComponentFixture<AdministracionMostradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionMostradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionMostradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
