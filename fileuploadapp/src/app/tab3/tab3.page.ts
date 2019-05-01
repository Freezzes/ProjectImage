import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadingService } from  '../uploading.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  picture: any;

  constructor(private uploadingService: UploadingService) { }

  showImage(){
    this.uploadingService.getImage().subscribe(res => {
    this.picture = res;
  });
  }
  ngOnInit() {
    this.showImage()
    }

}