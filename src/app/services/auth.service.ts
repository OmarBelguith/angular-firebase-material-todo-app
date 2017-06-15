import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  loggingIn: Boolean = (localStorage.getItem("loggingIn") == 'true');
  
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      this.user = this.afAuth.authState;
      this.check();
    });
  }

  check() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('uid', this.afAuth.auth.currentUser.uid);
        this.router.navigate(['todos']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  loginAnonymous() {
    this.changeStatusLogin(true);
    this.afAuth.auth.signInAnonymously().then((response) => {
      this.changeStatusLogin(false);
      this.router.navigate(['todos']);
    });
  }

  loginWithGoogle() {
    this.changeStatusLogin(true);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then((response) => {
      this.changeStatusLogin(false);
      this.router.navigate(['todos']);
    });
  }

  logout() {
    localStorage.removeItem('uid');
    this.changeStatusLogin(false);
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  changeStatusLogin(status: Boolean){
    localStorage.setItem("loggingIn", status?'true':'false');
    this.loggingIn = status;
  }

}
