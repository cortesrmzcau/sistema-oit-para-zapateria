import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  optionsSelect: Array<any>;

  constructor(public Metodos: Servicios) { }

    ngOnInit() {
        this.optionsSelect = [
            { value: 'Negro', label: 'Negro' },
            { value: 'Cafe', label: 'Cafe' },
            { value: 'Azul', label: 'Azul' },
            { value: 'Gris', label: 'Gris' },
            { value: 'Rosa', label: 'Rosa' },
        ];
    }

    Aqui(){
        console.log("aaaaaaaaaaa" + this.optionsSelect);
    }

}
