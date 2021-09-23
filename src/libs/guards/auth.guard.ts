import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '..';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   //user servisindeki login değişkenini dinlemek için constructor yazılır
  constructor(private userService:UserService){}

 //canActivate: üzerinde serviste tuttuğum bir değerden kullanıcının  bu root a erişip erişemeyeceği kararını veren bir yapı kurulur.
//restapi yi tetikler ve oradan gelen değere göre veri gelir
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{ //sadece boolean dönsün
      //Snapshot: gideceği root un objelerinin buraya snap olarak kaydediyor ve kontroller sağlanır.(Console dan)
      console.log("next",next); //roota giderkende data ilettimi ,parametre ilettimi gösterir. 
      console.log("state",state); //state: erişmek istediğim root , url, ve içerisindeki value , tree vb. mevcuttur

      return this.userService.isLoggedIn; //isLoggedIn varsa true dönecek değilse false

    //return true; //false dediğimizde sayfayı pasif yapar
  }
  
 

}
