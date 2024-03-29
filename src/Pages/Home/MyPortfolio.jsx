import React from "react";
import data from "../../data/index.json";
import githubLogo from "../../img/github-mark/github-mark-white.svg";

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>

        <div>
          <a
            href="https://github.com/jipatino98"
            target="_blank"
            rel="noreferrer"
            className="btn btn-github"
          >
            <img
              className="github-logo btn-github "
              src={githubLogo}
              width="32"
              height="32"
            />
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={item.src} alt="Placeholder" />
            </div>

            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="portfolio-link-banner-container">
                <a
                  className="text-sm portfolio-link"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>

                {item.inProgress ? (
                  <p className="portfolio-banner">In Progress</p>
                ) : (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-banner-live"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
