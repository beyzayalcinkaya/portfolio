import React from "react";
import aboutImage from "../../assets/aboutimg.png";
import pageIcon from "../../assets/pageIcon.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
          <img src={aboutImage} className="aboutProfilImage" />
        </div>
        <div className="aboutRight">
          <div className="aboutPara">
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
          <div className="aboutSkills">
            <div className="aboutSkill">
              <p>HTML & CSS</p> <hr style={{ width: "100%" }} />
            </div>
            <div className="aboutSkill">
              <p>JAVASCRİPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="aboutSkill">
              <p>REACT JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="aboutSkill">
              <p>REACT NATİVE</p>
              <hr style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
