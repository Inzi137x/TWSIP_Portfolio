import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pun1vku",
        "template_t9hd61s",
        form.current,
        "GhgckqgsqIWq_QS4o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="contact">
      <h3 id="section-title">&lt; ContactMe / &gt;</h3>
      <h2>Drop me a message, and I'll reach out to you soon.</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input id="form-submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
