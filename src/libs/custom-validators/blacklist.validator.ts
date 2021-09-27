import { FormControl } from "@angular/forms"

export const BlackListValidator = (letter: string) =>{//parametre alacak
    return(control:FormControl) =>{ //bana gelecek değer bir formcontrol olmalı
         return control.value.toString().indexOf(letter) > -1 ? {blacklist:true} : null //istemediğim harf var yok kontrolü yapılır. 
         // >-1 indexi varsa blacklist true dönsün yoksa null , {blacklist:true} : null => required gibi bizde blacklist property si dönsün işlemi yaptık, null errors un null olmasını tetikler.
         //formcontrol den gönderilen harfi içerirse blacklist olarak error gönderir.
        }
} 