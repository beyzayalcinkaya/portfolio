import React from "react";
import { Link } from "react-router-dom";
import "./Box.scss";

const Box = ({ id, title, desc1, readingTime }) => {
  return (
    <Link to={`/blog/${id}`} className="box">
      <h2 className="text">{title}</h2>
      <h6 className="text-desc">{desc1}</h6>
      <p className="reading-time">Okuma süresi: {readingTime} dk</p>
    </Link>
  );
};

export default Box;
