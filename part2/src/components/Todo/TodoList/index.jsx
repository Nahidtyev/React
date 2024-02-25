import React from "react";
import "./list.scss";
import { useEffect } from "react";
import { useState } from "react";
import { GetApiData } from "../../../services/Api";
import axios from "axios";

const TodoList = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Yagub");

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
  });
  useEffect(() => {
    GetApiData().then((res) => {
      setData(res);
    });
  }, []);
  console.log(data);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/data", form).then((res) => {
      if (res.status === 201) {
        GetApiData().then((res) => {
          setData(res);
        });
      }
    });
  };

  //   useEffect(() => {
  //     fetch("http://localhost:3001/data")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   }, []);
  //   const getData = async () => {
  //     await fetch("http://localhost:3001/data")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   };

  const Increace = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const ResetCount = () => {
    setCount(0);
  };
  const CHnageName = () => {
    setName(name === "Yagub" ? "Elvin" : "Yagub");
  };
  return (
    <div>
      <button onClick={Increace} className="btn btn-success">
        +
      </button>
      <span>{count}</span>
      <button onClick={Decrease} className="btn btn-success">
        -
      </button>
      <button onClick={ResetCount} className="btn btn-success">
        reset
      </button>
      <h1>{name}</h1>
      <button onClick={CHnageName} className="btn btn-success">
        Change Name
      </button>

      <div className="container my-5">
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-9">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      onChange={handleChange}
                      value={form.name}
                      type="text"
                      className="form-control w-100 p-4 rounded-3 shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Surname</label>
                    <input
                      onChange={handleChange}
                      value={form.surname}
                      type="text"
                      className="form-control w-100 p-4 rounded-3 shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter surname"
                      name="surname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={form.email}
                      className="form-control w-100 p-4 rounded-3 shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <button
                    onClick={HandleSubmit}
                    className="btn btn-primary w-100 my-3 p-3"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="row g-3">
          {data &&
            data.map((data, index) => (
              <div key={index} className="col-xl-3">
                <div className="item">
                  <h1>{data.name}</h1>
                  <h2>{data.surname}</h2>
                  <p>{data.email}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
