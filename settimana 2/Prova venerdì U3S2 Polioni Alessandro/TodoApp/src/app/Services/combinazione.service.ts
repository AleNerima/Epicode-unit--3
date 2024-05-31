import { Injectable } from '@angular/core';
import { iTodo } from '../Models/todo-task';
import { iUser } from '../Models/users';
import { iCombinazione } from '../Models/combinazione';

@Injectable({
  providedIn: 'root'
})
export class CombinedService {
  private todoTasks: iTodo[] = [];

  constructor() { }

  setTodoTasks(todoTasks: iTodo[]): void {
    this.todoTasks = todoTasks;
  }

  getAllTodos(): iTodo[] {
    return this.todoTasks;
  }


  getCompletedTodos(): iTodo[] {
    return this.todoTasks.filter(todo => todo.completed);
  }

  combineTodoWithUsers(todoTasks: iTodo[], users: iUser[]): iCombinazione[] {
    return users.map(user => {
      const todosForUser = todoTasks.filter(todo => todo.userId === user.id);
      return { user: user, todos: todosForUser };
    });
  }
}

