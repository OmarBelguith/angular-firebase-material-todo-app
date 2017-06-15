import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public auth: AuthService, public af: AngularFireDatabase) {
    this.loadTodos();
  }

  ngOnInit() { }

  loadTodos() {
    this.items = this.af.list('/todos/' + localStorage.getItem("uid"), {
      query: {
        limitToLast: 50
      }
    });
  }

  addTodo(desc: string) {
    if (desc) {
      this.items.push({ message: desc });
      this.msgVal = '';
    }
  }

  deleteTodo(todo: any): void {
    this.af.object('/todos/' + localStorage.getItem("uid") + "/" + todo.$key).remove();
  }

}
