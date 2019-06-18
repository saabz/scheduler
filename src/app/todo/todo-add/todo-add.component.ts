import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// service
import { TodoService } from '../service/todo.service';
import { NotificationService } from '../../shared/services/notification.service';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  public todoCreateForm: FormGroup;
  statusVals = [
    { value: "Pending" },
    { value: "In Progress" },
    { value: "Done" },
  ];
  constructor(private service: TodoService, private notification: NotificationService) { }

  ngOnInit() {

    this.todoCreateForm = this.service.todoCreateForm;
    this.service.getTodoList();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.todoCreateForm.controls[controlName].hasError(errorName);
  }

  addTodo(){
    if(this.todoCreateForm.valid){
      this.service.insertTodo(this.todoCreateForm.value);
      this.todoCreateForm.reset();
      this.service.initializeFormGroup();
      this.notification.success("New Todo added");
      console.log("new todo added");
    }
    else{
      return false;
    }
    
  }

  onClear(){
    this.todoCreateForm.reset();
    this.service.initializeFormGroup();
  }

}
