import React, { useState, useRef } from "react";
import logo from "../../assets/pageIcon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <span className="myName">Beyza</span>
      <span className="menuOpen">
        <span class="material-symbols-outlined" onClick={openMenu}>
          menu
        </span>
      </span>
      <ul ref={menuRef} className="navMenu">
        <span className="menuClose">
          <span class="material-symbols-outlined" onClick={closeMenu}>
            close
          </span>
        </span>
        <li>
          <AnchorLink className="anchorLink" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="navConnect">
        <AnchorLink className="anchorLink" offset={50} href="#contact">
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
