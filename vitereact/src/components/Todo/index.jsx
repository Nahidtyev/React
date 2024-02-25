import React from "react";
import "./todo.scss";
const Todo = ({ id, name, surname, age }) => {
  return (
    <div className="todos">
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{age}</h3>
      <span>id:{id}</span>
    </div>
  );
};

export default Todo;
