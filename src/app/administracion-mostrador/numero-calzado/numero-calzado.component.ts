import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-calzado',
  templateUrl: './numero-calzado.component.html',
  styleUrls: ['./numero-calzado.component.scss']
})
export class NumeroCalzadoComponent implements OnInit {

  optionsSelect: Array<any>;

    ngOnInit() {
        this.optionsSelect = [
            { value: '2', label: '2' },
            { value: '2 1/2', label: '2 1/2' },
            { value: '3', label: '3' },
            { value: '3 1/5', label: '3 1/2' },
            { value: '4', label: '4' },
            { value: '4 1/2', label: '4 1/2' },
            { value: '5', label: '5' },
        ];
    }

}
