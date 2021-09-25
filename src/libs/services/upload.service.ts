import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormattedValuesFilteringStrategy } from 'igniteui-angular';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  connection = environment.api.fleek.host //api ye erişildi
  constructor(private http: HttpClient) { }

  upload(fileToUpload: File) { 

  //Birden fazla component üzerinde upload işlemi yaptığımızı düşünürsek hepsinde aynı logic işlemlerini tekrarlamaktan kurtulur ve tek bir yerde yönetimini yapmış oluruz.
  //servis oluşturmanın mantığı budur.
  //image ları componentte oluşturup, servis tarafında form data ya çevireceğiz
  const formData : FormData =new FormData();
  formData.append("file",fileToUpload);

    return this.http.post<any>(this.connection + "/upload", formData); 
  }



}
