import { createContext } from "react";
import { TodoListContextType, TodoListState } from "../types";

export const ListContext = createContext<TodoListState>({
    list: [{item:'mop the floors', checked: true}],
    setTodo: () => {}
})