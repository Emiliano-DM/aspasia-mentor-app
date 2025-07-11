import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import '../styles/Contact.css';

const contactData = [
  {
    title: "Direcció",
    icon: <FaMapMarkerAlt size={32} style={{ color: "var(--background-light)" }}/>
    ,
    lines: [
      "C/ Doctor Santponç 60-66",
      "08030 Barcelona",
      "Horari: 9:00 h. a 21:00h. De dilluns a divendres"
    ]
  },
  {
    title: "Telèfon",
    icon: <BsTelephoneFill size={32} style={{ color: "var(--background-light)" }} />,
    lines: [
      <a href="tel:932452922" aria-label="Truca al 932 452 922">932 452 922</a>
    ]
  },
  {
    title: "Contacte",
    icon: <MdEmail size={32} style={{ color: "var(--background-light)" }} />,
    lines: [
      <a href="mailto:formacio@grupoaspasia.com" aria-label="Envia un correu a formacio@grupoaspasia.com">formacio@grupoaspasia.com</a>,
      <a href="https://grupoaspasia.com" target="_blank" rel="noopener noreferrer">grupoaspasia.com</a>
    ]
  }
];

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contacte</h1>

      <div className="grid-container">
        {contactData.map((card, index) => (
          <div className="contact-card" key={index}>
            <div className="icon-circle">{card.icon}</div>
            <h2>{card.title}</h2>
            {card.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="map-section">
        <h2>Ubicació al mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5982.700245750569!2d2.1920820000000005!3d41.431624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcda8c1b02ed%3A0x9e2b3080389c0cf4!2sCarrer%20Dr.%20Santpon%C3%A7%2C%2060%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1sen!2ses!4v1752230561385!5m2!1sen!2ses"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicació a Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
