import React from "react";
import Reveal, {
  AppearFromDown,
  RevealImage,
  SlideContent,
} from "./Components";

export default function About() {
  return (
    <div className="container" id="about-section">
      <div className="section-heading-wrap text-center mb-5">
        <h2 className="heading-h2 text-center divider">
          <span style={{ color: "inherit" }}>About Us</span>
        </h2>
        <span>
          <img
            src={require("../images/divider.png")}
            alt="divider"
            width="76"
          />
        </span>
      </div>

      <div className="row mt-5 justify-content-between">
        <div className="col-lg-6 mb-5 mb-lg-0 justify-content-center d-flex mt-5">
          <div style={{ height: "60%" }}>
            <RevealImage height="100%">
              <img
                src={require("../images/ninjaLogo.png")}
                alt="Image"
                style={{ height: "100%" }}
              />
            </RevealImage>
          </div>
        </div>
        <div className="col-lg-6 pr-lg-5  justify-content-center justify-content-md-start d-flex">
          <div style={{ width: "74%" }}>
            <SlideContent>
              <h3 className="mb-4 heading-h3" style={{ color: "inherit" }}>
                <span style={{ color: "inherit" }}>
                  We can make it together
                </span>
              </h3>
            </SlideContent>
            <SlideContent delay={0.2}>
              <p className="" style={{ color: "inherit" }}>
                Ninja Nineteen is a cutting-edge software company dedicated to
                delivering innovative solutions that empower businesses to
                thrive in the digital age.
              </p>
            </SlideContent>
            <SlideContent delay={0.4}>
              <p className="mb-4 " style={{ color: "inherit" }}>
                With a focus on creativity, efficiency, and excellence, we
                specialize in crafting custom software solutions tailored to
                meet the unique needs of each client.
              </p>
            </SlideContent>
            <SlideContent delay={0.6}>
              <p className="mb-4 " style={{ color: "inherit" }}>
                Our team of skilled developers and designers are committed to
                pushing the boundaries of technology to drive success for our
                clients. Whether you're looking to streamline operations,
                enhance user experiences, or revolutionize your online presence,
                Ninja Nineteen is your trusted partner for transformative
                software solutions.
              </p>
            </SlideContent>
          </div>
        </div>
      </div>
    </div>
  );
}
