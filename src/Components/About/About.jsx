import React from "react";
import { useTranslation } from "react-i18next";
import aboutImage from "../../assets/aboutimg.png";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1 className="about-nav-item about-delay-1">{t("aboutTitle")}</h1>
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
            <p>{t("aboutPara1")}</p>
            <p>{t("aboutPara2")}</p>
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
