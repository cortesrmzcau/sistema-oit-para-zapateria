import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-grafica-hora-dia-actual',
  //styleUrls: ['select.component.css'],
  templateUrl: 'select_grafica_hora_dia_actual_component.html'

})

export class SelectGraficaHoraDia implements OnInit {

    @Output() public optionsSelect: Array<any>;

    ngOnInit() {
        this.optionsSelect = [
            { value: '0', label: 'Option 0', select: 'select' },
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
        ];
    }

}
