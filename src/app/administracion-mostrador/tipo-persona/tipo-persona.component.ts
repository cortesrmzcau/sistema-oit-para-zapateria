import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-persona',
  templateUrl: './tipo-persona.component.html',
  styleUrls: ['../administracion-mostrador.component.css']
})
export class TipoPersonaComponent implements OnInit {

  optionsSelect: Array<any>;

    ngOnInit() {
        this.optionsSelect = [
            { value: 'Bebe', label: 'Bebe' },
            { value: 'Niño / Niña', label: 'Niño / Niña' },
            { value: 'Joven', label: 'Joven' },
            { value: 'Adulto', label: 'Adulto' },
        ];
    }

}
