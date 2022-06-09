import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AtencionCliente, GraficaAtencion } from '../../modelos/modelos';
import { Servicios } from '../../servicios/service.service';

@Component({
  selector: 'app-atencion-al-cliente',
  templateUrl: './atencion-al-cliente.component.html',
  styleUrls: ['../panel-control/panel-control.component.scss',
              './atencion-al-cliente.component.css']
})
export class AtencionAlClienteComponent implements OnInit {

  ListaAtencionCliente: AtencionCliente[];
  ListaAtencionClienteBueno: AtencionCliente[];
  ListaAtencionClienteMalo: AtencionCliente[];
  FechaActual: GraficaAtencion[];

  resultado: number = 0;

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase) {
    }

  ngOnInit() {
    this.TablaBuenoMalo();
  }

  TablaBuenoMalo(){
    this.Metodos.ObtenerListaTablaBueno().snapshotChanges()
        .subscribe(item => {
          this.ListaAtencionCliente = [];
          this.ListaAtencionClienteBueno = [];
          this.ListaAtencionClienteMalo = [];
          item.forEach(element => {
            let y: any = element.payload.toJSON();
            y["$key"] = element.key;
            this.ListaAtencionCliente.push(y);

            if(y['Estado'] == "Bueno"){
              this.ListaAtencionClienteBueno.push(y);
            }

            if(y['Estado'] == "Malo"){
              this.ListaAtencionClienteMalo.push(y);
            }

          });

          this.Metodos.ObtenerGraficaSatisfacciones().snapshotChanges()
        .subscribe(item => {
          this.FechaActual = [];
          item.forEach(element => {
            let y: any = element.payload.toJSON();
            y["$key"] = element.key;
            this.FechaActual.push(y);
          });

/*          var q: any;

          for(var t of this.ListaAtencionClienteBueno){
            this.resultado = this.resultado + t['Contador'];
            var q: any = t['$key'];
          }

          console.log(this.resultado);

      this.Metodos.ObtenerGraficaSatisfacciones().snapshotChanges()
        .subscribe(item => {
          this.FechaActual = [];
          item.forEach(element => {
            let y: any = element.payload.toJSON();
            y["$key"] = element.key;
            this.FechaActual.push(y);
          });

          console.log(this.FechaActual);

          console.log(q + " - " + this.resultado);

          var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Jun","Jul",
          "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
          var f=new Date();
          var dia:any = f.getDate();
          var anio = f.getFullYear();

          if(parseInt(dia) < 10){
            dia= '0' + dia
          }

          var FechadeHoy: string = dia + " de " + meses[f.getMonth()] + " del " + anio;
          console.log(FechadeHoy);

          for(var a of this.FechaActual){
            if(FechadeHoy === a['Fecha']){
              console.log("Son igusales");
              var sa = a['Satisfacciones'] + 1 ;
              //console.log(sa);
              this.Metodos.ActualizarFechaActual(a['$key'], parseInt(sa));
            }
          }

        }); */
      });
      });
  }

}
