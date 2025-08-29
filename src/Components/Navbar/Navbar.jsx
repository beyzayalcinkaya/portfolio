import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

        {/**  <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item delay-2">
            <AnchorLink className="anchorLink" href="#home">
              {t("home")}
            </AnchorLink>
          </li>

          <li className="nav-item delay-3">
            <AnchorLink className="anchorLink" offset={40} href="#about">
              {t("about")}
            </AnchorLink>
          </li>
          <li className="nav-item delay-4">
            <AnchorLink className="anchorLink" offset={40} href="#services">
              {t("services")}
            </AnchorLink>
          </li>

          <li className="nav-item delay-5">
            <AnchorLink className="anchorLink" offset={40} href="#contact">
              {t("contact")}
            </AnchorLink>
          </li>
          <LangSelect />
        </ul>  */}

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item delay-2">
            <HashLink smooth to="/#home">
              {t("home")}
            </HashLink>
          </li>
          <li className="nav-item delay-3">
            <HashLink smooth to="/#about">
              {t("about")}
            </HashLink>
          </li>
          <li className="nav-item delay-4">
            <HashLink smooth to="/#services">
              {t("services")}
            </HashLink>
          </li>
          <li className="nav-item delay-5">
            <HashLink smooth to="/#contact">
              {t("contact")}
            </HashLink>
          </li>
          <li className="nav-item delay-6">
            <Link className="anchorLink" to="/blog">
              Blog
            </Link>
          </li>
          <LangSelect />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
