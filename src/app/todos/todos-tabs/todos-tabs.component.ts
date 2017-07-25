import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { NewTodosDialogComponent } from 'app/todos/todos-tabs/new-todos-dialog/new-todos-dialog.component';
import { TodosService } from 'app/services/todos.service'

@Component({
  selector: 'app-todos-tabs',
  templateUrl: './todos-tabs.component.html',
  styleUrls: ['./todos-tabs.component.css']
})
export class TodosTabsComponent implements OnInit {

  public tabGroup: any;

  constructor(public dialog: MdDialog, public todosService: TodosService) { }

  ngOnInit() {
  }

  onSelectChange($event: any) {
    console.log('Selected Tab: '+ '(' + $event.index + ')', $event.tab.textLabel);
    this.todosService.activeTab = $event.index;
  }

  newTodoList() {
    let dialogRef = this.dialog.open(NewTodosDialogComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
