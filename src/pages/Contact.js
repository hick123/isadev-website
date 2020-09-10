import React from "react";
import Header from "../components/Header";
import twitter from "../assets/img/logo-twitter.svg";
import phone from "../assets/img/phone-handset-line.svg";
import email from "../assets/img/email (1).svg";

function Contact() {
  return (
    <div className="contact">
      <Header
        h1="Get In"
        span="Touch"
        p="Will get back to you as soon as possible"
      />
      <div className="contact-details">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-details-content">
              <img src={phone} alt="" />
              <h4>Call Me</h4>
              <p>+254 718445568</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-details-content">
              <img src={twitter} alt="" />
              <h4>Twitter</h4>
              <p>@ikorir</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-details-content">
              <img src={email} alt="" />
              <h4>Email Me</h4>
              <p>korir.isaiah@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-text">
        <p>
          <small>
            Or Please the following form and I will get back to you <br />
            as soon as possible
          </small>
        </p>
      </div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name*"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Your Email*"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Subject*"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text-area"
            className="form-control"
            id="message"
            placeholder="Your Message*"
          />
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>{" "}
    </div>
  );
}

export default Contact;
