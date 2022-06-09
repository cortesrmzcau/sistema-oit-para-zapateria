import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Upload } from '../../modelos/fileupload';
import { AngularFireList } from 'angularfire2/database';
import { UploadFileService } from '../../servicios/upload-file.service';
import { AngularFireStorage } from 'angularfire2/storage';
//import { Subject } from "rxjs/Subject";
//import { finalize } from 'rxjs/operators';
//import * as firebase from 'firebase';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['../panel-control/panel-control.component.scss']
})
export class PublicidadComponent implements OnInit {

  uploads: Observable<Upload[]>;
  uploadList: Upload[];

  basePath = '/uploadsyo/';
  selectedFiles: FileList | null;
  currentUpload: Upload;
  List:AngularFireList<any>;
  uploadPercent: Observable<any>;
  downloadURL: Observable<string>;
  @Output() onComplete = new EventEmitter<void>();

  constructor(public ServicesService: UploadFileService,
    private storage: AngularFireStorage){ }

  ngOnInit() {

    this.ServicesService.getImagenes()
      .snapshotChanges()      
      .subscribe(item=>{
        this.uploadList=[];
        item.forEach(element=>{
          let x: any = element.payload.toJSON();
          x["$key"]=element.key;
          this.uploadList.push(x as Upload);        
        }
      );
    });

  }

  uploadFile(event: any,upload: Upload) {
    const file = event.target.files[0];
    const filePath = this.basePath;
    const fileRef = this.storage.ref(filePath) // Add this line to get the path as a ref
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = fileRef.getDownloadURL() // And this one to actually grab the URL from the Ref
    //upload.name=fileRef.getDownloadURL;
    upload.url = this.downloadURL;
  //  this.saveFileData(upload)//saveFileData(upload);
  }

  /*private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }*/

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  palabra: string;

uploadOneFile() {
  const file = this.selectedFiles;
  if (file && file.length === 1) {
    this.currentUpload = new Upload(file.item(0));
    this.ServicesService.pushUpload(this.currentUpload, this.palabra);
  } else {
    console.error(' No file found!');
  }
}
uploadMultipleFiles() {
  const files = this.selectedFiles;
  if (!files || files.length === 0) {
    console.error(' No Multi Files found!');
    return;
  }

  Array.from(files).forEach((file) => {
    this.currentUpload = new Upload(file);
    this.ServicesService.pushUpload(this.currentUpload, this.palabra);
  });
}

}
