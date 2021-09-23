import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '..';

@Injectable({
  providedIn: 'root'
})
export class AuthExitGuard implements CanDeactivate<unknown> {

  constructor(private userService: UserService) { }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    boolean {
    return !this.userService.isLoggedIn; //login var mı onu kontrol ederek true- false dönecek
  }

}
