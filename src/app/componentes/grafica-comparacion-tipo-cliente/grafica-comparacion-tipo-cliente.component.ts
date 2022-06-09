import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { AtencionCliente } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
  selector: 'app-grafica-comparacion-tipo-cliente',
  templateUrl: './grafica-comparacion-tipo-cliente.component.html',
  styleUrls: ['./grafica-comparacion-tipo-cliente.component.scss']
})
export class GraficaComparacionTipoClienteComponent implements OnInit {

  ListaAtencionCliente: AtencionCliente[];
  ListaAtencionClienteBueno: AtencionCliente[];
  ListaAtencionClienteMalo: AtencionCliente[];

  Bueno1: number = 0;
  Bueno2: number = 0;
  Bueno3: number = 0;
  Bueno4: number = 0;
  Bueno5: number = 0;

  Malo1: number = 0;
  Malo2: number = 0;
  Malo3: number = 0;
  Malo4: number = 0;
  Malo5: number = 0;

  constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

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

          for(var x of this.ListaAtencionClienteBueno){
            if(x['Posicion'] === 1){
              this.Bueno1 = x['Contador'];
            }

            if(x['Posicion'] === 2){
              this.Bueno2 = x['Contador'];
            }

            if(x['Posicion'] === 3){
              this.Bueno3 = x['Contador'];
            }

            if(x['Posicion'] === 4){
              this.Bueno4 = x['Contador'];
            }

            if(x['Posicion'] === 5){
              this.Bueno5 = x['Contador'];
            }
          }

          for(var x of this.ListaAtencionClienteMalo){
            if(x['Posicion'] === 1){
              this.Malo1 = x['Contador'];
            }

            if(x['Posicion'] === 2){
              this.Malo2 = x['Contador'];
            }

            if(x['Posicion'] === 3){
              this.Malo3 = x['Contador'];
            }

            if(x['Posicion'] === 4){
              this.Malo4 = x['Contador'];
            }

            if(x['Posicion'] === 5){
              this.Malo5 = x['Contador'];
            }
          }
          
          this.chartDatasets = [
            { 
              data:
                [
                  this.Bueno1,
                  this.Bueno2,
                  this.Bueno3,
                  this.Bueno4,
                  this.Bueno5,
                ], label: 'Satisfacción del Cliente'
            },
            {
                data: 
                [
                  this.Malo1,
                  this.Malo2,
                  this.Malo3,
                  this.Malo4,
                  this.Malo5,
                ], label: 'Reclamaciónes de los clientes'
            }
        ]

      });
  }


  public chartType:string = 'bar';

      public chartDatasets:Array<any> = [
        {
          data: [], label: 'Satisfacción del Cliente'
        },
        {
          data: [], label: 'Reclamaciónes de los clientes'
        }
          //{data: [1, 20, 35, 19, 4], label: 'Satisfacción del Cliente'},
          //{data: [1, 29, 15, 12, 2], label: 'Reclamaciónes de los clientes'}
      ];

      public chartLabels:Array<any> = ['1', '2', '3', '4', '5'];

      public chartColors:Array<any> = [
          {
              backgroundColor: 'rgba(39,174,96,1)',
              borderColor: 'rgba(220,220,220,1)',
              borderWidth: 0,
              pointBackgroundColor: 'rgba(220,220,220,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(220,220,220,1)'
          },
          {
              backgroundColor: 'rgba(231,76,60,1)',
              borderColor: 'rgba(151,187,205,1)',
              borderWidth: 0,
              pointBackgroundColor: 'rgba(151,187,205,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(151,187,205,1)'
          }
      ];

      public chartOptions:any = {
        legend: {
          display: true,
          position: 'bottom'
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              stepSize: 10,
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
