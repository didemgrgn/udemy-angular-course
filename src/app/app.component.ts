import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-angular-course';
  constructor(
    private toastr: ToastrService,
    private spinner:NgxSpinnerService //spinner intance ı oluşturuldu
    ) {}

  ngOnInit() {
     this.showSuccess();
     this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Udemy Angular 9 projemize hoşgelniz...!', 'Giriş Başarılı!'); //toastr gelir
  }

  showSpinner(){
    this.spinner.show(); //Servise girerse bu çalışır.

    setTimeout(()=>{
      this.spinner.hide(); //Servisten cevap dönene kadar kapama gerçekleşmez.
    },5000)/**5 saniye sonra kapatıcak */
  }
}
