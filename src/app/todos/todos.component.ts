import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { AuthService } from '../services/auth.service';
import { TodosService } from 'app/services/todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  todoEditing: any = null;

  constructor(public auth: AuthService, 
    public af: AngularFireDatabase, 
    private renderer2: Renderer2,
    public todosService: TodosService) {
      
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
    console.log('Active Tab: ' + this.todosService.activeTab);
    if (desc && this.todoEditing == null) {
      this.items.push({ message: desc });
    } else {
      this.todoEditing.message = this.msgVal;
      this.updateTodo(this.todoEditing);
    }
    this.msgVal = '';
  }

  editTodo(todo: any) {
    this.todoEditing = todo;
    this.msgVal = todo.message;
    this.renderer2.selectRootElement('#inputMsg').focus();
  }

  deleteTodo(todo: any): void {
    this.af.object('/todos/' + localStorage.getItem("uid") + "/" + todo.$key).remove();
  }

  updateTodo(todo: any): void {
    this.af.object('/todos/' + localStorage.getItem("uid") + "/" + todo.$key).update(todo);
    this.todoEditing = null;
  }

}
