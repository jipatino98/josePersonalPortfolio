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
          <p className="section-title">What I do</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero-section-description">
            In my free time, I love to explore, hike and run the occasional 5k.
            One of my favorite spots to hike is in the mountains of{" "}
            <b>Big Sur</b> near Monterey, CA. I hope to, one day, buy myself a
            Fender Stratocaster guitar and play some songs from my favorite
            band, The Smiths.
            <br></br>I am currently working with a few teams on projects that
            aim to help local organization with their software needs. Check them
            out in the <b>Projects</b> tab! I enjoy working with other
            developers and designers to get successful products out in timely
            manner.
          </p>
        </div>
      </div>
    </section>
  );
}
