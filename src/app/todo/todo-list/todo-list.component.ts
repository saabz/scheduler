import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor( private todoService: TodoService, private notifier: NotificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] =  ['title','targetDate','completionStatus', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.todoService.getTodoList().subscribe(
      list=>{
        let arr = list.map( item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };              
        
        }); 
        this.listData = new MatTableDataSource(arr);  
        this.listData.sort = this.sort; 
        this.listData.paginator = this.paginator; 
      });
  }

  onDelete($key){
    if(confirm("Are you sure to delete this record ?")){
      this.todoService.deleteTodo($key);
      this.notifier.warn("Record deleted");
    }
    
  }
}
