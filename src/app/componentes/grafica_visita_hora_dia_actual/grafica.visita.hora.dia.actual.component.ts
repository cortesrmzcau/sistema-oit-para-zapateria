import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { Clientes, Temporal, usuarios } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
    selector: 'grafica-visita-hora-dia-actual',
    templateUrl: 'grafica.visita.hora.dia.actual.component.html',
})

export class GraficaVisitaHoraDiaActual implements OnInit{

  ListaUsuario: usuarios[];
  ListaClientes: Clientes[];
  Temporal: Temporal[];

  Hora78: number[] = new Array();
  Hora89: number[] = new Array();
  Hora910: number[] = new Array();
  Hora1011: number[] = new Array();
  Hora1112: number[] = new Array();
  Hora1213: number[] = new Array();
  Hora1314: number[] = new Array();
  Hora1415: number[] = new Array();
  Hora1516: number[] = new Array();
  Hora1617: number[] = new Array();
  Hora1718: number[] = new Array();
  Hora1819: number[] = new Array();
  Hora1920: number[] = new Array();
  Hora2021: number[] = new Array();
  Hora2122: number[] = new Array();
  Hora2223: number[] = new Array();

  Hora78M: number[] = new Array();
  Hora89M: number[] = new Array();
  Hora910M: number[] = new Array();
  Hora1011M: number[] = new Array();
  Hora1112M: number[] = new Array();
  Hora1213M: number[] = new Array();
  Hora1314M: number[] = new Array();
  Hora1415M: number[] = new Array();
  Hora1516M: number[] = new Array();
  Hora1617M: number[] = new Array();
  Hora1718M: number[] = new Array();
  Hora1819M: number[] = new Array();
  Hora1920M: number[] = new Array();
  Hora2021M: number[] = new Array();
  Hora2122M: number[] = new Array();
  Hora2223M: number[] = new Array();

  Total78: number = 0;
  Total89: number = 0;
  Total910: number = 0;
  Total1011: number = 0;
  Total1112: number = 0;
  Total1213: number = 0;
  Total1314: number = 0;
  Total1415: number = 0;
  Total1516: number = 0;
  Total1617: number = 0;
  Total1718: number = 0;
  Total1819: number = 0;
  Total1920: number = 0;
  Total2021: number = 0;
  Total2122: number = 0;
  Total2223: number = 0;


  Total78M: number = 0;
  Total89M: number = 0;
  Total910M: number = 0;
  Total1011M: number = 0;
  Total1112M: number = 0;
  Total1213M: number = 0;
  Total1314M: number = 0;
  Total1415M: number = 0;
  Total1516M: number = 0;
  Total1617M: number = 0;
  Total1718M: number = 0;
  Total1819M: number = 0;
  Total1920M: number = 0;
  Total2021M: number = 0;
  Total2122M: number = 0;
  Total2223M: number = 0;

  ArregloHora78: number[] = new Array();
  TotalArreglo78: number = 0;

  constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

  ngOnInit(){
    //this.VisitaHora();
    this.VisitaHoraClientes();
  }

  VisitaHoraClientes(){
    this.Metodos.ObtenerIntervaloHorasGraficaVisitaHoraDiaActual().snapshotChanges()
    .subscribe(item => {
      this.ListaUsuario = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListaUsuario.push(x);
      });

      console.log(this.ListaUsuario);

      for(var a of this.ListaUsuario){
        if(a['sexo'] == "Hombre"){
          if(parseFloat(a['hora']) > 7 && parseFloat(a['hora']) <= 8){
            this.Hora78.push(parseFloat(a['hora']));
            this.Total78 = this.Hora78.length;
            console.log(this.Total78);
          }

          if(parseFloat(a['hora']) > 8 && parseFloat(a['hora']) <= 9){
            this.Hora89.push(parseFloat(a['hora']));
            this.Total89 = this.Hora89.length;
            console.log(this.Total89);
          }

          if(parseFloat(a['hora']) > 9 && parseFloat(a['hora']) <= 10){
            this.Hora910.push(parseFloat(a['hora']));
            this.Total910 = this.Hora910.length;
            console.log(this.Total910);
          }

          if(parseFloat(a['hora']) > 10 && parseFloat(a['hora']) <= 11){
            this.Hora1011.push(parseFloat(a['hora']));
            this.Total1011 = this.Hora1011.length;
            console.log(this.Total1011);
          }

          if(parseFloat(a['hora']) > 11 && parseFloat(a['hora']) <= 12){
            this.Hora1112.push(parseFloat(a['hora']));
            this.Total1112 = this.Hora1112.length;
            console.log(this.Total1112);
          }

          if(parseFloat(a['hora']) > 12 && parseFloat(a['hora']) <= 13){
            this.Hora1213.push(parseFloat(a['hora']));
            this.Total1213 = this.Hora1213.length;
            console.log(this.Total1213);
          }

          if(parseFloat(a['hora']) > 13 && parseFloat(a['hora']) <= 14){
            this.Hora1314.push(parseFloat(a['hora']));
            this.Total1314 = this.Hora1314.length;
            console.log(this.Total1314);
          }

          if(parseFloat(a['hora']) > 14 && parseFloat(a['hora']) <= 15){
            this.Hora1415.push(parseFloat(a['hora']));
            this.Total1415 = this.Hora1415.length;
            console.log(this.Total1415);
          }

          if(parseFloat(a['hora']) > 15 && parseFloat(a['hora']) <= 16){
            this.Hora1516.push(parseFloat(a['hora']));
            this.Total1516 = this.Hora1516.length;
            console.log(this.Total1516);
          }

          if(parseFloat(a['hora']) > 16 && parseFloat(a['hora']) <= 17){
            this.Hora1617.push(parseFloat(a['hora']));
            this.Total1617 = this.Hora1617.length;
            console.log(this.Total1617);
          }

          if(parseFloat(a['hora']) > 17 && parseFloat(a['hora']) <= 18){
            this.Hora1718.push(parseFloat(a['hora']));
            this.Total1718 = this.Hora1718.length;
            console.log(this.Total1718);
          }

          if(parseFloat(a['hora']) > 18 && parseFloat(a['hora']) <= 19){
            this.Hora1819.push(parseFloat(a['hora']));
            this.Total1819 = this.Hora1819.length;
            console.log(this.Total1819);
          }

          if(parseFloat(a['hora']) > 19 && parseFloat(a['hora']) <= 20){
            this.Hora1920.push(parseFloat(a['hora']));
            this.Total1920 = this.Hora1920.length;
            console.log(this.Total1920);
          }

          if(parseFloat(a['hora']) > 20 && parseFloat(a['hora']) <= 21){
            this.Hora2021.push(parseFloat(a['hora']));
            this.Total2021 = this.Hora2021.length;
            console.log(this.Total2021);
          }


        }


        if(a['sexo'] == "Mujer"){
          if(parseFloat(a['hora']) > 7 && parseFloat(a['hora']) <= 8){
            this.Hora78M.push(parseFloat(a['hora']));
            this.Total78M = this.Hora78M.length;
            console.log(this.Total78M);
          }

          if(parseFloat(a['hora']) > 8 && parseFloat(a['hora']) <= 9){
            this.Hora89M.push(parseFloat(a['hora']));
            this.Total89M = this.Hora89M.length;
            console.log(this.Total89M);
          }

          if(parseFloat(a['hora']) > 9 && parseFloat(a['hora']) <= 10){
            this.Hora910M.push(parseFloat(a['hora']));
            this.Total910M = this.Hora910M.length;
            console.log(this.Total910M);
          }

          if(parseFloat(a['hora']) > 10 && parseFloat(a['hora']) <= 11){
            this.Hora1011M.push(parseFloat(a['hora']));
            this.Total1011M = this.Hora1011M.length;
            console.log(this.Total1011M);
          }

          if(parseFloat(a['hora']) > 11 && parseFloat(a['hora']) <= 12){
            this.Hora1112M.push(parseFloat(a['hora']));
            this.Total1112M = this.Hora1112M.length;
            console.log(this.Total1112M);
          }

          if(parseFloat(a['hora']) > 12 && parseFloat(a['hora']) <= 13){
            this.Hora1213M.push(parseFloat(a['hora']));
            this.Total1213M = this.Hora1213M.length;
            console.log(this.Total1213M);
          }

          if(parseFloat(a['hora']) > 13 && parseFloat(a['hora']) <= 14){
            this.Hora1314M.push(parseFloat(a['hora']));
            this.Total1314M = this.Hora1314M.length;
            console.log(this.Total1314M);
          }

          if(parseFloat(a['hora']) > 14 && parseFloat(a['hora']) <= 15){
            this.Hora1415M.push(parseFloat(a['hora']));
            this.Total1415M = this.Hora1415M.length;
            console.log(this.Total1415M);
          }

          if(parseFloat(a['hora']) > 15 && parseFloat(a['hora']) <= 16){
            this.Hora1516M.push(parseFloat(a['hora']));
            this.Total1516M = this.Hora1516M.length;
            console.log(this.Total1516M);
          }

          if(parseFloat(a['hora']) > 16 && parseFloat(a['hora']) <= 17){
            this.Hora1617M.push(parseFloat(a['hora']));
            this.Total1617M = this.Hora1617M.length;
            console.log(this.Total1617M);
          }

          if(parseFloat(a['hora']) > 17 && parseFloat(a['hora']) <= 18){
            this.Hora1718M.push(parseFloat(a['hora']));
            this.Total1718M = this.Hora1718M.length;
            console.log(this.Total1718M);
          }

          if(parseFloat(a['hora']) > 18 && parseFloat(a['hora']) <= 19){
            this.Hora1819M.push(parseFloat(a['hora']));
            this.Total1819M = this.Hora1819M.length;
            console.log(this.Total1819M);
          }

          if(parseFloat(a['hora']) > 19 && parseFloat(a['hora']) <= 20){
            this.Hora1920M.push(parseFloat(a['hora']));
            this.Total1920M = this.Hora1920M.length;
            console.log(this.Total1920M);
          }

          if(parseFloat(a['hora']) > 20 && parseFloat(a['hora']) <= 21){
            this.Hora2021M.push(parseFloat(a['hora']));
            this.Total2021M = this.Hora2021M.length;
            console.log(this.Total2021M);
          }


        }
      }

      this.chartDatasets = [
        { data:
            [ 
              this.Total78,
              this.Total89,
              this.Total910,
              this.Total1011,
              this.Total1112,
              this.Total1213,
              this.Total1314,
              this.Total1415,
              this.Total1516,
              this.Total1617,
              this.Total1718,
              this.Total1819,
              this.Total1920,
              this.Total2021,
              this.Total2122,
              this.Total2223,
            ]
        },
        {
            data: 
            [
              this.Total78M,
              this.Total89M,
              this.Total910M,
              this.Total1011M,
              this.Total1112M,
              this.Total1213M,
              this.Total1314M,
              this.Total1415M,
              this.Total1516M,
              this.Total1617M,
              this.Total1718M,
              this.Total1819M,
              this.Total1920M,
              this.Total2021M,
              this.Total2122M,
              this.Total2223M,
            ]
        }
    ]


    });
  }

  VisitaHora(){
    
    this.Metodos.ObtenerClientesTemporal().snapshotChanges()
    .subscribe(item => {
      this.Temporal = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        this.Temporal.push(x);
      });

      //console.log(this.Temporal);

      for(let x of this.Temporal){

        if(parseFloat(x['Hora']) >= 7 && parseFloat(x['Hora']) <= 8){
          this.Total78 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 8.1 && parseFloat(x['Hora']) <= 9){
          this.Total89 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 9.1 && parseFloat(x['Hora']) <= 10){
          this.Total910 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 10.1 && parseFloat(x['Hora']) <= 11){
          this.Total1011 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 11.1 && parseFloat(x['Hora']) <= 12){
          this.Total1112 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 12.1 && parseFloat(x['Hora']) <= 13){
          this.Total1213 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 13.1 && parseFloat(x['Hora']) <= 14){
          this.Total1314 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 14.1 && parseFloat(x['Hora']) <= 15){
          this.Total1415 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 15.1 && parseFloat(x['Hora']) <= 16){
          this.Total1516 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 16.1 && parseFloat(x['Hora']) <= 17){
          this.Total1617 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 17.1 && parseFloat(x['Hora']) <= 18){
          this.Total1718 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 18.1 && parseFloat(x['Hora']) <= 19){
          this.Total1819 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 19.1 && parseFloat(x['Hora']) <= 20){
          this.Total1920 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 20.1 && parseFloat(x['Hora']) <= 21){
          this.Total2021 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 21.1 && parseFloat(x['Hora']) <= 22){
          this.Total2122 = parseInt(x['Cantidad']);
        }

        if(parseFloat(x['Hora']) >= 22.1 && parseFloat(x['Hora']) <= 23){
          this.Total2223 = parseInt(x['Cantidad']);
        }

      }

      this.chartDatasets = [
        { data:
            [ this.Total78,
              this.Total89,
              this.Total910,
              this.Total1011,
              this.Total1112,
              this.Total1213,
              this.Total1314,
              this.Total1415,
              this.Total1516,
              this.Total1617,
              this.Total1718,
              this.Total1819,
              this.Total1920,
              this.Total2021,
              this.Total2122,
              this.Total2223
            ]
        },
        {
            data: 
            [
                18
            ]
        }
    ]
    });

  }

    public chartType:string = 'line';

    public chartDatasets:Array<any> = [{
      data: [], label: 'Hombres'
    },{
      data: [], label: 'Mujeres'
    }];

    //public chartLabels:Array<any> = ['1 - 10 H'];

    public chartLabels:Array<any> = ['7 - 8 H','8 - 9 H', '9 - 10 H', '10 - 11 H',
    '11 - 12 H', '12 - 13 H', '13 - 14 H', '14 - 15 H','15 - 16 H', '16 - 17 H',
    '17 - 18 H','18 - 19 H','19 - 20 H','20 - 21 H', '21 - 22 H', '22 - 23 H'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(231,76,60,0)',
            borderColor: 'rgba(41,128,185,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(41,128,185,1)',
            //pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0)',
            borderColor: 'rgba(231,76,60,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(231,76,60,1)',
            //pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = {
        //responsive: true,
        legend: {
          display: true,
          position: 'bottom'
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              //beginAtZero:true,
              stepSize: 5,
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
