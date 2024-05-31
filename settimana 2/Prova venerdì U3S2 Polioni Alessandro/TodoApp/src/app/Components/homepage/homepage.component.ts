import { Component, OnInit } from '@angular/core';
import { TodoTaskService } from '../../Services/todo-task.service';
import { UsersService } from '../../Services/users.service';
import { CombinedService } from '../../Services/combinazione.service';
import { iCombinazione } from '../../Models/combinazione';
import { iTodo } from '../../Models/todo-task';
import { iUser } from '../../Models/users';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomeComponent implements OnInit {
  combinedTodos: iCombinazione[] = [];
  filteredTodos: iCombinazione[] = [];
  searchTerm: string = '';

  constructor(
    private todoTaskService: TodoTaskService,
    private userService: UsersService,
    private combinedService: CombinedService
  ) { }

  ngOnInit(): void {
    const todoTasks: iTodo[] = this.todoTaskService.getTodoTasks();
    const users: iUser[] = this.userService.getUsers();

    this.combinedTodos = this.combinedService.combineTodoWithUsers(todoTasks, users);
    this.filteredTodos = this.combinedTodos;
  }

  updateTodoStatus(todo: iTodo): void {
    const todoIdToUpdate = todo.id;
    const completed = !todo.completed;
    this.todoTaskService.updateTodoStatus(todoIdToUpdate, completed);
  }

  filterTodos(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredTodos = this.combinedTodos;
    } else {
      this.filteredTodos = this.combinedTodos.filter(combinazione =>
        combinazione.user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
