import SocialLinks from "./social.component";
import { useState, useEffect } from "react";

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  //   let _form = { ...form };
  //   setForm(_form);
  // });

  const handleChange = (e, field) => {
    let _form = { ...form };
    _form[field] = e.target.value;
    setForm(_form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending....");
    const data = form;
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      })
      .catch((err) => console.log("error in fetch ", err))
      .finally(() => {
        console.log("finally");
        setName("");
        setEmail("");
        setMessage("");
        setSubmit(false);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">Want to contact me?</p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {""}
              <span className="mail">jatin6972@gmail.com</span>:
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#">
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={(e) => handleChange(e, "name")}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e, "email")}
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            onChange={(e) => handleChange(e, "message")}
          />
          <input
            className="button"
            id="submit"
            value="Submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
