import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    console.log('canActivate: AuthGuard');
    return this.verificaAutenticado();
  }

  canLoad(route: Route) : Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: AuthGuard');
    return this.verificaAutenticado();
  }

  private verificaAutenticado() {
    if (this.authService.isAuthenticadedUser()) {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }
}
