import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumePdf from "../../assets/resume.pdf";
import profileImage from "../../assets/homePageImage.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profileimage" src={profileImage} />
      <h1>
        {" "}
        <span>I'm Beyza Yalçınkaya,</span> software developer based in Turkey.
      </h1>
      <p>
        I'm a software developer in Istanbul. I'am a electrical and electronics
        engineer.
      </p>
      <div className="heroAction">
        <div className="heroConnect">
          {" "}
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
