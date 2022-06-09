/*import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servicios } from '../../servicios/service.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Registro } from '../../modelos/modelos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './new.productos.component.html',
  styleUrls: ['../../oit/panel-control/panel-control.component.scss']
})
export class ProductosComponent implements OnInit  {

  ListaRegistroTablas: Registro[];

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase,
    private toastr: ToastrService,
  ){}

  Recibe(event: any){
    console.log("Recibe " + event.Ricardo);
  }

  ngOnInit() {
    this.Metodos.ObtenerRegistrosTabla().snapshotChanges()
      .subscribe(item => {
        this.ListaRegistroTablas = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaRegistroTablas.push(x);
        })
      });

      this.Metodos.ObtenerRegistrosTabla();
      this.ResetearFormulario();

  }

  onSubmit(Formulario: NgForm){
    if(Formulario.value.$key == null)
      this.Metodos.InsertarRegistro(Formulario.value);
    else
      this.Metodos.ActualizarRegistro(Formulario.value);
      
      this.ResetearFormulario(Formulario);
      this.toastr.success('Operacion Realizada con Exito','Producto Actualizado');
  }

  ResetearFormulario(Formulario?: NgForm){
    if(Formulario != null){
      Formulario.reset();
      this.Metodos.RegistroSeleccionado = new Registro();
    }
  }

  AntesActualizarRegistro(RegistroEditar: Registro){
    this.Metodos.RegistroSeleccionado = Object.assign({}, RegistroEditar);
  }

  AntesDeBorrar($key: string){
    if(confirm('¿Estas seguro que deseas borrar el registro?')) {
      this.Metodos.BorrarRegistro($key);
      this.toastr.warning('Borrado Exitosamente', 'Registro Removido');
    }
  }

}*/

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servicios } from '../../servicios/service.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Registro,Upload } from '../../modelos/modelos';
import { ToastrService } from 'ngx-toastr';
//import { IdSensorComponent } from '../../administracion-mostrador/id-sensor/id-sensor.component';

@Component({
  selector: 'app-productos',
  templateUrl: './new.productos.component.html',
  styleUrls: ['../../oit/panel-control/panel-control.component.scss']
})
export class ProductosComponent implements OnInit  {

  ListaRegistroTablas: Registro[];
  selectedFiles: FileList | null;
  currentUpload: any;

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase,
    private toastr: ToastrService, 
  ){}

  Recibe(event: any){
    console.log("Recibe " + event.Ricardo);
  }

  ngOnInit() {
    this.Metodos.ObtenerRegistrosTabla().snapshotChanges()
      .subscribe(item => {
        this.ListaRegistroTablas = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaRegistroTablas.push(x);
        })
      });

      this.Metodos.ObtenerRegistrosTabla();
      this.ResetearFormulario();

  }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  onSubmit(Formulario: NgForm){
    if(Formulario.value.$key == null)
      this.Metodos.InsertarRegistro(Formulario.value);
    else
      this.Metodos.ActualizarRegistro(Formulario.value);
      
       const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.Metodos.pushUpload(this.currentUpload);
    } else {
      console.error(' No file found!');
    }
      this.ResetearFormulario(Formulario);
      this.toastr.success('Operacion Realizada con Exito','Producto Actualizado');
  }

  ResetearFormulario(Formulario?: NgForm){
    if(Formulario != null){
      Formulario.reset();
      this.Metodos.RegistroSeleccionado = new Registro();
    }
  }

  AntesActualizarRegistro(RegistroEditar: Registro){
    this.Metodos.RegistroSeleccionado = Object.assign({}, RegistroEditar);
  }

  AntesDeBorrar($key: string){
    if(confirm('¿Estas seguro que deseas borrar el registro?')) {
      this.Metodos.BorrarRegistro($key);
      this.toastr.warning('Borrado Exitosamente', 'Registro Removido');
    }
  }

  

}