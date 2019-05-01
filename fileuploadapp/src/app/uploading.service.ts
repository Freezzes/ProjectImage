import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadingService {

  DJANGO_API_SERVER: string = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  public uploadFormData(formData) {
    return this.http.post<any>(`${this.DJANGO_API_SERVER}/upload/`, formData);
  }

  public getImage() {
    return this.http.get(`${this.DJANGO_API_SERVER}/image/`);
  }

  public uploadcomment(formData) {
    return this.http.post<any>(`${this.DJANGO_API_SERVER}/comment/`, formData);
  }
  
  public getComment() {
    return this.http.get(`${this.DJANGO_API_SERVER}/getcomment/`);
  }
}
