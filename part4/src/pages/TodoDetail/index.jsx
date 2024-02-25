import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { detailTodo, UpdateTodoList } from "../../service/Api";
const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   const history = useHistory();
  useEffect(() => {
    detailTodo(id).then((res) => {
      setForm(res.data);
    });
  }, [id]);
  console.log(form);

  const UpdateTodo = (id) => {
    setLoading(true);
    UpdateTodoList(id, form).then((res) => {
      if (res.status === 200) {
        toast.success("Todo Updated Successfully");
        setTimeout(() => {
          navigate("/");
          setLoading(false);
        }, 2000);
      }
    });
  };

  return (
    <section>
      <ToastContainer position="top-right" />
      <div className="container my-5">
        <div className="row">
          <div className="col-xl-12">
            <button
              onClick={() => {
                navigate("/");
                //   history.goBack();
              }}
              className="btn btn-info"
            >
              Go Back
            </button>
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
                  UpdateTodo(form.id);
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

export default TodoDetail;
