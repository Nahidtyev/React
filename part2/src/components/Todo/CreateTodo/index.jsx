import axios from "axios";
import React from "react";
import { useState } from "react";
import { GetApiData } from "../../../services/Api";

const CreateToDo = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/data", form).then((res) => {
      if (res.status === 201) {
        GetApiData().then(() => {});
      }
    });
  };

  return (
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
  );
};

export default CreateToDo;
