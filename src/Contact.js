import React from "react";
import Headers1 from "./Headers1";
import "./Contact.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const Contact = () => {

  const whatsappNumber = "917200458763"; // Replace with your number
  const message = "Hello TerraNest, I would like to know more about your products.";

  return (
    <>
      <Headers1 />

      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-card">

          <div className="contact-item">
            <FaPhone className="icon" />
            <span>7200458763</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Chennai, Tamil Nadu</span>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="contact-item link"
          >
            <FaWhatsapp className="icon whatsapp" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Email */}
          <a
            href="mailto:terranest@gmail.com?subject=Product Inquiry&body=Hello TerraNest,"
            className="contact-item link"
          >
            <FaEnvelope className="icon email" />
            <span>Send Email</span>
          </a>

        </div>
      </div>
    </>
  );
};

export default Contact;