import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Loading from "../Loading";
const CreateTodo = ({ submit, loading, ...props }) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    profession: "",
    status: false,
  });
  const HandleChnage = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  return (
    <section {...props}>
      <div className="max-w-[1000px] mx-auto ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-1  ite justify-center flex-col w-full"
        >
          <div className="my-3 w-full mx-auto ">
            <label htmlFor="name">Name</label>
            <input
              onChange={HandleChnage}
              value={form.name}
              type="text"
              id="name"
              name="name"
              className="input_style"
            />
          </div>
          <div className="my-3 w-full ">
            <label htmlFor="surname">Surname</label>
            <input
              onChange={HandleChnage}
              value={form.surname}
              type="text"
              id="surname"
              name="surname"
              className="input_style"
            />
          </div>
          <div className="my-3  w-full">
            <label htmlFor="name">profession</label>
            <input
              onChange={HandleChnage}
              value={form.profession}
              type="text"
              id="profession"
              name="profession"
              className="input_style"
            />
          </div>
          <div className="my-3 w-full ">
            <label htmlFor="status">status</label>
            <select
              onChange={HandleChnage}
              value={form.status}
              className="input_style"
              name="status"
              id="status"
            >
              <option disabled defaultValue={null}>
                select status
              </option>
              <option value="active">Active</option>
              <option value="deactive">DeActive</option>
            </select>
          </div>
          <button
            disabled={loading}
            onClick={() => {
              submit(form);
            }}
            className="button_style"
          >
            Create
            {loading ? <Loading /> : <AiOutlinePlus size={20} color="#fff" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateTodo;
