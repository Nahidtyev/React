import React from "react";

const Card = ({ name, surname, prof, status, className }) => {
  return (
    <div className="bg-slate-900 max-w-[300px] w-full rounded-md min-h-[140px] text-white my-3 p-3">
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{prof}</h3>
      <button className={className}>{status}</button>
    </div>
  );
};

export default Card;
