import { useEffect, useRef } from "react";
import BackBtn from "../../components/BackBtn/BackBtn";
import newsDetailsImg from "../../assets/images/newsDetails.png";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function NewsDetails() {
  const textRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const splitChars = new SplitType(textRef.current, { types: "chars" });

    gsap.set(splitChars.chars, { opacity: 0 });

    gsap.to(splitChars.chars, {
      opacity: 1,
      stagger: 0.02, 
      ease: "none",
      duration: 0.1,
    });

    const splitLines = new SplitType(aboutRef.current, {types: "lines"});

    gsap.set(splitLines.lines, {opacity: 0, y: 30});

    gsap.to(splitLines.lines, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "none",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return()=> {
      splitChars.revert();
      splitLines.revert();
    };

  }, []);



  return (
    <section className="news-details">
      <div className="container">
        <div className="news-details__header d-flex justify-between align-center">
          <h3 className="news-details__title">
            Recently, Design Bureau LLC was rewarded the IRA 2022
          </h3>
          <BackBtn />
        </div>
        <div className="d-flex justify-between gap-40 mt-10">
          <div className="news-details__description w-25 d-flex flex-column justify-between">
            <h5 className="animate-me" ref={textRef}>
              <span>
                Recently, Design Bureau LLC, which operates in the field of
                design and architecture, was rewarded the IRA 2022 award, one of
                the most prestigious awards in the category of residential
                complex architecture.
              </span>
              <span className="mt-5">
                This award is given to professional companies operating in the
                field of architecture in many countries around the world.
              </span>
            </h5>
            <h6>
              <span>Azerbaijan</span>
              <span className="ml-4">2025</span>
            </h6>
          </div>
          <div className="news-details__box w-75 h-75">
            <img className="news-details__img img-fluid" src={newsDetailsImg} alt="News Detail" />
            <p className="news-details__about w-75 mt-4" ref={aboutRef}>
                Design Bureau was established in 2021, which contributes to the
                restoration and improvement of our territories liberated from
                occupation. The company operates as an architecture and design
                studio in Azerbaijan, and mainly performs interior and exterior
                design works for urban planning projects, residential buildings,
                hotels, agricultural facilities, industrial enterprises,
                educational institutions and various business facilities in
                different regions of Azerbaijan. During its activity, the studio
                has worked on many important projects such as “Gazakh Teachers’
                Seminary”, “Aghdam City Hotel”, “Aghdam Residential Complex” and
                “AFEZ HQ”. The award which proves the project’s quality that
                meets international standarts, was rewarded to Design Bureau for
                the “Aghdam Residential Complex” project, which was executed by
                a professional team. The mentioned project was designed in
                accordance with the “green city” concept, which has an important
                place in the Master Plan of Agdam city, and based on the
                principles of sustainable infrastructure. The project consists
                of six individual building blocks with commercial facilities at
                the entry level and residential apartments on the upper floors.
                The height and direction of the blocks are designed to allow
                maximum natural light into the apartments, taking into account
                the direction of the sun’s movement. In order to support the
                sustainable development of the city and promote the use of
                pedestrian pathways and bicycles as the main means of
                transportation, the project concept prioritized bicycle paths
                and large green areas that improve the quality of life. In
                addition, the underground parking is designed not to interfere
                with vegetation, which allows for proper maintenance of trees
                and plants. In the material palette of the facade, natural stone
                recycled in Agdam, stucco paint on insulation and
                environmentally friendly wood were used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsDetails;


