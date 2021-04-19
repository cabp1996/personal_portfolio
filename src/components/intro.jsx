import React from "react";
import "../styles/stars.scss";
import Typed from "react-typed";

export const Intro = () => {
  return (
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h4 className="mb-4" style={{ color: "white" }}>Hello, my name is César Andrés Balcázar Pazmiño</h4>
            <p>
              <strong>
                Computer Systems Engineer - Escuela Politécnica Nacional
              </strong>
            </p>

            <p>
              <strong>
                <Typed
                  strings={[
                    "Front End Developer",
                    "Web and Mobile Developer"
                  ]}
                  typeSpeed={40}
                  backDelay={500}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <a
                className="btn btn-primary btn js-scroll px-4"
                href="#work"
                role="button"
              >
                My work
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
