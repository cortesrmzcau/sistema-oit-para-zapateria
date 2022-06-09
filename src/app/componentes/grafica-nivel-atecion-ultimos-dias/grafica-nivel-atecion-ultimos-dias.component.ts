import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Registro } from '../../modelos/modelos';

@Component({
  selector: 'app-grafica-nivel-atecion-ultimos-dias',
  templateUrl: './grafica-nivel-atecion-ultimos-dias.component.html',
  styleUrls: ['./grafica-nivel-atecion-ultimos-dias.component.scss']
})
export class GraficaNivelAtecionUltimosDiasComponent implements OnInit {

  ListaRegistroTablasGraficaAzul: Registro[];
  ArregloGraficaAzul: string[] = [];
  ArregloFechaGraficaAzul: string[] = [];
  ListaSatisfacciones: string[] = [];

  constructor(public Metodos: Servicios,
              public Firebase: AngularFireDatabase) { }

  ngOnInit() {
    //this.ObtenerDatosGraficaAzul();
    //this.ObtenerLabelGraficaAzul();
    //this.Fecha();
    this.DiaActual();
    this.ObtenerGraficaSatisfacciones();
  }

  DiaActual(){
    var meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
    var f=new Date();
    var dia:any = f.getDate();
    //var anio = f.getFullYear();

    if(parseInt(dia) < 10){
      dia= '0' + dia
    }
  
    var FechaGrafica: string[] = [];

    FechaGrafica.push((dia - 4) + " de " +  meses[f.getMonth()]);
    FechaGrafica.push((dia - 3) + " de " +  meses[f.getMonth()]);
    FechaGrafica.push((dia - 2) + " de " +  meses[f.getMonth()]);
    FechaGrafica.push((dia - 1) + " de " +  meses[f.getMonth()]);
    FechaGrafica.push(dia + " de " +  meses[f.getMonth()]);

    this.chartLabels = FechaGrafica;

    //console.log(this.chartLabels);
  }

  ObtenerGraficaSatisfacciones(){
    this.Metodos.ObtenerGraficaSatisfacciones().snapshotChanges()
    .subscribe(item => {
      this.ListaSatisfacciones = [];
      item.forEach(element => {
        let y: any = element.payload.toJSON();
        y["$key"] = element.key;
        this.ListaSatisfacciones.push(y['Satisfacciones']);
      });

      this.chartDatasets = this.ListaSatisfacciones;
      //console.log(this.ListaSatisfacciones);
    });
  }
















  Fecha(){
    var meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
    var f=new Date();
    var dia:any = f.getDate();
    var anio = f.getFullYear();

    if(parseInt(dia) < 10){
      dia = '0' + dia
    }

    var FechaGrafica: string[] = [];
    var FechaGeneral: string[] = [];

    FechaGrafica.push(dia + " de " +  meses[f.getMonth()]);
    FechaGeneral.push(dia + " de " + meses[f.getMonth()] + " del " + anio);
    console.log(FechaGrafica);
    console.log(FechaGeneral);
  }

  ObtenerDatosGraficaAzul(){
    this.Metodos.ObtenerRegistrosGraficaAzul().snapshotChanges().subscribe(
      item => {
        this.ListaRegistroTablasGraficaAzul = [];
        item.forEach( element => {
          let graficaAzul: any = element.payload.toJSON();
          graficaAzul["key"] = element.key;
          this.ArregloGraficaAzul.push(graficaAzul["dato"]);
        })
        this.chartDatasets = this.ArregloGraficaAzul;
            console.log(this.chartDatasets);
      }
    )
  }

  ObtenerLabelGraficaAzul(){
    this.Metodos.ObtenerRegistrosGraficaAzul().snapshotChanges().subscribe(
      item => {
        this.ListaRegistroTablasGraficaAzul = [];
        item.forEach( element => {
          let graficaAzul: any = element.payload.toJSON();
          graficaAzul["key"] = element.key;
          this.ArregloFechaGraficaAzul.push(graficaAzul["FechaGrafica"]);
        })
        this.chartLabels = this.ArregloFechaGraficaAzul;
            //console.log(this.chartDatasets);
        console.log(this.chartLabels);
      }
    )
  }

  public chartType:string = 'line';

  public chartDatasets:Array<any> = [{
    
    //data: [0,15,15,60,15,75,0],
    //label: 'Hombres'
  }];

  public chartLabels:Array<any> = [
    
    //'23 de Oct','24 de Oct','25 de Oct','26 de Oct','27 de Oct','28 de Oct','29 de Oct'
  ];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(39,174,96,0)',
          borderColor: 'rgba(41,128,185,1)',
          borderWidth: 4,
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          lineTension: 0
      }
  ];

  public chartOptions:any = {
      //responsive: true,
      legend: {
        display: false,
        position: 'bottom'
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 15,
            //display: true
          },
          //stacked: true,
          gridLines: {
            display: true
            //color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
  };

}
