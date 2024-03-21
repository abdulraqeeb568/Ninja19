import React, { useEffect, useRef } from "react";
import "../css/css/bootstrap/bootstrap.css";
// import '../css/vendor/owl.carousel.min.css'
import "../css/css/style.css";
// import "../css/scss/components/_contents.scss";
import Projects from "./Projects";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import * as Constants from "../Constants";
import Reveal from "../components/Components";
import ninjaDev from "../images/ninjaDev.png";
export default function Home() {
  const Cover = () => {
    return (
      <div
        className="cover-v1 jarallax"
        // style={{
        //   backgroundImage: `url(${ninjaDev})`,
        // }}
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto text-center">
              <Reveal>
                <h2 className="heading" style={{ color: "inherit" }}>
                  {Constants.ProjectName}
                </h2>
              </Reveal>
              <Reveal>
                <h3
                  className="subheading "
                  style={{ color: "inherit", paddingLeft: 0 }}
                >
                  Unlocking the agility of tech dojo. Swift, adaptable, and
                  ever-ready to conquer the ever-evolving landscape of software
                </h3>
              </Reveal>
            </div>
          </div>
        </div>

        {/* <a href="#portfolio-section" class="mouse-wrap smoothscroll">
          <span className="mouse">
            <span className="scroll"></span>
          </span>
          <span className="mouse-label">Scroll</span>
        </a> */}
      </div>
    );
  };
  return (
    <body data-spy="scroll" data-target=".site-nav-target" data-offset="200">
      <nav className="unslate_co--site-mobile-menu">
        <div className="close-wrap d-flex">
          <a href="#" className="d-flex ml-auto js-menu-toggle">
            <span className="close-label">Close</span>
            <div className="close-times">
              <span className="bar1"></span>
              <span className="bar2"></span>
            </div>
          </a>
        </div>
        <div className="site-mobile-inner"></div>
      </nav>

      <div className="unslate_co--site-wrap">
        <div className="unslate_co--site-inner">
          <div className="lines-wrap">
            <div className="lines-inner">
              <div className="lines"></div>
            </div>
          </div>
          <Navbar />
          <Cover />
          {/* <Projects /> */}

          {/*
          <div className="unslate_co--section">
            <div className="container">
              <div className="owl-carousel logo-slider">
                <div className="logo-v1">
                  <img
                    src={Constants.google_logo}
                    alt="Image"
                    classNameName="img-fluid"
                  />
                </div>
                {/* <div className="logo-v1 gsap-reveal">
                  <img
                    src="images/logo-puma.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="logo-v1 gsap-reveal">
                  <img
                    src="images/logo-paypal.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="logo-v1 gsap-reveal">
                  <img
                    src="images/logo-adobe.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div> 
              </div>
            </div>
          </div>
          */}
          <About />
          <Services />
          <Skills />
          {/* <Testimonials /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </body>
  );
}
