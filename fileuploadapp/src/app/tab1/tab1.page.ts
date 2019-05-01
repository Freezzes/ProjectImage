import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadingService } from  '../uploading.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  @ViewChild("Addcomment") Addcomment;
  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  picture: any;
  caption: string="";
  comment: any;
  constructor(private uploadingService: UploadingService) { }

  showImage(){
    this.uploadingService.getImage().subscribe(res => {
    this.picture = res;
  });
  }
  showComment(){
    this.uploadingService.getComment().subscribe(res => {
    this.comment = res;
   });
 }

  addcomment(id) {
    let requests = [];
    let formData = new FormData();

      formData.append('imageID',id)
      formData.append('comment_text',this.Addcomment.value)
      
      requests.push(this.uploadingService.uploadcomment(formData));
      concat (...requests).subscribe(
        (res) => {
          console.log(res);
        },
        (err) =>{
          console.log(err);
        }
      );
  }

ngOnInit() {
  this.showImage()
  this.showComment()
  }
}