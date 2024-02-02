import React from "react";
import redtail from "../../img/redtailoverlook.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-image">
        <img src={redtail} />
      </div>

      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <p className="section-title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero-section-description">
            In my free time, I love to explore, hike and run the occasional 5k.
            One of my favorite spots to hike is <b>Point Lobos</b> in Carmel,
            CA.
            <br></br>I am currently working on projects with a few teams that
            aim to help local organization with their software needs. Check them
            out in the <b>Experience</b> page! I enjoy working with other
            developers and designers to get successful products out in timely
            manner.
          </p>
        </div>
      </div>
    </section>
  );
}
