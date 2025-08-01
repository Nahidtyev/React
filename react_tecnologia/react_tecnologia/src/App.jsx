import React from "react";
import Solution from "./component/Solutions";
import Story from "./component/Stories";
import Layout from "./features/Layout";
import "./style/global.scss";

const App = () => {
  return (
    <div>
      <Layout>
        <Solution />
        <Story />
      </Layout> 
    </div>
  );
};

export default App;
