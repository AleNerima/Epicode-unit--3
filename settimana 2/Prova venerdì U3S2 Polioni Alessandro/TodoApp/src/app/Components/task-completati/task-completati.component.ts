import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../Models/todo-task';
import { TodoTaskService } from '../../Services/todo-task.service';

@Component({
  selector: 'app-task-completati',
  templateUrl: './task-completati.component.html',
  styleUrls: ['./task-completati.component.scss']
})
export class TaskCompletatiComponent implements OnInit {
  completedTasks: iTodo[] | undefined;

  constructor(private todoTaskService: TodoTaskService) { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.completedTasks = this.todoTaskService.getTodoTasks().filter(task => task.completed);
  }
}
