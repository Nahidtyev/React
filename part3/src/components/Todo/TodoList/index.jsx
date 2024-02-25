import React from "react";
import "./todolist.scss";
const TodoList = ({
  className,
  name,
  surname,
  profession,
  HandleDelete,
  ...props
}) => {
  return (
    <div {...props} className="todolist">
      <p>{name}</p>
      <p>{surname}</p>
      <button className={className}>{profession}</button>
      <button onClick={HandleDelete} className="btn btn-danger mx-3">
        Delete
      </button>
    </div>
  );
};

export default TodoList;
