import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AuthService } from "./services/auth.service";

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

import { RoutingModule } from './app-routing.module';

export const firebaseConfig = {
  apiKey: "AIzaSyDK2bCxPk8RE6SK5NaqH9op3XH_gOKoeMs",
  authDomain: "angular-firebase-material-todo.firebaseapp.com",
  databaseURL: "https://angular-firebase-material-todo.firebaseio.com",
  projectId: "angular-firebase-material-todo",
  storageBucket: "angular-firebase-material-todo.appspot.com",
  messagingSenderId: "1028507325634"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
