import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser = null;
  constructor(public miauth: AngularFireAuth) {}
  // observable del usuario logueado
  user = this.miauth.authState.pipe(map(authState => {
    console.log('authState:', authState);
    if (!authState) {
      return null;
    } else {
      // …
      return authState;
    }

  }) );
  login() {
    console.log('login');
  }
  loging() {
    console.log('login en google');
    this.miauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        this.authUser = user.user;
        console.log('this.authUser: ', this.authUser);
      })
      .catch(error => console.log(error));
  }
  logingit() {
    console.log('github login!');
    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }
  logout() {
    console.log('logout');
  }
}



