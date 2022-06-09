import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Upload } from '../../modelos/fileupload';
import { AngularFireList } from 'angularfire2/database';
import { UploadFileService } from '../../servicios/upload-file.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  uploads: Observable<Upload[]>;
  uploadList: Upload[];

  basePath = '/uploadsyo/';
  selectedFiles: FileList | null;
  currentUpload: Upload;
  List:AngularFireList<any>;
  uploadPercent: Observable<any>;
  downloadURL: Observable<string>;
  @Output() onComplete = new EventEmitter<void>();

  constructor(public ServicesService: UploadFileService){ }

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

}
