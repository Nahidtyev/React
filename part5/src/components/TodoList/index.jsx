import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetDataApi, PostDataApi } from "../../services/Api";
import Card from "../Card";
import CreateTodo from "../CreateTodo";
import { toast } from "react-toastify";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    GetDataApi().then((res) => {
      setTodo(res.data);
    });
  };
  const HandleSubmit = (data) => {
    setLoading(true);
    PostDataApi(data)
      .then((res) => {
        if (res.status === 201) {
          GetData();
          toast.success("Todo Created Successfully");
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        Object.entries(data).forEach(([key]) => {
          data[key] = "";
        });
      });
  };

  const CheckStatus = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500 text-white rounded-md px-3 py-1";

      case "deactive":
        return "bg-red-500 text-white rounded-md px-3 py-1";

      default:
        return "bg-blue-500 text-white rounded-md px-3 py-1";
    }
  };

  return (
    <section>
      <CreateTodo loading={loading} submit={HandleSubmit} />
      <div className="max-w-[1400px] mx-auto ">
        <div className="max-w-[1400px] gap-10 w-full flex flex-wrap  items-center justify-center">
          {todo &&
            todo.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                surname={item.surname}
                prof={item.profession}
                status={item.status}
                className={CheckStatus(item.status)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
