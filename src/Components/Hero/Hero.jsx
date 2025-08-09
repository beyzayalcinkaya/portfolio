import React from "react";
import "./Hero.css";
import profileImage from "../../assets/homePageImage.jpeg";
import resumePdf from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

        <a
          href={resumePdf}
          download
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <div className="heroResume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
