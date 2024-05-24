// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { AppearFromDown, SlideContent } from "./Components";
import { ReactComponent as DigitalStrategy } from "../images/svg/digital-strategy.svg";
import { ReactComponent as WebDesign } from "../images/svg/web-design.svg";
import { ReactComponent as WebDev } from "../images/svg/web-development.svg";
import { ReactComponent as UserExp } from "../images/svg/user-experience.svg";
import { ReactComponent as WordpressSol } from "../images/svg/wordpress-sol.svg";
import { ReactComponent as MobileApps } from "../images/svg/mobile-apps.svg";
import "../App.css";

export default function Services() {
  return (
    <div className="unslate_co--section" id="services-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <SlideContent>
              <span>Our Services</span>
            </SlideContent>
          </h2>
          <span>
            <img
              src={require("../images/divider.png")}
              alt="divider"
              width="76"
            />
          </span>
        </div>

        <div className="row gutter-v3">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos="fade-up" data-aos-delay="100">
              <AppearFromDown delay={0.25}>
                <div className="wrap-icon mb-3">
                  <WebDesign width={45} height={45} />
                </div>
                <h3>
                  Web <br /> Design
                </h3>
                <p>
                  Implementing the plan for designing a website in a way that is
                  functional and offers a good user experience.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos="fade-up" data-aos-delay="0">
              <AppearFromDown>
                <div className="wrap-icon mb-3">
                  <WebDev width={45} height={45} />
                </div>
                <h3>
                  Web <br /> Development
                </h3>
                <p>
                  From sleek, responsive designs to robust backend development,
                  our web development services are crafted to enhance online
                  presence and drive growth.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos="fade-up" data-aos-delay="100">
              <AppearFromDown delay={0.25}>
                <div className="wrap-icon mb-3">
                  <WordpressSol width={45} height={45} />
                </div>
                <h3>
                  WordPress <br /> Solutions
                </h3>
                <p>
                  Unleashing the potential of WordPress for captivating websites
                  that drive success.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos="fade-up" data-aos-delay="200">
              <AppearFromDown delay={0.5}>
                <div className="wrap-icon mb-3">
                  <MobileApps width={45} height={45} />
                </div>
                <h3>
                  Mobile <br /> Applications
                </h3>
                <p>
                  Building innovative mobile solutions to connect your brand
                  with users on-the-go, driving engagement and growth.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos-delay="0">
              <AppearFromDown>
                <div className="wrap-icon mb-3">
                  <DigitalStrategy width={45} height={45} />
                </div>
                <h3>
                  Desktop <br /> Development
                </h3>
                <p>
                  User-centric applications for enhanced experiences and
                  streamlined operations. Our desktop development services are
                  crafted to optimize productivity and elevate user experiences.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1" data-aos="fade-up" data-aos-delay="200">
              <AppearFromDown delay={0.5}>
                <div className="wrap-icon mb-3">
                  <UserExp width={45} height={45} />
                </div>
                <h3>
                  Windows <br /> Services
                </h3>
                <p>
                  Delivering scalable Windows services that not only optimize
                  business functionalities but also empower growth by boosting
                  operational efficiency and effectiveness.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
