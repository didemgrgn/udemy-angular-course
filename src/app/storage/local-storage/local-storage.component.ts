import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  
//Cookie & Local Storage
//Tarayıcı üzerinde verileri saklama , angularda server side değil client side olduklarından dolayı
//angular projesinde bir veriyi iki şekilde saklanabilir, Local storage için saklama alanı 4 mb 
//server side tarafında bir uygulamanın sadece cookilere erişim sağlayabiliyor,
//cookiye set ederken bir domain belirtilir ve bu domain sayesinde  servisimiz(REST API) tarayıcımızdaki bu veriye erişim sağlayabiliyor.
//Servisiminiz veya server side tarafının bu dataya erişmesini istiyorsak cookie olarak set etmeliyiz,
//Erişmesine gerek yok ise local storage nin set edilmesi gerekir.
//Local storage string ve sabit datalar hariç obje de kaydedilebilir.

  name="";
  localStorageVal: any=""; 
  localStorageObjVal: any;

  objName=""; //variable tanımladım
  objSurname="";
  objAge="";

  constructor() { }

  ngOnInit(): void {
  }

  setItem(value: string){
      localStorage.setItem("name",value); //localStorage: Kayıtları key ve value şeklinde kaydetmemiz gerektiğini söyler , key olarak name, value value
  }

  getItem(){
    this.localStorageVal = localStorage.getItem("name"); //set ettiğimiz key in value sunu localStorageVal değerine eşitliyoruz
  //2.kere get dediğimizde gider çünkü key deki value ya bakıyor(name) value nun kalktığını görüyor tekrar eşitleyip boş değer geliyor
  }

  clearItem(){
   localStorage.removeItem("name");
  }
  
  clearAll(){
    localStorage.clear();
  }

  //objeyi set edebileceğim bir metot tanımlıyoruz
  setObject(){
    //tıkladığımızda set edeceğimiz için ekstra bir parametre göndermiyoruz
    const obj= {name:this.objName,surname:this.objSurname,age:this.objAge};
    localStorage.setItem("object",JSON.stringify(obj)); //Json a çevirip kaydedebiliyoruz.
  }

  getObject(){
   this.localStorageObjVal=localStorage.getItem("object");
  }
}
