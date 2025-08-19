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
              My interest in software development stems from my engineering
              education. I specialize in web and mobile technologies, with a
              particular focus on frontend development, and I stay up-to-date
              with the latest trends. In every line of code I write, I
              prioritize both user experience and design aesthetics.
            </p>
            <p>
              I approach each project not only with technical expertise but also
              with motivation, a sense of design, and a user-centered mindset.
              While developing products using React, modern web tools, and
              mobile technologies, I focus on attention to detail and delivering
              real value to the end user.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill about-nav-item about-delay-4">
              <p>HTML & CSS</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "90%" }} />
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
                <hr className="skill-fill" style={{ width: "80%" }} />
              </div>
            </div>
            <div className="about-skill about-nav-item about-delay-7">
              <p>REACT NATİVE</p>
              <div className="skill-bar">
                <hr className="skill-bg" />
                <hr className="skill-fill" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
