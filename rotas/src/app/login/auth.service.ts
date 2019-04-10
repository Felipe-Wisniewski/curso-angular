import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(user: User) {
    if (user.email === 'user@email.com' && user.password === '123456') {
      this.userAuth = true;

      this.router.navigate(['/']);
    } else {
      this.userAuth = false;
    }
  }
}
