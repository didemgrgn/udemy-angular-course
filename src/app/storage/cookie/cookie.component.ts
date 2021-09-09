import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  name="";
  cookieValue="";

  isCookieExist: boolean | undefined;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  setItem(value: string){ //cookie serviside key,value şeklinde çalışır
     this.cookieService.set("name",value);
  }

  getItem(){
    this.cookieValue=this.cookieService.get("name");
  }

  clearItem(){
    this.cookieService.delete("name");
  }

  clearAll(){
    this.cookieService.deleteAll();
  }

  checkNameCoookie(){
     //check() : cookie nin olup olmadığını öğrenmek için kullanılır.
    this.isCookieExist=this.cookieService.check("name"); //true olunca name cookie min olduğunu görüyor
  }

  //LAX ile aynı domain uzantısına sahip olan cookileri içerebiliyoruz (sub domainleri set edebilmek için kullanılır.)
  //local-storage ve cookie client sayfalarda kullanılır, kısa veya uzun vadeli data saklamak için kullanılır, bir veritabanında saklanmak istemiyorsa
  

}
