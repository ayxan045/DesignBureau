import { Link } from "react-router-dom";
import bgImage from "../../assets/images/projectImg04.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".home-content *",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.25,
          duration: 1,
        }
      );
      tl.fromTo(
        ".projects-item",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.25,
          duration: 1,
        }
      );
    },
    { scope: container }
  );

  const projects = [
    {
      id: 1,
      projectItem: "Work places",
    },
    {
      id: 2,
      projectItem: "Educational",
    },
    {
      id: 3,
      projectItem: "Hospitality",
    },
    {
      id: 4,
      projectItem: "Residential",
    },
  ];
  
  return (
    <>
      <section className="home" ref={container}>
        <img className="home-img img-fluid" src={bgImage} alt="Home image" />
        <div className="container">
          <div className="home-content">
            <h2 className="home-title text-white ">
              Leading architecture & design studio in Baku
            </h2>
            <Link to="/project" className="projects-btn text-uppercase">
              view projects
            </Link>
          </div>
          <div className="projects-group">
            <div className="d-flex justify-between align-center">
              {projects.map((item) => (
                 <div className="projects-item w-25" key={item.id}>
                <Link to="/project">{item.projectItem}</Link>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
