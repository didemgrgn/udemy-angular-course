import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = ["didem", "ahmet"] //kullanıcıdan girmesini istemediğimiz kullanıcılar. Normalde api tarafında yapılır.

  isLoggedIn = false; //canActivete Guard

  connection = environment.api.nestjs.role;

  constructor(private http: HttpClient) { }

  isExistName(val: string) {
    if (this.users.indexOf(val) > -1) //gönderdiğim value yu arayacak
    {
      return of(true); //of: her türlü değer ve değişkeni observable bir değere çevirir.Observable bir boolean a çeviriyor
    }
    else {
      return of(false);
    }
  }


  getAllUsers() {
    return this.http.get<any>(this.connection + "/user");
  }

  // login(){//canActivete Guard
  //   this.isLoggedIn=!this.isLoggedIn;
  // }


  //bir post isteği atarak servise login olup token ı almak istiyoruz
  login() {
    const user = {
      email: "didem@udemy.com.tr",
      password: "11111"
    };
    return this.http.post<any>(this.connection + "/login", user); //login servisine giderek user datasını gönderecek

    //login işleminden geri dönen değer succces:true, value: token olmuş olacaktır.
  }

  logOut(){
    localStorage.removeItem("token"); //çalışınca token silinsin
  }

  getToken() :string | any{
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
    else {
      //token yoksa login işlemine gidip subscribe olduktan sonra data gelirse localStorage e kaydetsin
      this.login().subscribe(data => {
        localStorage.setItem("token", data.value);
        this.getToken(); //sonradan yine kendisine gitmesi lazım ki er ya da geç isteğimi karşılasın ve  token dönsün

      });
    }
  }
}


//Login metodu yazarak login olduktan sonra token ı localstorage a kaydetsinve onun üzerinden interceptor orayı sorgulasın
//eğer token varsa localstorage da kaydettiğim tokenı alsın yoksa bir login isteği atıp ordan dönen değeri buraya eklesin ve serviste artık istek atılabilsin

