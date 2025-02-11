import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: ""
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState(undefined)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  };

  const [isOpen, setIsOpen] = useState(true);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toggle()
    console.log(name, email, message);
    /* {replace below with your own Service ID, Template ID and Public Key from your EmailJS account }*/
    emailjs.sendForm("service_vsi7plb", "template_b46f6w2", e.target, "JqkTKyCBjWf_Jab6R")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setStatus({ type: 'success' });
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: 'error', error });
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
            <div className="col-md-6">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <div className="row">
                {isOpen &&
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                            onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        required
                        onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
                }
                </div>
              {status?.type === 'success' && <h3 className="section-title fa fa-flag-o">     Message sent</h3>}
              {status?.type === 'error' && (
                  <h3 className="section-title fa fa-frown-o">    Something is not working!</h3>
              )}
              </div>
            </div>
            <div id="row" className="contact-item">
              <div className="col-md-4 col-md-offset-1 contact-info">
                    <h2>Contact</h2>
                    <div className="contact-item">
                      {props.data ? props.data.address.map((item, i) => (
                      <p key={i}>
                        <span>
                          <i className="fa fa-map-marker"></i> Address
                        </span>
                        {item ? item : "loading"}
                      </p>
                      ))
                      : "loading" }
                      <p>
                        <span>
                          <i className="fa fa-envelope-o"></i> Email
                        </span>
                        {props.data ? props.data.email : "loading"}
                      </p>
                      <p>
                        <span>
                          <i className="fa fa-phone"></i> Phone
                        </span>
                        {props.data ? props.data.phone : "loading"}
                      </p>
                    </div>
                  </div>
                </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social contact-item">
                  <ul>
                    <li>
                      <a href={props.data ? props.data.github : () => openInNewTab()}>
                        <i className="fa fa-github-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.linkedin : () => openInNewTab()}>
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Kernel Domain
          </p>
        </div>
      </div>
    </div>
  );
};
