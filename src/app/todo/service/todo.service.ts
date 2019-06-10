import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoCreateForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    targetDate: new FormControl(new Date()),
    description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    completionStatus: new FormControl('', [Validators.required]),
  });

  todoList: AngularFireList<any>;

  constructor(private fireDatabase: AngularFireDatabase) { }

  getTodoList(){
    this.todoList = this.fireDatabase.list('todos');
    return this.todoList.snapshotChanges();
  }

  insertTodo(todo){
    this.todoList.push({
      title: todo.title,
      description: todo.description,
      completionStatus: todo.completionStatus,
      targetDate: todo.targetDate
    });
  }

  updateTodo(todo){
    this.todoList.update(todo.$key,
    {
      title: todo.title,
      description: todo.description,
      completionStatus: todo.completionStatus,
      targetDate: todo.targetDate
    });
  }

  deleteTodo($key: string){
    this.todoList.remove($key);
  }

}
