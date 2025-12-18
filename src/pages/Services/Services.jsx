import React from "react";
import conceptImg from "../../assets/images/development-decision.png";

function Services() {
  const servicesData = [
    {
      number: "01",
      title: "Concept development",
      img: conceptImg,
      items: [
         "We pride ourselves on offering a comprehensive range of design services",
        "We pride ourselves on offering a comprehensive range of design services",
        "Preconcept and development",
        "Preconcept and development",
        "Visualisation",
      ],
    },
    {
      number: "02",
      title: "Concept development",
      img: conceptImg,
      items: [
        "Lighting and furniture planning",
        "Material selection",
        "Space optimization",
        "3D visualisation",
      ],
    },
    {
      number: "03",
      title: "Concept development",
      img: conceptImg,
      items: [ "Exterior concept design",
        "Outdoor furniture and lighting",
        "Planting layout",
        "Sustainability focus",],
    },
    {
      number: "04",
      title: "Concept development",
      img: conceptImg,
      items: ["Logo and brand system",
        "Typography and color palette",
        "Visual direction",
        "Print & digital materials",],
    },
  ];

  return (
    <section className="services pt-10 mt-20">
      <div className="container">
        <h3 className="services-title">Core services</h3>
        {servicesData.map((service, index) => {
          const mid = Math.ceil(service.items.length / 2);
          const leftItems = service.items.slice(0, mid);
          const rightItems = service.items.slice(mid);

          return (
            <div
              className="services-boxes py-5 d-flex justify-between"
              key={index}
            >
              <div className="services-box w-60 d-flex mb-10">
                <div className="services-txt w-100">
                  <div className="services-item d-flex align-center mb-5">
                    <h4 className="services-number pr-2 text-griy">{service.number}</h4>
                    <h4 className="services-subtitle">{service.title}</h4>
                  </div>
                  <div className="services-description d-flex justify-between">
                    <ul className="list-disc w-50 pr-6 ml-4">
                      {leftItems.map((item, i) => (
                        <li className="pb-2" key={i}>{item}</li>
                      ))}
                    </ul>
                    <ul className="list-disc w-50">
                      {rightItems.map((item, i) => (
                        <li className="pb-2" key={i}>{item}</li>  
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="services-img w-40">
                <img className="img-fluid" src={service.img} alt="concept" />
              </div>
            </div>
          );
        })}
  
      </div>
    </section>
  );
}

export default Services;
