import React from "react";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <TodoList />
    </div>
  );
};

export default App;
