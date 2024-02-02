import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef(); //{current: undefined}
  const [emailSent, setEmailSent] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_llyppp1",
        "template_onq97j8",
        form.current,
        "c4F8shpbg4QeOBCU6",
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent((prevEmailSent) => !prevEmailSent);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to send me an email if you would like to work together or
          just to say hi! I'll get back to you ASAP!
        </p>
      </div>

      {emailSent ? (
        <p className="sub-title">Email Sent!</p>
      ) : (
        <form
          className="contact-form-container"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="container">
            <label htmlFor="first-name" className="contact-label">
              <span className="text-md">Name</span>
              <input
                type="text"
                className="contact-input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>

            <label htmlFor="email" className="contact-label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact-input text-md"
                name="email"
                id="email"
                required
              />
            </label>
          </div>

          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              name="message"
              id="message"
              rows={8}
              placeholder="Send a message!"
            />
          </label>

          <div>
            <button className="btn btn-primary contact-form-btn">
              Send Message
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
