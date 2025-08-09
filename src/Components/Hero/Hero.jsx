import React from "react";
import "./Hero.css";
import profileImage from "../../assets/homePageImage.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profileimage" src={profileImage} />
      <h1>
        {" "}
        <span>I'm Beyza Yalçınkaya,</span> software developer based in Turkey.
      </h1>
      <p>
        I'am a software developer in Istanbul. I'am a electrical and electronics
        engineer.
      </p>
      <div className="heroAction">
        <div className="heroConnect">Connect with me</div>
        <div className="heroResume">My Resume </div>
      </div>
    </div>
  );
};

export default Hero;
