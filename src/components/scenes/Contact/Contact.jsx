import React from "react";
import styles from "./Contact.module.css";
import Footer from "../../layout/Footer/Footer";
import HeaderBar from "../../layout/HeaderBar/HeaderBar";
import Button from "../../layout/Button/Button";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <HeaderBar
        as="h1"
        title="Contact"
        subtitle="I'm always looking for exciting and challenging opportunities. Get in touch!"
        icon={<i className="fas fa-envelope" />}
        align="left"
        subtitleAlign="left"
      />

      <div>
        <form
          className={styles.form}
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/mpzkkdkq"
          method="POST"
          data-aos="fade-up"
        >
          <fieldset className={styles.inputs}>
            <label htmlFor="full-name" className={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="name"
              placeholder="First and Last Name goes here..."
              required
            />

            <label htmlFor="email-address" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              name="_replyto"
              placeholder="Please enter a valid e-mail address..."
              required
            />

            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message here..."
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="Contact Form Submission"
            />
          </fieldset>

          <Button type="submit" variant="highlight">
            Submit <i className="fas fa-external-link-square-alt" />
          </Button>
        </form>
      </div>

      <Footer name="Angaar Uriakhil" cvHref="/my-cv.pdf" />
    </section>
  );
}
