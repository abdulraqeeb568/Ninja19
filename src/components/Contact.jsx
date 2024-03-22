import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SlideContent } from "./Components";

// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z3kzueb", "template_wqpx3rk", form.current, {
        publicKey: "h1ABp3-Ej7heywhkv",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="row ">
      <div className="col-md-6">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row ">
            <div className="col-lg-6">
              <input
                className="w-100"
                placeholder="Name"
                type="text"
                name="user_name"
              />
            </div>
            <dov className="col-lg-6">
              <input
                className="w-100"
                placeholder="Email"
                type="email"
                name="user_email"
              />
            </dov>
          </div>

          <div className="col-lg-12 ">
            <textarea className="w-100" placeholder="Message" name="message" />
          </div>
          <input type="submit" value="Send" />
        </form>
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
              <a href="#" class="contact-info-val" style={{ color: "inherit" }}>
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
              <a href="#" class="contact-info-val" style={{ color: "inherit" }}>
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
              <address class="contact-info-val" style={{ color: "inherit" }}>
                273 South Riverview Rd. <br /> New York, NY 10011
              </address>
            </div>
          </div>
        </SlideContent>
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
