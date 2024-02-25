import TodoList from "./components/Todo/TodoList";
import Layout from "./layout";

const App = () => {
  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <button className="btn btn-danger">Add</button>
            </div>
          </div>

          <TodoList />
        </div>
      </div>
    </Layout>
  );
};

export default App;
