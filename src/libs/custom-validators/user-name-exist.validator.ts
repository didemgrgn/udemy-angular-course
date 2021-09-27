import { FormControl } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export const UserNameExistValidator = (
    //inputları
    userService: any,
    time: number = 500
) => {
    return (input: FormControl) => {//username göndereceğim
        //async validatorda observable değer döner, çünkü form kendi içinde subscribe olup değeri anlayacak
        return timer(time).pipe(// pipe: subscribe olmadan önce işlem yapmak için kullanılır. Timer süre başlatıyor.
            //switchMap: servise istek atsın
            switchMap(() => userService.isExistName(input.value)), //inputa girdiğim değeri isExistName e gönderiyorum userserviste bu isim var veya yok diye true false gönderiyor
            map(res => { //bana dönen datanın adı res  true ya da false dönecek
                return !res ? null : { userNameExist: true } //eğer res yoksa null, res varsa error dön error ismide userNameExist olsun

            })
        );
    };

};

//asycn validator eklemek için
/* 1)validate oluşturuldu, user-name-exist olarak , */