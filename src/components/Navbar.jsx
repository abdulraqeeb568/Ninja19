// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import "../css/css/bootstrap/bootstrap.css";
// import "../css/css/style.css";
import * as Constants from "../Constants";
import "bootstrap/dist/css/bootstrap.css";

import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  const handleSelect = (e) => {
    if (e === "option-1") {
      // Scroll to the skills section
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (e === "option-2") {
      const servicesSection = document.getElementById("services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (e === "option-3") {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    // <nav class="unslate_co--site-nav site-nav-target">
    <nav class="unslate_co--site-nav p-1">
      <div class="container">
        <div class="row ">
          <div class="col-5 justify-content-end d-flex">
            <ul class="site-nav-ul d-none d-lg-inline-block">
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
          <div class="col-md-2 text-center d-none d-lg-inline-block">
            <img height={40} src={require("../images/ninjaLogo.png")} />
            {/* <a href="index.html" class="unslate_co--site-logo">
              {Constants.ProjectName}
              <span>.</span>
            </a> */}
          </div>
          <div class="col-md-5 text-lg-left">
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

            <div className="d-flex justify-content-end ">
              {/* <ul class="site-nav-ul-none-onepage d-inline-block d-lg-none">
                <li>
                  <a href="#" class="js-menu-toggle">
                    Menu
                  </a>
                </li>
              </ul> */}
              <DropdownButton
                className="d-inline-block mr-0 pr-0 d-lg-none"
                variant="secondary"
                style={{ marginRight: "-2%", marginTop: "2%", padding: 0 }}
                title={
                  <div>
                    <FiAlignJustify style={{ color: "white" }} />
                  </div>
                }
                id="dropdown-menu"
                onSelect={handleSelect}
              >
                <DropdownItem eventKey="option-1">About</DropdownItem>
                <DropdownItem eventKey="option-2">Services</DropdownItem>
                <DropdownItem eventKey="option-3">Skills</DropdownItem>
                <DropdownItem eventKey="option-3">Contact</DropdownItem>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
