import React from "react";
import User from "./components/User";

export const Animal = () => {
  return (
    <div>
      <h1>Animal is Here</h1>
      <Yagub name="yagubNcksn" surname="elemdarovc" age={45} />
      <Elvin />
      <User name="Yagub" email="ilgar@gmail.com" password="idont know" />
    </div>
  );
};
export const Yagub = ({ name, surname, age }) => {
  return (
    <div>
      <h1>Name:{name || "Yagub"}</h1>
      <h2>Surname:{surname || "Memmedov"}</h2>
      <h1>Age:{age || 21}</h1>
      <RunPerson personName={name} km={age} />
    </div>
  );
};

export const RunPerson = ({ personName, km }) => {
  return (
    <div>
      <h1>
        {personName} ran {km} km
      </h1>
    </div>
  );
};

export const Elvin = () => {
  return <div>Hello Elvin</div>;
};
