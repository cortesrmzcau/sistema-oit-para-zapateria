/*import { Component, OnInit} from '@angular/core';
import { Servicios } from '../servicios/service.service';
import { Registro, ZapatoMostrador } from '../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';
//import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administracion-mostrador',
  templateUrl: './administracion-mostrador.component.html',
  styleUrls: ['../oit/panel-control/panel-control.component.scss',
              './administracion-mostrador.component.css']
})
export class AdministracionMostradorComponent implements OnInit {

  imagen = 'chaeyoung.jpg';

  ListaPrevia: ZapatoMostrador[];
  ListaRegistroTablas: Registro[];
  ListaRegistrosZapatoMostrador: Registro[];

  Arreglo2: any[] = new Array();
  Auxiliar: string;

  constructor(public Metodos: Servicios,
              public Firebase: AngularFireDatabase,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.ZapatosMostrador();
  }

  BuscarCalzado(value: string) {
    this.Metodos.ObtenerRegistrosTabla().snapshotChanges().subscribe(item =>{
      this.ListaRegistroTablas = [];
      item.forEach(element => {
        let registro: any = element.payload.toJSON();
        registro["$key"] = element.key;
        this.Arreglo2.push(registro);
      })
      for (let x of this.Arreglo2){
        if (x["CodigoCalzado"] == value){
          
          console.log(x["$key"] + " Existe en la base");
          this.ListaRegistroTablas.push(x);
          this.Auxiliar = x["$key"];
          console.log(this.Auxiliar);

          console.log(this.ListaRegistroTablas);
          this.DevolverDatos(this.ListaRegistroTablas[0]);

        }
      }
    })
  }

  DevolverDatos(DevolverRegistro: ZapatoMostrador){
    console.log("Se activo");
    this.Metodos.CodigoCalzadoSeleccionado = Object.assign({}, DevolverRegistro);
  }

  ZapatosMostrador(){
    this.Metodos.ObtenerRegistrosZapatoMostrador().snapshotChanges().subscribe(item => {
      this.ListaRegistrosZapatoMostrador = [];
      item.forEach(element => {
        let mostrador: any = element.payload.toJSON();
        mostrador["$key"] = element.key;
        this.ListaRegistrosZapatoMostrador.push(mostrador);
      })
    });
  }

  // Agregar a Tabla Zapato Mostrador

  onSubmit(FormularioMostrador: NgForm){
    this.Metodos.AgregarZapatoMostrador(FormularioMostrador.value);
    FormularioMostrador.reset();
    this.Metodos.RegistroSeleccionado = new ZapatoMostrador();
  }

  AntesDeBorrar($key: string){
    if(confirm('¿Estas seguro que deseas borrar el registro?')) {
      this.Metodos.BorrarRegistroZapatoMostrador($key);
      this.toastr.warning('Borrado Exitosamente', 'Registro Removido');
    }
  }

  ResetearFormulario(FormularioMostrador?: NgForm){
    if(FormularioMostrador != null){
      FormularioMostrador.reset();
      this.Metodos.RegistroSeleccionado = new ZapatoMostrador();
    }
  }


}
*/

import { Component, OnInit} from '@angular/core';
import { Servicios } from '../servicios/service.service';
import { Registro, ZapatoMostrador } from '../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';
//import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administracion-mostrador',
  templateUrl: './administracion-mostrador.component.html',
  styleUrls: ['../oit/panel-control/panel-control.component.scss',
              './administracion-mostrador.component.css']
})
export class AdministracionMostradorComponent implements OnInit {

  imagen = 'chaeyoung.jpg';

  ListaPrevia: ZapatoMostrador[];
  ListaRegistroTablas: Registro[];
  ListaRegistrosZapatoMostrador: Registro[];

  Arreglo2: any[] = new Array();
  Auxiliar: string;

  constructor(public Metodos: Servicios,
              public Firebase: AngularFireDatabase,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.ZapatosMostrador();
  }

  BuscarCalzado(value: string) {
    this.Metodos.ObtenerRegistrosTabla().snapshotChanges().subscribe(item =>{
      this.ListaRegistroTablas = [];
      item.forEach(element => {
        let registro: any = element.payload.toJSON();
        registro["$key"] = element.key;
        this.Arreglo2.push(registro);
      })
      for (let x of this.Arreglo2){
        if (x["CodigoCalzado"] == value){
          
          console.log(x["$key"] + " Existe en la base");
          this.ListaRegistroTablas.push(x);
          this.Auxiliar = x["$key"];
          console.log(this.Auxiliar);

          console.log(this.ListaRegistroTablas);
          this.DevolverDatos(this.ListaRegistroTablas[0]);

        }
      }
    })
  }

  DevolverDatos(DevolverRegistro: ZapatoMostrador){
    console.log("Se activo");
    this.Metodos.CodigoCalzadoSeleccionado = Object.assign({}, DevolverRegistro);
  }

  ZapatosMostrador(){
    this.Metodos.ObtenerRegistrosZapatoMostrador().snapshotChanges().subscribe(item => {
      this.ListaRegistrosZapatoMostrador = [];
      item.forEach(element => {
        let mostrador: any = element.payload.toJSON();
        mostrador["$key"] = element.key;
        this.ListaRegistrosZapatoMostrador.push(mostrador);
      })
    });
  }

  // Agregar a Tabla Zapato Mostrador

  onSubmit(FormularioMostrador: NgForm){
    this.Metodos.AgregarZapatoMostrador(FormularioMostrador.value);
    FormularioMostrador.reset();
    this.Metodos.RegistroSeleccionado = new ZapatoMostrador();
  }

  AntesDeBorrar($key: string){
    if(confirm('¿Estas seguro que deseas borrar el registro?')) {
      this.Metodos.BorrarRegistroZapatoMostrador($key);
      this.toastr.warning('Borrado Exitosamente', 'Registro Removido');
    }
  }

  ResetearFormulario(FormularioMostrador?: NgForm){
    if(FormularioMostrador != null){
      FormularioMostrador.reset();
      this.Metodos.RegistroSeleccionado = new ZapatoMostrador();
    }
  }


}
