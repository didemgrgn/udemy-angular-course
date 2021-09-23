import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-angular-course';
  constructor(
    public toastr: ToastrService,
    public spinner: NgxSpinnerService, //spinner intance ı oluşturuldu
    public translateService: TranslateService
  ) {
    //proje çalışır çalışmaz default olarak ingilizce dosyayı çalıştıracak içerisindekileri alıp kontrol edecek ve yükleyecek
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit() {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    //onLangChange : dil değişim ile subscribe olunur
    this.translateService.onLangChange.subscribe(resp => {
      const title=this.translateService.instant("toastr.title");
      const message=this.translateService.instant("toastr.message");
      this.toastr.success(title,message);

      //Sabit gelen alan
      //this.toastr.success(
      //  'Udemy Angular 9 projemize hoşgelniz...!',
       // 'Giriş Başarılı!'); //toastr gelir
    });

  }

  showSpinner() {
    this.spinner.show(); //Servise girerse bu çalışır.

    setTimeout(() => {
      this.spinner.hide(); //Servisten cevap dönene kadar kapama gerçekleşmez.
    }, 5000)/**5 saniye sonra kapatıcak */
  }


  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}

