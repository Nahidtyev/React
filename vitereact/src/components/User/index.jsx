import React from "react";
import "./user.scss";
const User = ({ name, email, password }) => {
  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{password}</h3>
    </div>
  );
};

export default User;
