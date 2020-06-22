import React from "react";
import { TodosProvider } from "../contexts/todos.context";
import TodoList from "./TodoList";
import Card from "./TodoContainer";

const TodoApp = () => {
  return (
    <TodosProvider>
      <Card>
        <TodoList />
      </Card>
    </TodosProvider>
  );
};

export default TodoApp;
