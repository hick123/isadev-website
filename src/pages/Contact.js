import React from "react";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="contact">
      <Header
        h1="Get In"
        span="Touch"
        p="Will get back to you as soon as possible"
      />
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
