import React from "react";
import { SlideContent } from "./Components";
import { color } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <div class="unslate_co--section" id="contact-section">
      <div class="container">
        <SlideContent>
          <div class="section-heading-wrap text-center mb-5">
            <h2
              class="heading-h2 text-center divider"
              style={{ color: "inherit" }}
            >
              <span>Get In Touch</span>
            </h2>
            <span>
              <img
                src={require("../images/divider.png")}
                alt="divider"
                width="76"
              />
            </span>
          </div>
        </SlideContent>

        <div class="row justify-content-between">
          <div class="col-md-6">
            <form method="post" class="" id="contactForm">
              <div class="row mb-0" style={{}}>
                <div class="col-lg-6 mb-2 ml-0 pl-0 pr-0 pr-lg-2">
                  <input
                    class="w-100"
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                    style={{ backgroundColor: "#212528", color: "white" }}
                  />
                </div>
                <div class="col-lg-6 mb-2 mr-0 pr-0 ml-0 pl-0">
                  <input
                    class="w-100"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    style={{ backgroundColor: "#212528", color: "white" }}
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  class="col-lg-12 pt-20 "
                  placeholder="Write your message..."
                  style={{ backgroundColor: "#212528", color: "white" }}
                ></textarea>
              </div>
              <div class="form-group row   ">
                <div class="col-md-12 d-flex align-items-center">
                  <input
                    type="submit"
                    class="btn btn-outline-pill btn-custom-light mr-3"
                    value="Send Message"
                  />
                  <span class="submitting"></span>
                </div>
              </div>
            </form>
            <div id="form-message-warning" class="mt-4"></div>
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>
          </div>

          <div class="col-md-4">
            <SlideContent>
              <div class="contact-info-v1">
                <div class=" d-block">
                  <span
                    class="d-block contact-info-label"
                    style={{ color: "inherit" }}
                  >
                    Email
                  </span>
                  <a
                    href="#"
                    class="contact-info-val"
                    style={{ color: "inherit" }}
                  >
                    info@yourdomain.com
                  </a>
                </div>
                <div class="d-block">
                  <span
                    class="d-block contact-info-label"
                    style={{ color: "inherit" }}
                  >
                    Phone
                  </span>
                  <a
                    href="#"
                    class="contact-info-val"
                    style={{ color: "inherit" }}
                  >
                    +12 345 6789 012
                  </a>
                </div>
                <div class=" d-block">
                  <span
                    class="d-block contact-info-label"
                    style={{ color: "inherit" }}
                  >
                    Address
                  </span>
                  <address
                    class="contact-info-val"
                    style={{ color: "inherit" }}
                  >
                    273 South Riverview Rd. <br /> New York, NY 10011
                  </address>
                </div>
              </div>
            </SlideContent>
          </div>
        </div>
      </div>
    </div>
  );
}
