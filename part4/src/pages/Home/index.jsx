import React, { useState, useEffect, useTransition } from "react";
import Card from "../../component/Card";
import CreateTodo from "../../component/CreateTodo";
import Skeleton from "../../component/Skeleton";
import { createTodo, deleteTodo, GetUser } from "../../service/Api";
// import { toast, Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const [person, setPerson] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [loadingPost, setloadingPost] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [pending, startTransition] = useTransition({
    timeoutMs: 3000,
  });

  useEffect(() => {
    FetchUser();
  }, []);

  const FetchUser = async () => {
    setIsloading(true);
    GetUser()
      .then((res) => {
        setPerson(res.data);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const handleSubmit = (data) => {
    setloadingPost(true);
    if (!data.email || !data.name || !data.surname || !data.status) {
      toast.error("Please fill in all fields");
      setloadingPost(false);
      return;
    }

    // toast.promise(axios.post("http://localhost:3001/data", data), {
    //   loading: "Loading",
    //   success: () => {
    //     FetchUser();
    //     setTimeout(() => {
    //       setloadingPost(false);
    //     }, 2000);
    //     return "Todo Created Successfully";
    //   },
    //   error: (err) => {
    //     return err.message;
    //   },
    // });
    createTodo(data)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Todo Created Successfully");
          FetchUser();
          setTimeout(() => {
            setloadingPost(false);
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        Object.keys(data).forEach((key) => (data[key] = ""));
      });
  };

  const CheckStatus = (status) => {
    switch (status) {
      case "active":
        return "btn-success";
      case "passive":
        return "btn-danger";
      default:
        return "btn-primary";
    }
  };
  const handleDeleteItem = (id) => {
    person.filter((item) => item.id !== id);
    deleteTodo(id).then((res) => {
      if (res.status === 200) {
        toast.success("Todo Deleted Successfully");
        FetchUser();
      }
    });
  };

  const HandleSearch = (e) => {
    setQuery(e.target.value);
    console.log(query);
    const filteredItem = person.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    // console.log(filteredItem);
    setPerson(filteredItem);
    startTransition(() => {
      setPerson(filteredItem);
    });
  };

  useEffect(() => {
    if (query === "") {
      FetchUser();
    }
  }, [query]);
  return (
    <div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <ToastContainer position="top-right" autoClose={5000} />
      <CreateTodo loading={loadingPost} submit={handleSubmit} />
      <div className="container">
        <div className="row">
          <div className="search">
            <input
              type="search"
              placeholder="search"
              id="search"
              className="p-3 rounded shadow-none w-100 my-3"
              onChange={HandleSearch}
            />
            {pending ? (
              <div className="loadimg">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : null}
          </div>

          {person &&
            person.map((person, index) => (
              <div key={index} className="col-xl-3">
                {loading ? (
                  <Skeleton />
                ) : (
                  <Card
                    name={person.name}
                    surname={person.surname}
                    phone={person.email}
                    status={person.status || "Pending"}
                    statusClass={CheckStatus(person.status)}
                  >
                    <button
                      onClick={() => {
                        handleDeleteItem(person.id);
                      }}
                      className="btn btn-danger mx-1"
                    >
                      Delete
                    </button>
                    <button className="btn btn-warning mx-1">Update</button>
                    <button
                      onClick={() => {
                        navigate(`/${person.id}`);
                      }}
                      className="btn btn-primary w-100 my-2"
                    >
                      Read More...
                    </button>
                  </Card>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
