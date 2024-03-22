// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import "../css/css/bootstrap/bootstrap.css";
// import "../css/css/style.css";
import * as Constants from "../Constants";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    // <nav class="unslate_co--site-nav site-nav-target">
    <nav class="unslate_co--site-nav ">
      <div class="container">
        <div class="row ">
          <div class="col-md-5 justify-content-end d-flex">
            <ul class="site-nav-ul text-right ">
              {/* <li class="has-children">
                <a href="#home-section" class="nav-link">
                  Home
                </a>
                <ul class="dropdown">
                  <li>
                    <a href="index.html">Hero Image BG</a>
                  </li>
                  <li>
                    <a href="index-video.html">Video BG</a>
                  </li>
                  <li>
                    <a href="index-hero-slider.html">Hero Slider</a>
                  </li>
                  <li>
                    <a href="index-sidebar-menu.html">Sidebar Menu</a>
                  </li>
                  <li>
                    <a href="index-right-menu.html">Right Menu</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="#portfolio-section" class="nav-link">
                  Projects
                </a>
              </li> */}
              <li>
                <a href="#about-section" class="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services-section" class="nav-link">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 text-center">
            <img height={60} src={require("../images/ninjaLogo.png")} />
            {/* <a href="index.html" class="unslate_co--site-logo">
              {Constants.ProjectName}
              <span>.</span>
            </a> */}
          </div>
          <div class="col-md-5  text-lg-left">
            <ul class="site-nav-ul text-left d-none d-lg-inline-block">
              <li>
                <a href="#skills-section" class="nav-link">
                  Skills
                </a>
              </li>
              {/* <li>
                <a href="#testimonial-section" class="nav-link">
                  Testimonial
                </a>
              </li> */}
              <li>
                <a href="#contact-section" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
              <li>
                <a href="#" class="js-menu-toggle">
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
