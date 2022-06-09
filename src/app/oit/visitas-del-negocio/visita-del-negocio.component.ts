import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Clientes, Ciudad, usuarios } from '../../modelos/modelos'; //Registro
import { marker } from '../../modelos/mapa';
import { Servicios } from '../../servicios/service.service';
import { MouseEvent } from '@agm/core';
//import { shallowEqualArrays } from '@angular/router/src/utils/collection';
//import { query } from '@angular/animations';

@Component({
  selector: 'app-panel-control',
  templateUrl: 'visita-del-negocio.component.html',
  styleUrls: ['../panel-control/panel-control.component.scss']
})
export class VisitasNegocioComponent implements OnInit {

  ListaClientes: Clientes[];
  ListaCiudades: Ciudad[];
  ListaUsuario: usuarios[];

  // Variables para el sexo
  
  ListaEdades: usuarios[];
  ListaMarcadoresCiudad: Clientes[];
  ArregloSexo: string[] = new Array();
  ArregloSexoHombre: string[] = new Array();
  ArregloSexoMujer: string[] = new Array();
  ArregloPozaRica: string[] = new Array();
  ArregloKawatzin: string[] = new Array();
  ArregloCoatzintla: string[] = new Array();
  ArregloPapantla: string[] = new Array();
  ArregloCiudades: string[]= new Array();
  ArregloVisitaCiudades: string[] = new Array();

  Total: number = 0;
  TotalHombres: number = 0;
  TotalMujeres: number = 0;

  OperacionHombre: any;
  OperacionMujer: any;

  TotalPozaRica: number = 0;
  TotalKawatzin: number = 0;
  TotalCoatzintla: number = 0;
  TotalPapantla: number = 0;

  ArregloPuntoPozaRica: number[] = new Array();
  Total2: number = 0;
  markers: marker[] = new Array();
  lat: any;
  lng: any;
  latMapa = 20.5287952;
  lngMapa = -97.4639284;
  content: any;
  population: any;

  ArregloContadorVisitaClientes: number[] = new Array();
  ContadorVisitas: number = 0;
  ArregloContadorClientes: number[] = new Array();
  ContadorClientes: number = 0;

  // Dia Anterior

  ObtenerDiaAnterior: any[] = new Array();
  OperacionParaDiaActualBaja: number = 0;
  OperacionParaDiaActualSube: number = 0;
  DiaAnterior: number = 0;
  VisitaSube: number = 0;
  VisitaBaja: number = 0;

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

  ngOnInit() {
      this.Metodos.ObtenerRegistroClientes().snapshotChanges()
      .subscribe(item => {
        //this.ListaClientes = [];
        this.ListaUsuario = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaUsuario.push(x);
        })
        console.log(this.ListaUsuario);
      });

      this.Metodos.ObtenerEstadoDiaAnterior().snapshotChanges()
      .subscribe(item => {
        this.ObtenerDiaAnterior = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ObtenerDiaAnterior.push(x);
        })
        
        for(let y of this.ObtenerDiaAnterior){
          if(y['DiaAnterior']){
            this.DiaAnterior = y['DiaAnterior'];

            this.OperacionParaDiaActualBaja = 100 - ((this.ContadorVisitas / this.DiaAnterior) * 100);
            this.OperacionParaDiaActualSube = 100 - ((this.DiaAnterior / this.ContadorVisitas) * 100);

            if(this.ContadorVisitas < this.DiaAnterior){
              this.VisitaBaja = this.OperacionParaDiaActualBaja;
            }

            if(this.ContadorVisitas > this.DiaAnterior){
              this.VisitaSube = Math.round(this.OperacionParaDiaActualSube);
            }
          }
        }
      });
      
    this.VisitasMarcadores();
  }

  VisitasMarcadores(){
    this.Metodos.ObtenerRegistroClientes().snapshotChanges()
    .subscribe(item => {
      this.ListaUsuario = [];
      this.ListaEdades = [];
      this.ListaMarcadoresCiudad = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListaEdades.push(x);
        this.ListaUsuario.push(x);
        this.ListaMarcadoresCiudad.push(x);
        this.ArregloContadorVisitaClientes.push(parseInt(x['numerovisitas']));
      });

      this.Metodos.ObtenerCiudad().snapshotChanges()
      .subscribe(item => {
        this.ListaCiudades = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaCiudades.push(x);
        });

      for(var i = 0; i < this.ArregloContadorVisitaClientes.length; i++){
        this.ArregloContadorVisitaClientes[i];
        this.ContadorVisitas = this.ContadorVisitas + this.ArregloContadorVisitaClientes[i];
        console.log(this.ContadorVisitas);
      }

      for(var y of this.ListaEdades){
        if(parseInt(y['numerocompras']) >= 3){
          this.ArregloContadorClientes.push(parseInt(y['numerocompras']));
          this.ContadorClientes = this.ArregloContadorClientes.length;
        }

        if(y['sexo']){
          this.ArregloSexo.push(y['sexo']);
          this.Total = this.ArregloSexo.length;
          
          if(y['sexo'] == 'Hombre'){
              this.ArregloSexoHombre.push(y['sexo']);
              this.TotalHombres = this.ArregloSexoHombre.length;
              console.log(this.TotalHombres);
          }

          this.OperacionHombre = Math.round((this.TotalHombres/this.Total) * 100);

          if(y['sexo'] == 'Mujer'){
              this.ArregloSexoMujer.push(y['sexo']);
              this.TotalMujeres = this.ArregloSexoMujer.length;
              console.log(this.TotalMujeres);
          }

          this.OperacionMujer = Math.round((this.TotalMujeres/this.Total) * 100);
        }
      }
      
      for(var n of this.ListaCiudades){
        for(var m of this.ListaUsuario){

          if(m['municipio'] == n['Ciudad']){
            
            if(m['municipio'] == "Poza Rica"){
              this.ArregloPozaRica.push(m['municipio']);
              this.TotalPozaRica = this.ArregloPozaRica.length;
            }

            if(m['municipio'] == "Coatzintla"){
              this.ArregloCoatzintla.push(m['municipio']);
              this.TotalCoatzintla = this.ArregloCoatzintla.length;
            }

            if(m['municipio'] == "Papantla"){
              this.ArregloPapantla.push(m['municipio']);
              this.TotalPapantla = this.ArregloPapantla.length;
            }

            if(m['municipio'] == "Kawatzin"){
              this.ArregloKawatzin.push(m['municipio']);
              this.TotalKawatzin = this.ArregloKawatzin.length;
            }
          }

          if(n['Ciudad'] == m['municipio']){

            var Ciudad = [];

              Ciudad = [
                {
                  lat: parseFloat(n['Lat']),
                  lng: parseFloat(n['Lng']),
                  content: n['Ciudad']
                }];

                this.markers.push(Ciudad[0]);
                continue;
          }
        }
      }


      });
    });
  }

  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      content: '1'
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  /*
  markers: marker[] = [
	  {
      lat: 20.5287952,
      lng: -97.4639284,
      content: 'Poza Rica ' + this.TotalPozaRica + ' Visitas',
    },
    {
      lat: 20.477501,
      lng: -97.4519675,
      content: 'Kawatzin ' + this.TotalKawatzin + ' Visitas',
    },{
      lat: 20.4855636,
      lng: -97.4860901,
      content: 'Coatzintla ' + this.TotalCoatzintla + ' Visitas',
    },{
      lat: 20.4566703,
      lng: -97.3243679,
      content: 'Papantla ' + this.TotalPapantla + ' Visitas',
    }
  ]

  
  lat: number = 20.5287952;
  lng: number = -97.4639284;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    var a = 10;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      content: a,
      population: 603502,
    });
  }*/

}
