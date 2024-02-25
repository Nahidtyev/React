import React from "react";

const User = ({ name, email, password }) => {
  const styl = {
    color: "red",
  };
  return (
    <div>
      {React.createElement("h1", null, "Welcome " + name)}
      {React.createElement(
        "button",
        { onClick: () => alert("Hello " + name) },
        "Click me!"
      )}
      <h1 style={styl}>Welcome {name}</h1>
      <p>Your email is {email}</p>
      <p>Your password is {password}</p>
    </div>
  );
};

export default User;
