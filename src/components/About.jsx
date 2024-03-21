import React from "react";
import Reveal, {
  AppearFromDown,
  RevealImage,
  SlideContent,
} from "./Components";

export default function About() {
  return (
    <div class="unslate_co--section" id="about-section">
      <div class="container">
        <div class="section-heading-wrap text-center mb-5">
          <h2 class="heading-h2 text-center divider">
            <span style={{ color: "inherit" }}>About Me</span>
          </h2>
          <span>
            <img
              src={require("../images/divider.png")}
              alt="divider"
              width="76"
            />
          </span>
        </div>

        <div class="row mt-5 justify-content-between">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <figure class="dotted-bg gsap-reveal-img ">
              <RevealImage>
                <img
                  src={require("../images/about_me_pic2.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </RevealImage>
            </figure>
          </div>
          <div class="col-lg-4 pr-lg-5">
            <SlideContent>
              <h3 class="mb-4 heading-h3" style={{ color: "inherit" }}>
                <span>We can make it together</span>
              </h3>
            </SlideContent>
            <SlideContent delay={0.2}>
              <p class="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </SlideContent>
            <SlideContent delay={0.4}>
              <p class="mb-4 ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </SlideContent>
            <AppearFromDown delay={0.8}>
              <p>
                <a href="#" class="btn btn-outline-pill btn-custom-light">
                  Download my CV
                </a>
              </p>
            </AppearFromDown>
          </div>
        </div>
      </div>
    </div>
  );
}
