import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.scss";

const Navbar = () => {
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
            <AnchorLink className="anchorLink" href="#home">
              Home
            </AnchorLink>
          </li>

          <li className="nav-item delay-3">
            <AnchorLink className="anchorLink" offset={40} href="#about">
              About&nbsp;Me
            </AnchorLink>
          </li>
          <li className="nav-item delay-4">
            <AnchorLink className="anchorLink" offset={40} href="#services">
              Services
            </AnchorLink>
          </li>

          <li className="nav-item delay-5">
            <AnchorLink className="anchorLink" offset={40} href="#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="navConnect nav-item delay-6 ">
          <AnchorLink className="anchorLink" offset={40} href="#contact">
            Contact&nbsp;Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
