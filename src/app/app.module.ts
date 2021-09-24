import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA: Haberdar olmadığı şeyleri çalıştırmak için yazıldı
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'; //toastr import edildi
import { NgxSpinnerModule } from "ngx-spinner"; //Spinner import edildi
//import { IgxButtonModule } from 'igniteui-angular';
//import { HomeComponent } from './home/home.component';
//import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { UserDetailComponent } from './user/user-detail/user-detail.component';//ignite button modülü import edildi.
import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule, IgxSelectModule } from 'igniteui-angular';
//import { DataBindingComponent } from './data-binding/data-binding.component';

import { CookieService } from 'ngx-cookie-service';


import { registerLocaleData } from "@angular/common"; //(pipes.component.html deki date daki alanın Türkçe gelmesi için
import localeTr from "@angular/common/locales/tr";//date daki alanın Türkçe gelmesi için
import localTrExtra from "@angular/common/locales/extra/tr";//date daki alanın Türkçe gelmesi için
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from 'src/libs/services/user.service';
import { AuthInterceptor } from 'src/libs';

registerLocaleData(localeTr, "tr-TR", localTrExtra);//date daki alanın Türkçe gelmesi için

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //UserComponent,
    //RoleComponent,
    NavbarComponent,
    SidebarComponent,
    //DataBindingComponent,
    //UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule, //http istekleri gerçekleştirebilmek için
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    }),

    //ngx transtlate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),


    NgxSpinnerModule,
    //IgxButtonModule //ignite button modülü import edildi. //IgxButton burada tanımlanırsa sadece yukarıdaki declarations larda kullanılabilir
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxSelectModule,
  ],

  //Servis olarak yapıldığı modül olarak yapılmadığı için provider olarak eklendi
  //Cookie servisi provide edildi , her yerden erişilebilir durumda
  providers: [CookieService, UserService, {
    //Proje artık interceptors leri tanıyor ve atılan her istekte manufule edilen request gidecek
    //angular ın interseptoründen provide edildiği için provide olarak HTTP_INTERCEPTORS denilir
    provide: HTTP_INTERCEPTORS,
    //Kullanacağım interceptor - custom, http interceptors arasına bir daha interceptor yapılmış oluyor üzerine yazacak
    useClass: AuthInterceptor,
    //multi istekleri yapsın
    multi: true
  }],


  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //ngx-spinner import edildi
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) { //assets dosyaları kendimiz import ediyoruz
  //bazen tarayıcıların cash inde kaldığı için ek olarak  ?cb=' + new Date().getTime() eklendi. Proje her build oluduğunda farklı bir json dosyası çıkartacağı için tarayıcıların cahche ine takılmayacaktır
  //Her build edildiğinde yeni cahche yeni tarayıcı dosyasını değiştirecektir bu sayede json larda değişiklik yapılırsa tarayıcıdaki eski dosya kalmaz kullanıcılara yansır.
  return new TranslateHttpLoader(
    http,
     "./assets/i18n/",
      ".json "
      //?cb=" + new Date().getTime()
      );
}


