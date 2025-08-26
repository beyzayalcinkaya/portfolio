import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // TODO
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
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
          <AnchorLink
            className="anchorLink"
            href="#home"
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
        </li>

        <li className="nav-item delay-3">
          <AnchorLink
            className="anchorLink"
            offset={50}
            href="#about"
            onClick={() => setMenu("about")}
          >
            About&nbsp;Me
          </AnchorLink>
        </li>
        <li className="nav-item delay-4">
          <AnchorLink
            className="anchorLink"
            offset={50}
            href="#services"
            onClick={() => setMenu("services")}
          >
            Services
          </AnchorLink>
        </li>

        <li className="nav-item delay-5">
          <AnchorLink
            className="anchorLink"
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="navConnect nav-item delay-6 ">
        <AnchorLink className="anchorLink" offset={50} href="#contact">
          Contact&nbsp;Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
