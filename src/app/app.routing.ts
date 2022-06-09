import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PanelControlComponent } from './oit/panel-control/panel-control.component';
import { VisitasNegocioComponent } from './oit/visitas-del-negocio/visita-del-negocio.component';
import { PublicidadComponent } from './oit/publicidad/publicidad.component';
import { ComportamientoComponent } from './oit/comportamiento/comportamiento.component';
import { AdministracionMostradorComponent } from './administracion-mostrador/administracion-mostrador.component';
import { AtencionAlClienteComponent } from './oit/atencion-al-cliente/atencion-al-cliente.component';
import { ProductosComponent } from './almacen/productos/productos.component';
import { CarouselComponent } from '../../src/app/componentes/carousel/carousel.component';

const appRoutes: Routes = [
  { path: '', component: PanelControlComponent },
  { path: 'administracion-mostrador',component:  AdministracionMostradorComponent},
  { path: 'oit-visitas-negocio',component:  VisitasNegocioComponent},
  { path: 'oit-panel-control',component:  PanelControlComponent},
  { path: 'oit-publicidad',component:  PublicidadComponent},
  { path: 'oit-comportamiento',component:  ComportamientoComponent},
  { path: 'oit-atencion-al-cliente',component:  AtencionAlClienteComponent},
  { path: 'almacen-productos',component:  ProductosComponent},
  { path: 'carousel',component:  CarouselComponent},
  { path: 'inicio',component:  InicioComponent},
  { path: '**',component:  InicioComponent}
];

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
