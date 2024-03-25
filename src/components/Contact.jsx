import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AppearFromDown, SlideContent } from "./Components";
import * as Constants from "../Constants";
import { Spinner, Row } from "react-bootstrap";
import { useState } from "react";

// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [emailResponse, setEmailResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameBorderColor, setNameBorderColor] = useState("transparent");
  const [emailBorderColor, setEmailBorderColor] = useState("transparent");
  const [messageBorderColor, setMessageBorderColor] = useState("transparent");
  const handleEmail = (value) => {
    setIsValidEmail(Constants.EmailRegex.test(value));
    value ? setIsEmail(true) : setIsEmail(false);
    setEmail(value);
  };

  useEffect(() => {
    // Set a timeout to hide the email response after 5 seconds (5000 milliseconds)
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    name ? setNameBorderColor("transparent") : setNameBorderColor("red");
    email ? setEmailBorderColor("transparent") : setEmailBorderColor("red");
    message
      ? setMessageBorderColor("transparent")
      : setMessageBorderColor("red");
    if (!name || !email || !message) return;
    setIsLoading(true);

    console.log("before" + isLoading);

    emailjs
      .sendForm("service_z3kzueb", "template_wqpx3rk", form.current, {
        publicKey: "h1ABp3-Ej7heywhkv",
      })
      .then(
        (result) => {
          setEmailResponse(
            <span
              style={{
                color: "#617559",
              }}
            >
              Message sent successfully
            </span>
          );
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          setEmailResponse(
            <span style={{ color: "#617559" }}>
              Cannot send message at the moment. Please contact{" "}
              <strong style={{ color: "red" }}>ninja19.dev@gmail.com</strong>
            </span>
          );
          console.log(error.text);
          setIsLoading(false);
        }
      );
    setIsLoading(false);
    console.log("after" + isLoading);

    const timeoutId = setTimeout(() => {
      setEmailResponse(null); // Hide the email response by setting it to null
    }, 5000);

    // Cleanup function to clear the timeout when the component unmounts or emailResponse changes
    return () => clearTimeout(timeoutId);
  };

  return (
    <div class="unslate_co--section">
      <div className="container" id="contact-section">
        <div class="section-heading-wrap text-center mb-5">
          <SlideContent>
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
          </SlideContent>
        </div>

        <div class="row mt-5 pt-5">
          <div className="col-md-6 text-center text-lg-start">
            {!isLoading ? (
              <AppearFromDown width="100%">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row ">
                    <div className="col-lg-6 mb-2">
                      <input
                        className="w-100"
                        placeholder="Name"
                        type="text"
                        name="user_name"
                        onChange={(event) => setName(event.target.value)}
                        style={{
                          borderColor: nameBorderColor,
                          borderRadius: 5,
                        }}
                      />
                    </div>
                    <div className="col-lg-6 mb-2">
                      <input
                        className="w-100"
                        placeholder="Email"
                        type="email"
                        name="user_email"
                        onChange={(event) => handleEmail(event.target.value)}
                        style={{
                          borderColor: emailBorderColor,
                          borderRadius: 5,
                        }}
                      />
                      {console.log("isValid" + isValidEmail)}
                      {!isValidEmail && isEmail && (
                        <div style={{ color: "red" }}>Email is invalid</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 mb-2">
                    <textarea
                      className="w-100 "
                      cols="30"
                      rows="7"
                      placeholder="Message"
                      name="message"
                      onChange={(event) => setMessage(event.target.value)}
                      style={{
                        borderColor: messageBorderColor,
                        borderRadius: 5,
                      }}
                    />
                  </div>
                  <AppearFromDown delay={0.2}>
                    <input
                      class="btn btn-outline-pill btn-custom-light mb-4"
                      type="submit"
                      value="Send Email"
                    />
                  </AppearFromDown>
                </form>
                <AppearFromDown>
                  <div className="mb-4">
                    {emailResponse && (
                      <div
                        style={{
                          backgroundColor: "#DFF2D6",
                          borderRadius: 5,
                          borderColor: "#617559",
                          borderWidth: 5,
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        {emailResponse}
                      </div>
                    )}
                  </div>
                </AppearFromDown>
              </AppearFromDown>
            ) : (
              <Row className="justify-content-center mt-5">
                <Spinner
                  animation="border"
                  variant="secondary"
                  className="spinner"
                />
              </Row>
            )}
          </div>
          <div class="col-md-4">
            <SlideContent>
              <div class="contact-info-v1">
                <div class="d-block">
                  <span
                    class="d-block contact-info-label "
                    style={{ color: "inherit" }}
                  >
                    Email
                  </span>
                  <a
                    href="#"
                    class="contact-info-val"
                    style={{ color: "inherit" }}
                  >
                    {Constants.SupportEmail}
                  </a>
                </div>
                <div class="d-block">
                  <span
                    class="d-block contact-info-label mt-sm-4 mt-md-4"
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
};

export default Contact;

// Styles
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
