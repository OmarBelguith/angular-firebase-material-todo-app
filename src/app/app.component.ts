import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo App';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  statusLogin: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.items = af.list('/todos/' + user.uid, {
          query: {
            limitToLast: 50
          }
        });
      }

      this.user = this.afAuth.authState;
    });

  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in.');
        console.log('User uid: ' + this.afAuth.auth.currentUser.uid);
        localStorage.setItem('uid', this.afAuth.auth.currentUser.uid);
      } else {
        console.log('No user is signed in.');
      }
    });
  }

  loginAnonymous() {
    this.statusLogin = 'wait...';
    this.afAuth.auth.signInAnonymously().then((response) => {
      this.statusLogin = '';
    });
  }

  loginWithGoogle() {
    this.statusLogin = 'wait...';
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then((response) => {
      this.statusLogin = '';
    });
  }

  logout() {
    localStorage.removeItem('uid');
    this.afAuth.auth.signOut();
    this.items = null;
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }

  deleteTodo(todo: any): void {
    this.af.object('/todos/' + localStorage.getItem("uid") + "/" + todo.$key).remove();
  }

}