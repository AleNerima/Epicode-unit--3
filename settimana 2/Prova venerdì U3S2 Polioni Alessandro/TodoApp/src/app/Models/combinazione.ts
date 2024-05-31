import { iUser } from "../Models/users";
import { iTodo } from "../Models/todo-task";

export interface iCombinazione {
  user: iUser;
  todos: iTodo[];
}
