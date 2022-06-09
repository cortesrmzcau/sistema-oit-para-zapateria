import { Component, OnInit } from '@angular/core';
import { Servicios,  } from '../../servicios/service.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Sensores } from '../../modelos/modelos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnInit {

  ListaSensores: Sensores[];

  ArregloSensorPrecensia: string[] = new Array();
  ArregloSensorPrecensiaActivo: string[] = new Array();
  ArregloSensorPrecensiaDesactivado: string[] = new Array();
  TotalSensoresPrecencia: number;
  SensoresPresenciaActivados: number = 0;
  SensoresPresenciaDesactivados: number = 0;

  ArregloSensorMovimiento: string[] = new Array();
  ArregloSensoresMovimientoActivados: string[] = new Array();
  TotalSensoresMovimiento: number;
  SensoresMovimientoActivos: number = 0;
  ArregloSensoresMovimientoDesactivado: string[] = new Array();
  SensoresMovimientoDesactivados: number = 0;

  ArregloTotalServos: string[] = new Array();
  TotalServos: number;
  ArregloServo: string[] = new Array();
  ArregloServoActivados: string[] = new Array();
  ArregloServoDesactivado: string[] = new Array();
  ServosActivados: number = 0;
  ServosDesactivados: number = 0;

  ArregloTodosSensores: string[] = new Array();
  TotalSensores: number = 0;

  ArregloMicrofonos: string[] = new Array();
  TotalMicrofonos: number = 0;
  ArregloMicronofonsActivos: string[] = new Array();
  TotalMicrofonosActivos: number;

  constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.Metodos.ObtenerListaSensores().snapshotChanges()
        .subscribe(item => {
          this.ListaSensores = [];
          item.forEach(element => {
            let y: any = element.payload.toJSON();
            y["$key"] = element.key;
            this.ListaSensores.push(y);
          });

          for(var x of this.ListaSensores){
            if(x['Colocacion'] == 'Mostrador1' || x['Colocacion'] == 'Mostrador2'){
              this.ArregloSensorPrecensia.push(x['Colocacion']);
              this.TotalSensoresPrecencia = this.ArregloSensorPrecensia.length;

              if(x['Estado'] == 'Activado'){
                this.ArregloSensorPrecensiaActivo.push(x['Estado']);
                this.SensoresPresenciaActivados = this.ArregloSensorPrecensiaActivo.length;
              }
              
              if(x['Estado'] == 'Desactivado'){
                this.ArregloSensorPrecensiaDesactivado.push(x['Estado']);
                this.SensoresPresenciaDesactivados = this.ArregloSensorPrecensiaDesactivado.length;             
              }
            }

            if(x['Colocacion'] == 'Movimiento1' || x['Colocacion'] == 'Movimiento2'){
              this.ArregloSensorMovimiento.push(x['Colocacion']);
              this.TotalSensoresMovimiento = this.ArregloSensorMovimiento.length;

              if(x['Estado'] == 'Activado'){
                this.ArregloSensoresMovimientoActivados.push(x['Estado']);
                this.SensoresMovimientoActivos = this.ArregloSensoresMovimientoActivados.length;
              }

              if(x['Estado'] == 'Desactivado'){
                this.ArregloSensoresMovimientoDesactivado.push(x['Estado']);
                this.SensoresMovimientoDesactivados = this.ArregloSensoresMovimientoDesactivado.length;
              }
            }
            
            if(x['Colocacion'] == 'Puerta'){
              this.ArregloTotalServos.push(x['Colocacion']);
              this.TotalServos = this.ArregloTotalServos.length;

              if(x['Estado'] == 'Activado'){
                this.ArregloServoActivados.push(x['Estado']);
                this.ServosActivados = this.ArregloServoActivados.length;
              }

              if(x['Estado'] == 'Desactivado'){
                this.ArregloServoDesactivado.push(x['Estado']);
                this.ServosDesactivados = this.ArregloServoDesactivado.length;
              }
            }

            if(x['TipoSensor']){
              this.ArregloTodosSensores.push(x['TipoSensor']);
              this.TotalSensores = this.ArregloTodosSensores.length;
            }

            if(x['Colocacion'] == 'Proveedores'){
              this.ArregloMicrofonos.push(x['Colocacion']);
              this.TotalMicrofonos = this.ArregloMicrofonos.length;

              if(x['Estado'] == 'Activado'){
                this.ArregloMicronofonsActivos.push(x['Estado']);
                this.TotalMicrofonosActivos = this.ArregloMicronofonsActivos.length;
              }
            }
            
          }

          /*console.log("Sensores de Presencia " + this.ArregloSensorPrecensia);
          console.log("Total Sensores de Presencia " + this.TotalSensoresPrecencia);
          console.log("Arreglo Sensor Presencia " + this.ArregloSensorPrecensiaActivo);
          console.log("Sensor Presencia Activo " + this.SensoresPresenciaActivados);
          console.log("Total Sensores de Movimiento " + this.TotalSensoresMovimiento);
          console.log("Sensores Presencia Desactivados " + this.SensoresPresenciaDesactivados);
          console.log("Sensor Movimiento Activados " + this.SensoresMovimientoActivos);
          console.log("Sensor Movimiento Desactivados " + this.SensoresMovimientoDesactivados);
          console.log("Todos los Sensores " + this.TotalSensores);
          console.log("Total Servos " + this.TotalServos);*/

        });   
    }

    ApagarSensor($key: string, Sensor: string){
      console.log($key + "  " + Sensor);
      var CambioEstado = '';

      if(Sensor == 'Activado'){
        CambioEstado = 'Desconectado'  
        console.log(CambioEstado);
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Desconectado'){
        CambioEstado = 'Activado'  
        console.log(CambioEstado);
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Abrir'){
        CambioEstado = 'Cerrado'  
        console.log(CambioEstado);
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Cerrado'){
        CambioEstado = 'Abrir'  
        console.log(CambioEstado);
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }
    }

    AntesActualizarSensor(Sensor: Sensores){
      this.Metodos.SensorSeleccionado = Object.assign({}, Sensor);
    }

    AntesDeBorrar($key: string){
      if(confirm('¿Estas seguro que deseas borrar el Sensor?')) {
        this.Metodos.BorrarRegistroListaSensores($key);
        this.toastr.warning('Borrado Exitosamente', 'Sensor Removido');
      }
    }

}
