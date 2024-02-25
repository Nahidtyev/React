import React, { useState } from "react";

const CreateTodo = ({ submit, loading, ...props }) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    surname: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section {...props}>
      <div className="container my-5">
        <div className="row">
          <div className="col-xl-12">
            <h1>
              <span className="badge bg-secondary">Create Todo</span>
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                  className="form-control p-3 "
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  value={form.name}
                  type="text"
                  className="form-control p-3 "
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  surname
                </label>
                <input
                  onChange={handleChange}
                  value={form.surname}
                  type="text"
                  className="form-control p-3 "
                  id="surname"
                  name="surname"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <select
                  onChange={handleChange}
                  value={form.status}
                  defaultValue={""}
                  className="w-100 p-4 rounded"
                  name="status"
                  id="status"
                >
                  <option disabled value="">
                    select status
                  </option>
                  <option value="active">Active</option>
                  <option value="passive">Passive</option>
                </select>
              </div>
              <button
                disabled={loading}
                onClick={() => {
                  submit(form);
                }}
                className="btn btn-primary my-2 p-3 w-100"
              >
                {loading ? (
                  <>
                    Loading...{" "}
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </>
                ) : (
                  "Create Todo"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTodo;
