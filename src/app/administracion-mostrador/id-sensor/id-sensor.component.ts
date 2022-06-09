import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-id-sensor',
  templateUrl: './id-sensor.component.html',
  styleUrls: ['./id-sensor2.component.scss']
})
export class IdSensorComponent implements OnInit {
    
    value: string;

    optionsSelect:Array<any>;
    
    ngOnInit() {    
    this.optionsSelect= [
            { value: '1R234WLMN', label: '1R234WLMN' },
            { value: '2C345LMMTZ', label: '2C345LMMTZ' }
        ];
        //console.log(this.propiedadUno);
    }

    @Output() ValorOption = new EventEmitter();

    Enviar(event: any){
        event
        this.ValorOption.emit({Ricardo: this.value});
    }

}
