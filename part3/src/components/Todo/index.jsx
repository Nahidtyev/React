import React from "react";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <CreateTodo />
      <EditTodo />
    </div>
  );
};

export default Todo;
