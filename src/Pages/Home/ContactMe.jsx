import React from "react";

export default function ContactMe() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>

      <form className="contact-form-container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>

          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
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
            id="nessage"
            rows={8}
            placeholder="Send a message!"
          />
        </label>

        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
