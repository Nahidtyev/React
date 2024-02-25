import React from "react";
import Todo from "./components/Todo";
import User from "./components/User";

import { TodoItems, Users } from "./Mock/data";
const App = () => {
  return (
    <div>
      <h1>Hello React with Create reacrt APpp</h1>
      <div className="data">
        {Users &&
          Users.map((user, index) => (
            <User
              key={`user-${index}`}
              name={user.name}
              email={user.email}
              password={user.password}
            />
          ))}
      </div>

      <div className="data">
        {TodoItems &&
          TodoItems.map((todo, index) => {
            return (
              <Todo
                key={`todo-${index}`}
                id={todo.id}
                name={todo.name}
                surname={todo.surname}
                age={todo.age}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
