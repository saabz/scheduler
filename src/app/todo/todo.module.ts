import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule }  from '../shared/shared.module';

// required modules
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
  MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatIconModule, 
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// custom components
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';

// service
import { TodoService } from './service/todo.service';
import { NotificationService } from '../shared/services/notification.service';

// config
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [TodoAddComponent, TodoListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule, MatInputModule , MatDatepickerModule, MatSelectModule ,
    MatNativeDateModule, MatSnackBarModule, MatTableModule, MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule
  ],
  exports: [ TodoAddComponent, TodoListComponent,],
  providers: [ TodoService, NotificationService ]

})
export class TodoModule { }
