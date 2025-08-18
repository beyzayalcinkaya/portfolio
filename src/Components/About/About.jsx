import React from "react";
import aboutImage from "../../assets/aboutimg.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1 className="about-nav-item about-delay-1">About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            src={aboutImage}
            className="about-profil-image about-nav-item about-delay-2"
          />
        </div>
        <div className="about-right">
          <div className="about-para about-nav-item about-delay-3">
            <p>
              My interest in software development was shaped by my engineering
              education. I work in web and mobile technologies, with a
              particular focus on frontend development, and I closely follow the
              latest trends. In every line of code I write, I prioritize user
              experience and aesthetics.
            </p>
            <p>
              I approach every project not only with technical knowledge, but
              also with high motivation, a sense of aesthetics, and a
              user-focused perspective. While developing products with React,
              modern web tools, and mobile technologies, I prioritize both
              attention to detail and delivering value to the end user.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill about-nav-item about-delay-4">
              <p>HTML & CSS</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "80%" }} />
              </div>
            </div>
            <div className="about-skill about-nav-item about-delay-5">
              <p>JAVASCRİPT</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "80%" }} />
              </div>
            </div>
            <div className="about-skill about-nav-item about-delay-6">
              <p>REACT JS</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "70%" }} />
              </div>
            </div>
            <div className="about-skill about-nav-item about-delay-7">
              <p>REACT NATİVE</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
