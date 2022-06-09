import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import { Registro, ZapatoMostrador, Sensores, ContadorMarca } from '../modelos/modelos';
import { Upload } from '../modelos/fileupload';
import * as firebase from 'firebase';

@Injectable()
export class Servicios {

  basePath = 'ArticulosCalzado/';
  ListaRegistrosTabla: AngularFireList<any>;
  ListaRegistrosGraficaAzul: AngularFireList<any>;
  ListaRegistrosZapatoMostrador: AngularFireList<any>;
  ListaSensores: AngularFireList<any>;
  ListaClientes: AngularFireList<any>;
  ListaClientesTemporal: AngularFireList<any>;
  ListaCiudad: AngularFireList<any>;
  DiaAnterior: AngularFireList<any>;
  ListaTablaSensores2: AngularFireList<any>;
  ListaTablaContadorMarcadores: AngularFireList<any>;
  ListaHorasDiaActual: AngularFireList<any>;
  ListaGraficaHoraInteraccionPasillos: AngularFireList<any>;
  ListaSatisfaccionBueno: AngularFireList<any>;
  GraficaSatisfacciones: AngularFireList<any>;
  ListaIntervaloHoras: AngularFireList<any>;

  RegistroSeleccionado: Registro = new Registro();
  SensorSeleccionado: Sensores = new Sensores();
  CodigoCalzadoSeleccionado: ZapatoMostrador = new ZapatoMostrador();
  ContadorMarca: ContadorMarca = new ContadorMarca();

  ImagenMostrador: Upload[];

  constructor(private firebase: AngularFireDatabase) {}

  ObtenerRegistrosTabla(){
    this.ListaRegistrosTabla = this.firebase.list('ArticulosCalzado');
    return this.ListaRegistrosTabla;
  }

  ObtenerRegistrosGraficaAzul(){
    this.ListaRegistrosGraficaAzul =
    this.firebase.list('GraficaAtencionUltimos7Dias', ref => ref.orderByChild('FechaGrafica'));
      return this.ListaRegistrosGraficaAzul;
  }

  ObtenerRegistrosZapatoMostrador(){
    this.ListaRegistrosZapatoMostrador = this.firebase.list('TablaMostrador');
      return this.ListaRegistrosZapatoMostrador;
  }

  ObtenerRegistroClientes(){
    this.ListaClientes = this.firebase.list('usuarios');
    return this.ListaClientes;
  }

  ObtenerClientesTemporal(){
    this.ListaClientesTemporal =this.firebase.list('Temporal');
    return this.ListaClientesTemporal;
  }

  ObtenerCiudad(){
    this.ListaCiudad = this.firebase.list('Ciudad');
    return this.ListaCiudad;
  }

  ObtenerEstadoDiaAnterior(){
    this.DiaAnterior = this.firebase.list('VisitasDiaAnterior');
    return this.DiaAnterior;
  }

  InsertarRegistro(registro: Registro){
    this.ListaRegistrosTabla.push({
      CodigoCalzado: registro.CodigoCalzado,
      IDSensor: registro.IDSensor,
      Calzado: registro.Calzado,
      Marca: registro.Marca,
      TipoPersona: registro.Existencia,
      Existencia: registro.Existencia,
      TipoCalzado: registro.TipoCalzado,
      PrecioCompra: registro.PrecioCompra,
      PrecioVenta: registro.PrecioVenta,
      Foto : 2,
      Color: registro.Color,
      Talla: registro.Talla,

      InteraccionesMarca: 0,
      InteraccionesTipoCalzado: 0,
      IteraccionesTipoPersona: 0
    });
  }

  ActualizarRegistro(Actualizar: Registro){
    this.ListaRegistrosTabla.update(Actualizar.$key, {
      CodigoCalzado: Actualizar.CodigoCalzado,
      IDSensor: Actualizar.IDSensor,
      Calzado: Actualizar.Calzado,
      Marca: Actualizar.Marca,
      TipoPersona: Actualizar.Existencia,
      Existencia: Actualizar.Existencia,
      TipoCalzado: Actualizar.TipoCalzado,
      PrecioCompra: Actualizar.PrecioCompra,
      PrecioVenta: Actualizar.PrecioVenta,
      Foto: 3,
      Color: Actualizar.Color,
      Talla: Actualizar.Talla,

      InteraccionesMarca: 0,
      InteraccionesTipoCalzado: 0,
      IteraccionesTipoPersona: 0
    });
  }

  EditarRegistro($key: string){
    this.ListaRegistrosTabla.update($key, {
      CodigoCalzado: 'asasasasasa'
    });
  }

  BorrarRegistro($key: string){
    this.ListaRegistrosTabla.remove($key);
  }

  // Pagina de Mostrador

  ObtenerZapatosMostrador(){
    this.ListaRegistrosZapatoMostrador = this.firebase.list('TablaMostrador',
    ref => ref.orderByChild('InteraccionesMarca'));
    return this.ListaRegistrosZapatoMostrador;
  }

  AgregarZapatoMostrador(AgregarMostrador: ZapatoMostrador){
    this.ListaRegistrosZapatoMostrador.push({
      CodigoCalzado: AgregarMostrador.CodigoCalzado,
      IDSensor: AgregarMostrador.IDSensor,
      Calzado: AgregarMostrador.Calzado,
      Marca: AgregarMostrador.Marca,
      TipoPersona: AgregarMostrador.TipoPersona,
      TipoCalzado: AgregarMostrador.TipoCalzado,
      Foto : AgregarMostrador.Foto,
      Color: AgregarMostrador.Color,
      Talla: AgregarMostrador.Talla,

      Colocacion: AgregarMostrador.Colocacion,
      InteraccionesMarca: AgregarMostrador.InteraccionesMarca,
      InteraccionesTipoCalzado: AgregarMostrador.InteraccionesTipoCalzado,
      IteraccionesTipoPersona: AgregarMostrador.IteraccionesTipoPersona
    });
    
  }

  BorrarRegistroZapatoMostrador($key: string){
    this.ListaRegistrosZapatoMostrador.remove($key);
  }

  // Pagina Panel de Control

  ObtenerListaSensores(){
    this.ListaSensores = this.firebase.list('Sensores');
    return this.ListaSensores;
  }

  ObtenerListaTablaSensores2(){
    this.ListaTablaSensores2 = this.firebase.list('Sensores2');
    return this.ListaTablaSensores2;
  }

  BorrarRegistroListaSensores($key: string){
    this.ListaSensores.remove($key);
  }

  BorrarRegistroListaSensores2($key: string){
    this.ListaTablaSensores2.remove($key);
  }

  ActualizarEstadoSensor($key: string, estado: string){
    this.ListaSensores.update($key, {
      Estado: estado
    });
  }

  ActualizarEstadoSensor2($key: string, estado: string){
    this.ListaTablaSensores2.update($key, {
      Estado: estado
    });
  }

  // Comportamiento

  ActualizarInteraccionesSensor($key: string, Interacciones: number){
    this.ListaSensores.update($key, {
      Interacciones: Interacciones + 1,
      Presencia: 0
    });
  }

  ActualizarInteraccionesMarca($key: string, Interacciones: number, TipoPersona: number){
    this.ListaRegistrosZapatoMostrador.update($key, {
      InteraccionesMarca: Interacciones,
      IteraccionesTipoPersona: TipoPersona
    });
  }

  ObtenerIntervalosInteraccionPasillos(){
    this.ListaGraficaHoraInteraccionPasillos = this.firebase.list('GraficaHoraInteraccionPasillos');
    return this.ListaGraficaHoraInteraccionPasillos;
  }

  ActualizarNumeroInteraccionesGraficaPasillos($key: string,NumeroInteracciones1: string, NumeroInteracciones2: string){
    this.ListaGraficaHoraInteraccionPasillos.update($key,{
      NumInteracciones1: NumeroInteracciones1,
      NumInteracciones2: NumeroInteracciones2
    })
  }

  // TablaContadorMarcas

  ObtenerListaTablaContadorMarcadores(){
    this.ListaTablaContadorMarcadores = this.firebase.list('TablaContadorZapatos');
    return this.ListaTablaContadorMarcadores;
  }

  // Lista Horas Tabla Hora Dia Actual

  // ObtenerDatosBueno

  ObtenerListaTablaBueno(){
    this.ListaSatisfaccionBueno = this.firebase.list('Microfono');
    return this.ListaSatisfaccionBueno;
  }

  ObtenerGraficaSatisfacciones(){
    this.GraficaSatisfacciones = this.firebase.list('GraficaAtencionSatisfactoria');
    return this.GraficaSatisfacciones;
  }

  ActualizarFechaActual($key: string, Satis: number){
    this.GraficaSatisfacciones.update($key,{
      Satisfacciones: Satis
    })
  }

    pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    const blu=storageRef.child(`${this.basePath}/${upload.file.name}`);

    const db=firebase.database().ref();
    const dodo = firebase.database().ref().child(`${this.basePath}`).limitToLast(1);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) =>  {
        
        const snap = snapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        if (uploadTask.snapshot.metadata.fullPath) {

          upload.name = upload.file.name;
         // upload.Color=registro.Color,
         // this.saveFileData(upload);

          dodo.orderByKey().once("child_added", function(snapshot: any) {
           snapshot.key;
          
       //   console.log(snapshot.key+" este es el ultimo id de verdad");
            const db2=db.child('ArticulosCalzado/'+`${snapshot.key}`+'/Foto');
            blu.getDownloadURL().then(function(x: any){
              console.log(x);
            db2.set(x)
              //para ver de nuevo las ejecuciones en consola
              //comente la siguiente linea "console.clear();"
              console.clear();
              });
          });          
          return;

        } else {
          console.error('No download URL!');
        }
      },
    );
   
  }

  ObtenerIntervaloHorasGraficaVisitaHoraDiaActual(){
    this.ListaIntervaloHoras = this.firebase.list('GraficaVisitaDiaActual');
    return this.ListaIntervaloHoras;
  }

}
