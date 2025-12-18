import React, { useState } from "react";
import projectImg01 from "../../assets/images/projectImg01.jpg";
import projectImg02 from "../../assets/images/projectImg02.png";
import projectImg03 from "../../assets/images/projectImg03.jpg";
import projectImg04 from "../../assets/images/projectImg04.jpg";
import { Link } from "react-router-dom";

function Project() {
  const [activeIndex, setActiveIndex] = useState(null);
  const projects = [
    {
      title: "Concept development",
      description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
      image: projectImg01
    },
    {
      title: "Design development",
      description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
      image: projectImg02
    },
    {
      title: "Design consultancy",
      description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
      image: projectImg03
    },
    {
      title: "Author control services",
      description: "We pride ourselves on offering a comprehensive range of design services that are tailored to meet the unique needs of our clients.",
      image: projectImg04
    }
  ];
 
  return (
    <>
      <section
        className="project-page"
        style={{ backgroundImage: `url(${ activeIndex !== null ? projects[activeIndex].image : projects[0].image})` }}
      >
        <div className="container d-flex h-100">
          {/* <div className="d-flex h-100"> */}

        {projects.map((project, index) => (
          <Link to="/projectList"
            key={index}
            className={`project-section d-flex justify-center align-end pb-6 pl-4 ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="project-text-box">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">
                {project.description.length > 100
                  ? project.description.substring(0, 100) + "..."
                  : project.description}
              </p>
            </div>
          </Link>
        ))}
          {/* </div> */}
        </div>
        <div className="overlay"></div>
      </section>
    </>
  );
}

export default Project;
