import { Component, OnInit } from '@angular/core';
//importo i service
import { TodoTaskService } from '../../Services/todo-task.service';
import { UsersService } from '../../Services/users.service';
import { CombinedService } from '../../Services/combinazione.service';
//importo le interfacce
import { iCombinazione } from '../../Models/combinazione';
import { iTodo } from '../../Models/todo-task';
import { iUser } from '../../Models/users';

@Component({
  selector: 'app-home',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.scss']
})
export class HomeComponent implements OnInit {
  combinedTodos: iCombinazione[] = [];

  constructor(
    private todoTaskService: TodoTaskService,
    private userService: UsersService,
    private combinedService: CombinedService
  ) { }

  ngOnInit(): void {

    const todoTasks: iTodo[] = this.todoTaskService.getTodoTasks();
    const users: iUser[] = this.userService.getUsers();

    this.combinedTodos = this.combinedService.combineTodoWithUsers(todoTasks, users);
    console.log('Combined Todos:', this.combinedTodos);

  }
  updateTodoStatus(todo: iTodo): void {
    const todoIdToUpdate = todo.id;
    const completed = !todo.completed;

    this.todoTaskService.updateTodoStatus(todoIdToUpdate, completed);
}

}
