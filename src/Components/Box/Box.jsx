import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Box.scss";

const Box = ({ id, title, desc1, readingTime }) => {
  const { t } = useTranslation();
  return (
    <Link to={`/blog/${id}`} className="box">
      <h2></h2>
      <h2 className="text">{title}</h2>
      <h6 className="text-desc">{desc1}</h6>
      <p className="reading-time">
        {t("r_time")}: {readingTime} {t("min_suffix")}
      </p>
    </Link>
  );
};

export default Box;
