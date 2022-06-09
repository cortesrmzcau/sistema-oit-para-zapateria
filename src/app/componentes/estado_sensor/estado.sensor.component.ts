import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { Sensores } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
    selector: 'grafica-pastel-estado-sensor',
    templateUrl: 'estado.sensor.component.html',
})

export class EstadoSensor implements OnInit{

    ListaSensores: Sensores[];
    ArregloMostrador: string[] = new Array();
    TotalSensores: number[] = new Array();
    ArregloMovimiento: string[] = new Array();
    ArregloSensoresActivos: string[] = new Array();

    SumaTodosLosSensores = 0;
    TotalSensoresPrecencia: number;
    TotalSensoresMovimiento: number;
    TotalSensoresActivos: number;

    ArregloTotalServos: string[] = new Array();
    TotalServos: number;

    ArregloTotalMicrofonos: string[] = new Array();
    TotalMicrofonos: number = 0;

    constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

    ngOnInit() {
        this.VerQueOnda();
    }

    VerQueOnda(){
        this.Metodos.ObtenerListaSensores().snapshotChanges()
          .subscribe(item => {
            this.ListaSensores = [];
            item.forEach(element => {
              let x: any = element.payload.toJSON();
              x["$key"] = element.key;
            this.ListaSensores.push(x);
            })
            console.log(this.ListaSensores);

            for(let x of this.ListaSensores){

                if(x['Estado'] == 'Activado'){
                    this.ArregloSensoresActivos.push(x['Estado']);
                    this.TotalSensoresActivos = this.ArregloSensoresActivos.length;
                }

                if(x['Colocacion'] == 'Mostrador1' || x['Colocacion'] == 'Mostrador2'){
                    this.ArregloMostrador.push(x['Colocacion']);
                    this.TotalSensoresPrecencia = this.ArregloMostrador.length;
                }

                if(x['Colocacion'] == 'Movimiento1' || x['Colocacion'] == 'Movimiento2'){
                    this.ArregloMovimiento.push(x['Colocacion']);
                    this.TotalSensoresMovimiento = this.ArregloMovimiento.length;
                }

                if(x['Colocacion'] == 'Puerta'){
                    this.ArregloTotalServos.push(x['Colocacion']);
                    this.TotalServos = this.ArregloTotalServos.length;
                }

                if(x['Colocacion'] == 'Proveedores'){
                    this.ArregloTotalMicrofonos.push(x['Colocacion']);
                    this.TotalMicrofonos = this.ArregloTotalMicrofonos.length;
                  }
            }

            this.TotalSensores.push(this.TotalSensoresPrecencia);
            this.TotalSensores.push(this.TotalServos);
            this.TotalSensores.push(this.TotalSensoresMovimiento);
            this.TotalSensores.push(this.TotalMicrofonos);

            this.chartData = this.TotalSensores;
            console.log(this.TotalSensores);
            //console.log(this.TotalSensores.length);
            
            for(var i = 0; i < this.TotalSensores.length; i++){
                this.TotalSensores[i];
                this.SumaTodosLosSensores = this.SumaTodosLosSensores + this.TotalSensores[i];
            }

            //console.log(this.SumaTodosLosSensores);
          });
      }

    public chartType:string = 'doughnut';

    public chartData:Array<any> = [];
    
    public chartLabels:Array<any> = ['Mostrador', 'Servo','Movimiento','Microfono'];

    public chartColors:Array<any> = [{
        //hoverBorderColor: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#55d8fe", "#ff8373","#ffda83", "#a3a0fb"],
        //hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
    }];

    public chartOptions:any = {
        responsive: true,
        legend: {
          display: false,
        }
    };

}
