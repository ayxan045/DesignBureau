import aboutImg from "../../assets/images/aboutImg.png";
import { MdDownload } from "react-icons/md";
import CountUp from "../../components/CountUp/CountUp";
import clientImg from "../../assets/images/aboutImg01.jpg";
import kapital from "../../assets/images/kapital.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutDesc from "../../components/AboutDesc/AboutDesc";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutDesc = [
    {
      id: 1,
      order: 1,
      title: "Who we are?",
      desc: "Design Bureau is an innovative architectural company that was founded in June 2021. The objective was to evaluate the potential opportunities for establishing a specialized and independent internal unit that would cater to the increasing demand for high-quality design services in the external market.",
    },
    {
      id: 2,
      order: 2,
      title: "Creative vision",
      desc: "Since its inception, Design Bureau has been committed to providing creative and sustainable architectural solutions that meet the needs of its clients. The company’s team of highly skilled and experienced architects works closely with clients to understand their specific requirements and to deliver exceptional designs that meet their expectations.",
    },
  ];

  // const topDesc = aboutDesc.filter(item => item.section === "top");
  // const bottomDesc = aboutDesc.filter(item => item.section === "bottom");

  const clients = [
    {
      id: 1,
      image: kapital,
    },
    {
      id: 2,
      image: kapital,
    },
    {
      id: 3,
      image: kapital,
    },
    {
      id: 4,
      image: kapital,
    },
    {
      id: 5,
      image: kapital,
    },
    {
      id: 6,
      image: kapital,
    },
    {
      id: 7,
      image: kapital,
    },
    {
      id: 8,
      image: kapital,
    },
    {
      id: 9,
      image: kapital,
    },
    {
      id: 10,
      image: kapital,
    },
    {
      id: 11,
      image: kapital,
    },
    {
      id: 12,
      image: kapital,
    },
  ];

  const clientRef = useRef();

  useGSAP(
    () => {
      gsap.from(".client", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: clientRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: clientRef }
  );

  return (
    <section className="about">
      <div className="about-header">
        <div className="about-img">
          <img className="img-fluid" src={aboutImg} alt="About us" />
          <div className="container">
            <div className="about-content">
              <h2 className="about-title">About us</h2>
              <button
                className="scroll-down"
                onClick={() =>
                  document
                    .getElementById("about-description")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Scroll Down <MdDownload className="down-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-description" id="about-description">
        <div className="container">
          {<AboutDesc {...aboutDesc.find((item) => item.order === 1)} />}
          <div className="stats d-flex justify-between">
            <div className="w-50">
              <h4>Highlights</h4>
            </div>
            <div className="stats-grid w-50">
              <div className="stat-item">
                <p>Years</p>
                <CountUp end={4} />
              </div>
              <div className="stat-item">
                <p>Projects</p>
                <CountUp end={45} />
              </div>
              <div className="stat-item">
                <p>Type of works</p>
                <CountUp end={10} />
              </div>
              <div className="stat-item">
                <p>Team members</p>
                <CountUp end={56} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-client ">
        <div className="container">
          <div
            className="client-img h-100 w-100"
            style={{ backgroundImage: `url(${clientImg})` }}
          >
            <div className="clients" ref={clientRef}>
              <h4 className="clients-title">Working with leading clients</h4>
              <div className="clients-grid">
                {clients.map((item) => (
                  <div className="client" key={item.id}>
                    <img className="img-fluid" src={item.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-description mt-10" id="about-description">
        <div className="container">
          {<AboutDesc {...aboutDesc.find((item) => item.order === 2)} />}
        </div>
      </div>
      <div className="featured-projects">
        <div className="container">
          <div className="d-flex justify-between">
            <h4>Featured projects</h4>
            <p className="d-flex flex-column">
              <span>Request more information</span>{" "}
              <span>info@designbureau.az</span>
            </p>
          </div>
          <div className="grid-2 gap-15 mt-10">
            <div className=" h-50" style={{backgroundColor: "#ccc"}}></div>
            <div className=" h-50" style={{backgroundColor: "#ccc"}}></div>
            <div className=" h-50" style={{backgroundColor: "#ccc"}}></div>
            <div className=" h-50" style={{backgroundColor: "#ccc"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
