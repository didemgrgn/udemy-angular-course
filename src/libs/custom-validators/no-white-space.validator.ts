//class oluşturuldu

import { FormControl } from "@angular/forms"

//parametre alınmayacağı ve fonksiyonun içinden değer bildireleceği için değil const yerine function olacak
export function WhiteSpaceValidator(control:FormControl){ 
     let result=false;

     if(control.value.toString().replace(/\s/g,"") === control.value.toString() ){ //replace ile boşluklarını sileceğiz , (/\s/g,"") içerisine yazılanı siliyor. Eğer bu karakter value ya eşitse
      //replace işlemi yapıldığı takdirde boşlukları kaldırdığım halde hala boşluk varmı diye kontrol ediyor.
      
      result=true;
     }

     else{
       result=false;
     }
     //Result varsa null,  yoksa whitespace değişkeni ile control ün içerisinde errorlara  ekliyoruz
     return result ? null : {whitespace: true};
 }
