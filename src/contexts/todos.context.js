import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todos.reducer";

const defaultTodos = [
  { id: "0", task: "Pick up apples", completed: false },
  { id: "1", task: "Speak to Jane", completed: false },
  { id: "2", task: "Hunt the brown Fox", completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
