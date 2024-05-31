import { Injectable } from '@angular/core';
import { iTodo } from '../Models/todo-task';
import { iUser } from '../Models/users';
import { iCombinazione } from '../Models/combinazione';

@Injectable({
  providedIn: 'root'
})
export class CombinedService {
  constructor() { }

  combineTodoWithUsers(todoTasks: iTodo[], users: iUser[]): iCombinazione[] {
    return users.map(user => {
      const todosForUser = todoTasks.filter(todo => todo.userId === user.id);
      return { user: user, todos: todosForUser };
    });
  }
}
