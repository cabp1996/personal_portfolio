import React, { useState } from "react";
import emailjs from 'emailjs-com';
import validator from 'validator';
import { useForm } from "../hooks/useForm";

const imageOverlay = process.env.PUBLIC_URL + "/assets/img/earth.jpg";

export const Contact = () => {

  const [successEmail, setSuccessEmail] = useState(false);
  const [sendEmailError, setSendEmailError] = useState(null);

  const [{ name, email, subject, message },
    {
      nameError,
      emailError,
      subjectError,
      messageError
    },
    handleInputChange, reset,
    setErrors] = useForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    }, {
      nameError: null,
      emailError: null,
      subjectError: null,
      messageError: null
    });


  const sendEmail = (e) => {
    e.preventDefault();
    let errors = {};

    if (name.length == 0) {
      errors['nameError'] = "Complete the field";
    }

    if (!validator.isEmail(email)) {
      errors['emailError'] = "Complete the field with a valid email";
    }

    if (subject.length == 0) {
      errors['subjectError'] = "Complete the field";
    }

    if (message.length == 0) {
      errors['messageError'] = "Complete the field";
    }

    if (Object.values(errors).length > 0) {
      setErrors(errors);
      return;
    }
    emailjs.sendForm('service_4ae4ysa', 'template_ct8m1eu', e.target, 'user_p7tdXWYCbfAlH1TgyDnzH')
      .then((result) => {
        setSuccessEmail(true);
      }, (error) => {
        setSendEmailError(error.text);
      });

    setErrors({});
    reset();
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        onSubmit={sendEmail}
                        className="contactForm"
                      >
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                className="form-control"
                                id="name"
                                placeholder="Your Name"

                              />
                              {
                                nameError && (<div className="validation">
                                  {nameError}
                                </div>)
                              }

                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                id="email"
                                placeholder="Your Email"

                              />
                              {
                                emailError && (<div className="validation">
                                  {emailError}
                                </div>)
                              }
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                value={subject}
                                onChange={handleInputChange}
                                id="subject"
                                placeholder="Subject"

                              />
                              {
                                subjectError && (<div className="validation">
                                  {subjectError}
                                </div>)
                              }
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              {
                                messageError && (<div className="validation">
                                  {messageError}
                                </div>)
                              }
                            </div>
                          </div>
                          <div className="col-md-12">
                            {
                              successEmail && <div className="text-success">
                                Your message has been sent. Thank you!
                        </div>
                            }

                            {
                              sendEmailError && <div className="text-danger">
                                There has been a problem sending your email, please try again.
                        </div>
                            }
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              <i className="ion-android-send"></i> &nbsp;
                                Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Contact me</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        If you'd like to contact me, please fill the form and send me an email. 
                        <br/>
                        Here there some extra information about me:
                        
                      </p>
                      <ul class="list-ico">
                        <li><span class="ion-ios-location"></span> Quito, Ecuador</li>
                        {/* <li><span class="ion-ios-telephone"></span> celular</li>
                              <li><span class="ion-email"></span> email</li> */}
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>


                        <li>
                          <a
                            href="https://www.linkedin.com/in/cesar-andres-balcazar-pazmino-39b390205"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://github.com/cabp1996"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}


