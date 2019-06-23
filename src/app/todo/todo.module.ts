import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// custom modules
import { SharedModule }  from '../shared/shared.module';
import { MaterialModule }  from '../shared/material.module';

// custom components
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';

// service
import { TodoService } from './service/todo.service';

// config
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [TodoAddComponent, TodoListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule,
    MaterialModule
  ],
  exports: [ TodoAddComponent, TodoListComponent,],
  providers: [ TodoService ]

})
export class TodoModule { }
