import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/libs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileToUpload: File | any =null;
  images=[];

  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  //kullanıcıdan arayüzden aldığımız file ları alarak handle edecek gönderecek
  handleFileInput(files: FileList){
    this.fileToUpload=files.item(0); //fileToUpload kullanıcıdan aldık, file ile değiştiriyoruz
  }

  //aldığımız resimleri göndereceğiz
  //Servise istek atılması gerekiyor
  uploadFiles(){
      this.uploadService.upload(this.fileToUpload).subscribe(
        data => {
         //data gelirse gelen datanın 0.indexsini alsın
        //HATA ALIYORUM this.images.push(data[0]);
      },error=>{
        console.log(error);
      });
  }
}
