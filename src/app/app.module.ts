import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
//import { MDBSpinningPreloader } from './typescripts/pro/index';
import { VisitasNegocioComponent } from './oit/visitas-del-negocio/visita-del-negocio.component';
import { PublicidadComponent } from './oit/publicidad/publicidad.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment} from '../environments/environment';
import { UploadFileService } from './servicios/upload-file.service';

// Rutas
import { routing, appRoutingProviders } from './app.routing';
import { InicioComponent } from './inicio/inicio.component';
import { PanelControlComponent } from './oit/panel-control/panel-control.component';
import { AdministracionMostradorComponent } from './administracion-mostrador/administracion-mostrador.component';

// Componentes OIT - Panel Cntrol
import { GraficaBarraVisitas } from './componentes/grafica_barra_visitas/grafica.barra.visitas.component';
import { GraficaBarraVisitasClientes } from './componentes/grafica_barra_visitas_clientes/grafica.barra.visitas.clientes.component';
import { NumeroPersonaVistanNegocio } from './componentes/grafica_numero_personas_vistan_negocio/grafica.numero.personas.visitan.negocio.component';
import { GraficaVisitaHoraDiaActual } from './componentes/grafica_visita_hora_dia_actual/grafica.visita.hora.dia.actual.component';
import { SelectGraficaHoraDia } from './componentes/select_grafica_hora_dia_actual/select_grafica_hora_dia_actual.component';

// Componentes OIT - Visitas
import { EstadoSensor } from './componentes/estado_sensor/estado.sensor.component';
import { GraficaChicaPasillos } from './componentes/grafica_pasillos/grafica.pasillos.component';
import { GraficaChicaProvadores } from './componentes/grafica_provadores/grafica.provadores.component';
import { GraficaChicaMostrador } from './componentes/grafica_mostrador/grafica.mostrador.component';
import { GraficaChicaAlmacen } from './componentes/grafica_almacen/grafica.almacen.component';

// Componentes Administracion - Mostrador
import { IdSensorComponent } from './administracion-mostrador/id-sensor/id-sensor.component';
import { ColorComponent } from './administracion-mostrador/color/color.component';
import { NumeroCalzadoComponent } from './administracion-mostrador/numero-calzado/numero-calzado.component';
import { TipoPersonaComponent } from './administracion-mostrador/tipo-persona/tipo-persona.component';
import { ComportamientoComponent } from './oit/comportamiento/comportamiento.component';
import { GraficaTipoClientesInteractuanComponent } from './componentes/grafica_tipo_clientes_interactuan/grafica.tipo.clientes.interactuan.component';
import { GraficaInteraccionPasillosComponent } from './componentes/grafica-interaccion-pasillos/grafica-interaccion-pasillos.component';
import { AtencionAlClienteComponent } from './oit/atencion-al-cliente/atencion-al-cliente.component';
import { GraficaNivelDeAtencionComponent } from './componentes/grafica-nivel-de-atencion/grafica-nivel-de-atencion.component';
import { GraficaNivelAtecionUltimosDiasComponent } from './componentes/grafica-nivel-atecion-ultimos-dias/grafica-nivel-atecion-ultimos-dias.component';
import { GraficaComparacionTipoClienteComponent } from './componentes/grafica-comparacion-tipo-cliente/grafica-comparacion-tipo-cliente.component';
import { ProductosComponent } from './almacen/productos/productos.component';
import { SubirImagenComponent } from './componentes/subir-imagen/subir-imagen.component';

// Servicios
import { Servicios } from './servicios/service.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MicrofonoComponent } from './componentes/microfono/microfono.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelControlComponent,
    VisitasNegocioComponent,
    PublicidadComponent,
    InicioComponent,
    GraficaBarraVisitas, // Visitas
    GraficaBarraVisitasClientes,
    NumeroPersonaVistanNegocio,
    GraficaVisitaHoraDiaActual,
    SelectGraficaHoraDia,
    EstadoSensor, // Panel Control
    GraficaChicaProvadores,
    GraficaChicaPasillos,
    GraficaChicaMostrador,
    GraficaChicaAlmacen,
    AdministracionMostradorComponent,
    IdSensorComponent,
    ColorComponent,
    NumeroCalzadoComponent,
    TipoPersonaComponent,
    ComportamientoComponent,
    GraficaTipoClientesInteractuanComponent,
    GraficaInteraccionPasillosComponent,
    AtencionAlClienteComponent,
    GraficaNivelDeAtencionComponent,
    GraficaNivelAtecionUltimosDiasComponent,
    GraficaComparacionTipoClienteComponent,
    ProductosComponent,
    SubirImagenComponent,
    MicrofonoComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    ToastModule.forRoot(),
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCJ1zJa9-jBEKM6ERzDZBuS3zD9rvv9E30'
    })
  ],
  providers: [Servicios,appRoutingProviders,UploadFileService, IdSensorComponent],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
