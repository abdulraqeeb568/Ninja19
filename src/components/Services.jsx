// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { AppearFromDown, SlideContent } from "./Components";
import { ReactComponent as DigitalStrategy } from "../images/svg/digital-strategy.svg";
import { ReactComponent as WebDesign } from "../images/svg/web-design.svg";
import { ReactComponent as WebDev } from "../images/svg/web-development.svg";
import { ReactComponent as UserExp } from "../images/svg/user-experience.svg";
import { ReactComponent as WordpressSol } from "../images/svg/wordpress-sol.svg";
import { ReactComponent as MobileApps } from "../images/svg/mobile-apps.svg";

export default function Services() {
  return (
    <div class="unslate_co--section" id="services-section">
      <div class="container">
        <div class="section-heading-wrap text-center mb-5">
          <h2 class="heading-h2 text-center divider">
            <SlideContent>
              <span>My Services</span>
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

        <div class="row gutter-v3">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="0">
              <AppearFromDown>
                <div class="wrap-icon mb-3">
                  <DigitalStrategy width={45} height={45} />
                </div>
                <h3>
                  Digital <br /> Strategy
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="100">
              <AppearFromDown delay={0.25}>
                <div class="wrap-icon mb-3">
                  <WebDesign width={45} height={45} />
                </div>
                <h3>
                  Web <br /> Design
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="200">
              <AppearFromDown delay={0.5}>
                <div class="wrap-icon mb-3">
                  <UserExp width={45} height={45} />
                </div>
                <h3>
                  User <br /> Experience
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="0">
              <AppearFromDown>
                <div class="wrap-icon mb-3">
                  <WebDev width={45} height={45} />
                </div>
                <h3>
                  Web <br /> Development
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="100">
              <AppearFromDown delay={0.25}>
                <div class="wrap-icon mb-3">
                  <WordpressSol width={45} height={45} />
                </div>
                <h3>
                  WordPress <br /> Solutions
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="feature-v1" data-aos="fade-up" data-aos-delay="200">
              <AppearFromDown delay={0.5}>
                <div class="wrap-icon mb-3">
                  <MobileApps width={45} height={45} />
                </div>
                <h3>
                  Mobile <br /> Applications
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
              </AppearFromDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
