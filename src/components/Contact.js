import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
            setStatus("success");
          },
          (error) => {
            console.log(error.text);
            setStatus("error");
          }
        );

      let itms = document.querySelectorAll(".userinputs");
      for (let itm of itms) {
        itm.value = "";
      }
    } else {
      setStatus("empty");
    }
  };

  const validateForm = () => {
    const inputs = form.current.querySelectorAll(".userinputs");

    for (let input of inputs) {
      if (!input.value.trim()) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(null);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <div className="contact-form" id="contact">
      <h3 id="section-title">&lt; ContactMe / &gt;</h3>
      <h2>Drop me a message, and I'll reach out to you soon.</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          autoComplete="off"
          className="userinputs"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          autoComplete="off"
          className="userinputs"
        />
        <label>Message</label>
        <textarea name="message" autoComplete="off" className="userinputs" />
        <input id="form-submit-btn" type="submit" value="Send" />
      </form>

      {status === "success" && (
        <p className="success-message">Email sent successfully!</p>
      )}
      {status === "error" && (
        <p className="error-message">Email not sent. Please try again.</p>
      )}
      {status === "empty" && (
        <p className="error-message">Please fill in all the fields.</p>
      )}
    </div>
  );
}
