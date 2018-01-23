import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private _router: Router) { }

  authSignOut() {
    //localStorage.removeItem('user');
    this._router.navigate(['home']);
  }

  login(username: string, password: string) {
    this._router.navigate(['user/game']);
  }

}
