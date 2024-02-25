import React from "react";
import { Instagram } from "react-content-loader";
const Skeleton = ({ count }) => {
  return (
    <div>
      {Array(count)
        .fill("")
        .map((item, index) => (
          <Instagram key={index} />
        ))}
    </div>
  );
};

export default Skeleton;
