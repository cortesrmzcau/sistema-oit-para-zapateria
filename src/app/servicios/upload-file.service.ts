import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database';
import { Upload } from '../../app/modelos/fileupload';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadFileService {
  taskList: AngularFireList<any>;
  selectedFiles: FileList;
  currentFileUpload: Upload;
  progress: { percentage: number } = { percentage: 0 };
  title = 'app';
  basePath = 'Carousel/';
  uploadsRef: AngularFireList<Upload>;
  uploads: Observable<Upload[]>;
  List:AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { }

  pushUpload(upload: Upload, prueba: string) {
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
      (error) => {
        console.log(error);
      },
      () => {
        if (uploadTask.snapshot.metadata.fullPath) {

          upload.name = upload.file.name;
          upload.estado = 'Mostrando';
          upload.palabra = prueba;
         
          this.saveFileData(upload);
          dodo.orderByKey().on("child_added", function(snapshot: any) {
           // console.log(snapshot.key+" este es el ultimo id de verdad");
            const db2=db.child('Carousel/'+`${snapshot.key}`+'/url');
            blu.getDownloadURL().then(function(x){
            db2.set(x)
              //para ver de nuevo las ejecuciones en consola
              //comente la siguiente linea "console.clear();"
              console.clear();
              window.location.reload();
              });
          });          
          return;

        } else {
          console.error('No download URL!');
        }
      },
    );
   
  }


  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  getImagenes() {
    return this.List =this.db.list(`${this.basePath}/`);
  }

}

