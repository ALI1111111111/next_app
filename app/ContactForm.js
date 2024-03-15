'use client'



import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace with your form submission logic (e.g., sending data to an API)
      console.log('Form submitted:', { name, email, phone, message });
      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(true);
    }
  };

  return (
    <div>


    <div className="form5 cid-u6ScmHpugc" id="contact-form-3-u6ScmHpugc">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head mb-5">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Get in Touch Now</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
            <form onSubmit={handleSubmit} className="mbr-form form-with-styler" data-form-title="Form Name">
              <div className="row">
                {formSubmitted && (
                  <div className="alert alert-success col-12">Thanks for filling out the form!</div>
                )}
                {submitError && (
                  <div className="alert alert-danger col-12">Oops...! some problem!</div>
                )}
              </div>
              <div className="dragArea row">
                <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    data-form-field="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name-form02-0"
                    />
                </div>
                <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    data-form-field="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-form02-0"
                    />
                </div>
                <div className="col-12 form-group mb-3" data-for="url">
                  <input
                    type="url"
                    name="url"
                    placeholder="Phone"
                    data-form-field="url"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="url-form5-0"
                    />
                </div>
                <div className="col-12 form-group mb-3" data-for="textarea">
                  <textarea
                    name="textarea"
                    placeholder="Message"
                    data-form-field="textarea"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="textarea-form02-0"
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                  <button type="submit" className="btn btn-primary display-7">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
                    </div>
                    <section className="contacts03 cid-u6ScmHpZu6" id="contacts-11-u6ScmHpZu6">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="col-12 col-md-12">
                            <h5 className="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2">
                              <strong>Contact Us</strong>
                            </h5>
                            <p className="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7">
                              Phone: <a href="tel:123-456-7890">123-456-7890</a><br />
                              Email: <a href="mailto:info@healthwellnessblog.com">info@healthwellnessblog.com</a><br />
                              Address: Rawalpindi Pakistan<br />
                              Working Hours: Mon-Fri: 9am-5pm
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-8 side-features">
                          <div className="google-map">
                            <iframe
                              frameBorder="0"
                              style={{ border: 0 }}
                              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Rawalpindi%20Pakistan"
                              allowFullScreen
                              ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                              </div>
      );
};