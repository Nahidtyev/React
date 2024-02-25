import React from "react";

import { RotatingLines } from "react-loader-spinner";
const Loading = () => {
  return (
    <RotatingLines
      strokeColor="#fff"
      strokeWidth="2"
      animationDuration="0.75"
      width="25"
      visible={true}
    />
  );
};

export default Loading;
