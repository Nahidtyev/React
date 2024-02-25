import React from "react";
import "./card.scss";
import clsx from "clsx";
const Card = ({
  name,
  surname,
  age,
  phone,
  status,
  statusClass,
  children,
  ...props
}) => {
  return (
    <div className="cards" {...props}>
      <div>
        <h3>{name}</h3>
        <h5>{surname}</h5>
        <h6>{age}</h6>
        <p>{phone}</p>
        <button className={clsx("btn", statusClass)}>{status}</button>
        {children}
      </div>
    </div>
  );
};

export default Card;
