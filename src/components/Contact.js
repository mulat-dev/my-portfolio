import React from "react";
import "../Styles/Contact.css";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        {/* Left: Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xqknqzyw" // 👈 replace this with your Formspree endpoint
          method="POST"
        >
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your email" required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Your message..." required />

          <button type="submit" className="btn-gradient">
            Send Message
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <div className="icon bg-gradient">
              <FaMapMarkerAlt />
            </div>
            <div>
              <strong>Location</strong>
              <p>Mekelle, Tigray, Ethiopia</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon bg-gradient">
              <FaEnvelope />
            </div>
            <div>
              <strong>Email</strong>
              <p>mulllertesfay101@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon bg-gradient">
              <FaPhone />
            </div>
            <div>
              <strong>Phone</strong>
              <p>+251 930699596</p>
              <p>+251 704033436</p>
            </div>
          </div>

          <h4 className="follow-label">Contact Me</h4>
          <div className="social-icons">
            <a href="https://t.me/j_amahus" target="_blank" rel="noopener noreferrer"><SiTelegram /></a>
            <a href="https://web.facebook.com/wedi.ngas.202" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/mulat_tesfay1" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/mullertesfay101" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
