import React, { useEffect } from "react";
import { useState } from "react";
import { Deletetodo, GetTodos, PostTodo } from "../../../services/Api";
import TodoList from "../TodoList";

const CreateTodo = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    profession: "",
    email: "",
  });
  const [loading, setIsloading] = useState(false);

  useEffect(() => {
    GetTodos().then((res) => setTodos(res));
  }, []);
  const HandleCHange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    setIsloading(true);
    if (
      form.name === "" ||
      form.surname === "" ||
      form.profession === "" ||
      form.email === ""
    ) {
      setIsloading(false);
      return alert("Please fill in all fields");
    }
    e.preventDefault();
    PostTodo(form).then((res) => {
      if (res.status === 201) {
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
        setTodos((prevTodos) => [...prevTodos, res.data]);
        setForm({
          name: "",
          surname: "",
          profession: "",
          email: "",
        });
      }
    });
  };
  const HandleDelete = (id) => {
    Deletetodo(id).then((res) => {
      if (res.status === 200) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    });
  };

  const ChnageStatus = (type) => {
    switch (type) {
      case "Frontend":
        return "btn btn-success";

      case "Backend":
        return "btn btn-primary";

      case "Full-Stuck":
        return "btn btn-warning";
      default:
        return "btn btn-danger";
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form-group mb-3">
                <label htmlFor="todo">Name</label>
                <input
                  onChange={HandleCHange}
                  value={form.name}
                  type="text"
                  className="form-control w-100 shadow-none p-3 "
                  id="todo"
                  placeholder="Enter name"
                  name="name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="todo">Surname</label>
                <input
                  type="text"
                  className="form-control w-100 shadow-none p-3 "
                  id="todo"
                  placeholder="Enter surname"
                  name="surname"
                  onChange={HandleCHange}
                  value={form.surname}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="todo">Email</label>
                <input
                  onChange={HandleCHange}
                  value={form.email}
                  type="text"
                  className="form-control w-100 shadow-none p-3 "
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="todo">Profession</label>
                <select
                  onChange={HandleCHange}
                  value={form.profession}
                  className="w-100 py-2 shadow-none"
                  name="profession"
                  id="profession"
                  defaultValue={""}
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Full-Stack">Full Stack</option>
                </select>
              </div>
              <button
                disabled={loading}
                onClick={HandleSubmit}
                className="btn btn-primary w-100 my-2 p-3"
              >
                {loading ? "Loading..." : "Create"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {todos.length > 0 &&
            todos &&
            todos.map((todo, index) => (
              <div className="col-xl-3" key={index}>
                <TodoList
                  name={todo.name}
                  surname={todo.surname}
                  profession={todo.profession}
                  HandleDelete={() => HandleDelete(todo.id)}
                  className={ChnageStatus(todo.profession)}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CreateTodo;
