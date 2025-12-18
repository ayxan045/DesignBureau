import React from "react";
import contactImg from "../../assets/images/projectImg02.png";
import { Link } from "react-router-dom";

function Contact() {

     const contactSections = [
    {
      title: "Address",
      left: "Azerbaijan, Baku, Gumush Plaza, Hasan Seyidbayli 122",
      right: "Direction",
    },
    {
      title: "Social",
      left: [
        { label: "Instagram", link: "https://www.instagram.com/", external: true },
        { label: "LinkedIn", link: "https://www.linkedin.com/", external: true },
        { label: "Facebook", link: "https://www.facebook.com/", external: true },
      ],
    },
    {
      title: "Bureau",
      left: [
        { label: "Phone: +994 50 123 45 67", link: "tel:+994501234567" },
        { label: "info@designbureau.az", link: "mailto:info@designbureau.az" },
      ],
      right: "Monday–Friday: 9:00–18:00",
    },
    {
      title: "Career",
      left: [
        {
          label: "info@designbureau.az",
          link: "mailto:info@designbureau.az?subject=Career%20Opportunities",
        },
      ],
      right: "Direction",
    },
  ];

  return (
    <section className="contact">
      <div
        className="contact-img"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="container">
          <h3 className="contact-title">Get in touch</h3>
          <div className="contact-boxes"></div>
        </div>
      </div>
      <div className="container">
        {/* <div className="contact-boxes d-flex justify-between my-20 pt-6">
          <div className="contact-box w-50">
            <h4>Address</h4>
          </div>
          <div className="contact-box w-50 d-flex">
            <div className="contact-info w-50 mr-6">
              <h4>Azerbaijan, Baku, Gumush Plaza, Hasan Seyidbayli 122</h4>
            </div>
            <div className="contact-info w-50 ml-6">
              <h4>Direction</h4>
            </div>
          </div>
        </div>
        <div className="contact-boxes d-flex justify-between mt-20 pt-6">
          <div className="contact-box w-50">
            <h4>Social</h4>
          </div>
          <div className="contact-box w-50 d-flex">
            <div className="contact-info w-50 mr-6">
              <Link to="#">Instagram</Link>
              <br />
              <Link to="#">LinkedIn</Link>
              <br />
              <Link to="#">Facebook</Link>
            </div>
          </div>
        </div>
        <div className="contact-boxes d-flex justify-between mt-20 pt-6">
          <div className="contact-box w-50">
            <h4>Bureau</h4>
          </div>
          <div className="contact-box w-50 d-flex">
            <div className="contact-info w-50 mr-6">
              <Link to="#">Phone: +994 50 123 45 67</Link>
              <br />
              <Link to="#">info@designbureau.az</Link>
            </div>
            <div className="contact-info w-50 ml-6">
              <h4>Monday-Friday: 9:00-18:00</h4>
            </div>
          </div>
        </div>
        <div className="contact-boxes d-flex justify-between mt-20 pt-6">
          <div className="contact-box w-50">
            <h4>Career</h4>
          </div>
          <div className="contact-box w-50 d-flex">
            <div className="contact-info w-50 mr-6">
              <Link to="#">info@designbureau.az</Link>
            </div>
            <div className="contact-info w-50 ml-6">
              <h4>Direction</h4>
            </div>
          </div>
        </div> */}

        {contactSections.map((section, index) => (
          <div
            key={index}
            className="contact-boxes d-flex justify-between my-20 pt-6"
          >
            <div className="contact-box w-50">
                <h4>{section.title}</h4>
            </div>
            <div className="contact-box w-50 d-flex">
              <div className="contact-info w-50 mr-6">
                {Array.isArray(section.left) ? (
                  section.left.map((item, i) => (
                    <div key={i}>
                        <a  href={item.link} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
                          {item.label}
                        </a>
                        <br />
                    </div>
                  ))
                ) : (       
                    <h4>{section.left}</h4>
                )}
              </div>
              {section.right && (   
                <div className="contact-info w-50 ml-6">
                  <h4>{section.right}</h4>
                </div>
                )}
            </div>
            </div>
        ))}

      </div>
    </section>
  );
}

export default Contact;
