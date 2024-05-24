// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import Reveal, { Counter, SlideContent } from "./Components";
export default function Skills() {
  return (
    <div className="unslate_co--section section-counter" id="skills-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <SlideContent>
              <span style={{ color: "inherit" }}>Our Skills</span>
            </SlideContent>
          </h2>
          <span>
            <SlideContent>
              <img
                src={require("../images/divider.png")}
                alt="divider"
                width="76"
              />
            </SlideContent>
          </span>
        </div>

        <div className="row pt-5">
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-5 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap ">
                <Counter value={80} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">WordPress</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-4"
            data-aos="fade-up"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap">
                <Counter value={90} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">React</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-4"
            data-aos="fade-up"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap">
                <Counter value={90} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">React Native</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap">
                <Counter value={95} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">Web API</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap">
                <Counter value={85} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">Desktop Apps</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="counter-v1 text-center">
              <span className="number-wrap">
                <Counter value={90} />
                <span className="append-text">%</span>
              </span>
              <span className="counter-label">Windows Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
