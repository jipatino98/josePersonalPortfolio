import React from "react";
import heroPhoto from "../../../src/img/joseBeach.jpg";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hi! I am Jose Patino</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <button className="btn btn-primary">Get in touch!</button>
      </div>
      <div className="hero-section-img">
        <img src={heroPhoto} alt="Hero Section" />
      </div>
    </section>
  );
}
