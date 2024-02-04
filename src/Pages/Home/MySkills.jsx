import React from "react";
import data from "../../data/index.json";

const skillArray = [
  "JavaScript",
  "C",
  "Git",
  "React",
  "Express",
  "Responsive Design",
  "Docker",
  "Linux",
  "Command Line",
  "Mongoose",
];

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">Experience</h2>
      </div>

      <p className="skills--section--title">Skill Set</p>
      <div className="skills--section--tools--container">
        {skillArray.map((item, index) => {
          return (
            <p key={index} className="skills--section--tools">
              {item}
            </p>
          );
        })}
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>

            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <p className="skills--section--title">Tools Used:</p>
              <p className="skills--section--tools">{item.tools.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
