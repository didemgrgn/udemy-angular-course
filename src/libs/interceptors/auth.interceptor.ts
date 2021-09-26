import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  //request i handle eden bir intercept metodu, bununla arasına girip manufulasyonu yapıp request i tamamlıyor
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    //ilk başta login isteği atıldığında oda buradaki getToken a girecek ve sonsuz bir döngü oluşacak, interceptor eğer login url ine gidiyorsa bu işlemi yapmamalı
    //ilk önce tokenı alsın sonra bu işlemi yapsın diye işlem yapıldı
    if (request.url === "https://udemy-nestjs-course.herokuapp.com/api/login") {
      return next.handle(request); //Request handle edilsin
    }
    else {
      //request clone landı,{setHeaders:{Authorization : `Bearer customToken`},withCredentials:true} bu data ile manudule edildi
      //artık servise gidecek her request headerıne Authorization  property sini ekleyip o şekilde iletilecek.

      //this.userService.getToken() =>  token ı dönecek eğer yoksa login işlemine girecek http isteği atacak http isteğinde value yani token ı dönecek bunu localstorage e kaydedecek
      //sonra tekrar kendisini çağıracak bu sefer token olacağı için token ı geri dönecek alınan token burada servise istek olarak yansıtılacak


      request = request.clone({
        //"https://udemy-nestjs-course.herokuapp.com/api/login" bu url deki projenin kodlarını indirip cloudinary e api key script eklenerek resim eklenebilir
        setHeaders: { Authorization: `Bearer ${this.userService.getToken()}` }
       //setHeaders: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVzIjpbeyJuYW1lIjoiYWRtaW4ifSx7Im5hbWUiOiJjYWxsLWNlbnRlciJ9LHsibmFtZSI6InJlcGFpcm1hbiJ9XSwiZ3JvdXBzIjpbeyJuYW1lIjoibWFuYWdlciJ9XSwiX2lkIjoiNWUxYWYzNWE5OWJhNGUyMDA3YjE1NjQxIiwibmFtZSI6ImFobWV0Iiwic3VybmFtZSI6ImF5ZMSxbiIsImVtYWlsIjoiYWhtZXR0dGF5ZGluQHlhbmRleC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRibDdVMnp2S093eDM0UW5HM2piMUJlMHVNYlVSZHZWNWt4NmFCOGVkYXRCZ3MzT1lwTEZKTyIsImJpcnRoRGF5IjoiMTk5My0wNC0yNFQyMTowMDowMC4wMDBaIiwiX192IjowfSwiaWF0IjoxNTkzOTQzNDY5fQ.AhzLqdgn3GDKKeDNfjZuBYTHjB9DAur8ZPAbXQ31NfY`}

      });

      return next.handle(request);
    }
  }
}
