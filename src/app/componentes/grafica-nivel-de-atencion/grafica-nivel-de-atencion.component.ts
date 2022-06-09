import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-nivel-de-atencion',
  templateUrl: './grafica-nivel-de-atencion.component.html',
  styleUrls: ['./grafica-nivel-de-atencion.component.scss']
})
export class GraficaNivelDeAtencionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartType:string = 'doughnut';

    public chartData:Array<any> = [90];

    public chartLabels:Array<any> = ['Red'];

    public chartColors:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
    }];

    public chartOptions:any = {
        responsive: true,
        legend: {
          display: false
        }
    };

}
