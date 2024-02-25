import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  const navbarItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 5,
      name: "Login",
      path: "/login",
    },
    {
      id: 6,
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-3">
            <h4>Vite</h4>
          </div>
          <div className="col-9">
            <ul className="list">
              {navbarItems &&
                navbarItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
