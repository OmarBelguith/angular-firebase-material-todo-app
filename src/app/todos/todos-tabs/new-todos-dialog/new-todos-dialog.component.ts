import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todos-dialog',
  templateUrl: './new-todos-dialog.component.html',
  styleUrls: ['./new-todos-dialog.component.css']
})
export class NewTodosDialogComponent implements OnInit {

  public todoListName: string;
  
  constructor() { }

  ngOnInit() {
  }

  addTodoList(todoListName: string){
    console.log(todoListName) 
  }

}
