import React from "react";
import "./Box.scss";

const Box = ({ title, desc1 }) => {
  return (
    <div className="box">
      <h2 className="text">{title}</h2>
      <h6 className="text-desc">{desc1}</h6>
    </div>
  );
};

export default Box;
