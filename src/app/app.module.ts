import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdDialogModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AuthService } from "./services/auth.service";
import { TodosService } from 'app/services/todos.service'

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

import { RoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

import { environment } from '../environments/environment';
import { TodosTabsComponent } from './todos/todos-tabs/todos-tabs.component';
import { NewTodosDialogComponent } from './todos/todos-tabs/new-todos-dialog/new-todos-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TodosComponent,
    FooterComponent,
    TodosTabsComponent,
    NewTodosDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdDialogModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule
  ],
  exports: [
  ],
  entryComponents: [ 
    NewTodosDialogComponent
  ],
  providers: [AuthService, TodosService, MdDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
