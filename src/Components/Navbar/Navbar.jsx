import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import LangSelect from "../LangSelect/LangSelect";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="title nav-item delay-1">
          <span className="material-symbols-outlined">cannabis</span>

          <span className="myName">Beyza</span>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item delay-2">
            <Link className="Link" to="/">
              {t("home")}
            </Link>
          </li>

          <li className="nav-item delay-3">
            <Link className="Link" to="/about">
              {t("about")}
            </Link>
          </li>
          <li className="nav-item delay-4">
            <Link className="Link" to="/services">
              {t("services")}
            </Link>
          </li>

          <li className="nav-item delay-5">
            <Link className="Link" to="/contact">
              {t("contact")}
            </Link>
          </li>
          <li className="nav-item delay-6">
            <Link className="Link" to="/blog">
              {t("blog")}
            </Link>
          </li>
          <LangSelect />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
