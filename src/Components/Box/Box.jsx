import React from "react";
import { Link } from "react-router-dom";
import "./Box.scss";

const Box = ({ name, title, desc1 }) => {
  return (
    <Link to={`/blog/${name}`} className="box">
      <h2 className="text">{title}</h2>
      <h6 className="text-desc">{desc1}</h6>
    </Link>
  );
};

export default Box;
