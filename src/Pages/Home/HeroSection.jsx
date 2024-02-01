import React from "react";
import heroPhoto from "../../../src/img/heroImage.png";
import resumePDF from "../../data/resume.pdf";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hi! I am Jose Patino</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Experienced with frontend and backend frameworks. I also enjoy
            leaning about distributed systems and operating systems. Check out
            my work!
          </p>
        </div>
        <a
          href={resumePDF}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          My Resume
        </a>
      </div>
      <div className="hero-section-img">
        <img src={heroPhoto} alt="Hero Section" />
      </div>
    </section>
  );
}
