import React from "react";
import Todo from "./components/Todo";
import Layout from "./features/layout";

const App = () => {
  console.log(import.meta.env);
  return (
    <div>
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
};

export default App;
