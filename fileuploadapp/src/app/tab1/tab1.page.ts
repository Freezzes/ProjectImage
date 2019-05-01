import { Component, OnInit } from '@angular/core';
import { UploadingService } from  '../uploading.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  picture: any;
  caption:string="";

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