import React from "react";
import profileImage from "../../assets/homePageImage.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="intro">
        <img
          className="profile-image home-nav-item home-delay-1"
          src={profileImage}
          alt="Beyza Yalçınkaya"
        />
        <h1 className="home-nav-item home-delay-2">
          <p className="name">I'm Beyza Yalçınkaya,</p>
          <p className="role">software developer based in Turkey.</p>
        </h1>
      </div>
      <div className="lets-talk">
        <header className="desc">
          <h2 className="title home-nav-item home-delay-3">Let's Talk</h2>
          <p className="home-nav-item home-delay-4">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you’d like me to work on. You can
            contact me anytime.
          </p>
        </header>

        <div className="contact-info">
          <div className="contact-item home-nav-item home-delay-4">
            <span
              className="material-symbols-outlined "
              style={{ color: "green" }}
            >
              mail
            </span>
            <p>
              <a className="mail" href="mailto:lbeyzayalcinkaya@gmail.com">
                lbeyzayalcinkaya@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item home-nav-item home-delay-5">
            <span
              className="material-symbols-outlined"
              style={{ color: "green" }}
            >
              location_on
            </span>
            <p>Turkey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
