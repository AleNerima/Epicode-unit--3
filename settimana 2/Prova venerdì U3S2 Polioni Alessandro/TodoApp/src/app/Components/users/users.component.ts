import { Component, OnInit } from '@angular/core';
import { TodoTaskService } from '../../Services/todo-task.service';
import { UsersService } from '../../Services/users.service';
import { CombinedService } from '../../Services/combinazione.service';
import { iCombinazione } from '../../Models/combinazione';
import { iTodo } from '../../Models/todo-task';
import { iUser } from '../../Models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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

  filterUsers(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredTodos = this.combinedTodos;
    } else {
      this.filteredTodos = this.combinedTodos.filter(combinazione =>
        combinazione.user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Metodo per aggiornare la lista filtrata quando il termine di ricerca cambia
  onSearchTermChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterUsers();
  }
}
