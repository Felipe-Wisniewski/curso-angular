import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  userLogged = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(user: User) {
    if (user.email === 'user@email.com' && user.password === '123456') {
      this.userAuth = true;

      this.userLogged.emit(true);

      this.router.navigate(['/']);
    } else {
      this.userAuth = false;

      this.userLogged.emit(false);
    }
  }

  isAuthenticadedUser() {
    return this.userAuth;
  }
}
