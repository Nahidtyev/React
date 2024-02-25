import React from "react";
import "./navbar.scss";
const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">React Project</div>
          <div className="col-9">
            <ul className="list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
