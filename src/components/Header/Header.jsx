import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header({ isBlack }) {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      if(isMenuOpen){
        const tl = gsap.timeline();
        tl.fromTo(
          ".menu-li *",
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y:0,
            stagger: 0.15,
            duration: .8,
            ease: "power3.out"
          }
        );
      }
    },
    { dependencies: [isMenuOpen], scope: container }
  ); 

  const navbar = [
    {
      id: 1,
      nav: "home",
      navLink: "/"
    },
    {
      id: 2,
      nav: "services",
      navLink: "/services"
    },
    {
      id: 3,
      nav: "projects",
      navLink: "/project"
    },
    {
      id: 4,
      nav: "about",
      navLink: "/about"
    },
    {
      id: 5,
      nav: "news",
      navLink: "/news"
    },
    {
      id: 6,
      nav: "contact",
      navLink: "/contact"
    }
  ]
  
  function toggleMenu() {
    const humburger = document.querySelector(".humburger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    humburger.classList.toggle("change");
    body.classList.toggle("dark-bg");

    setIsMenuOpen((prev) => !prev)

    if (!isMenuOpen) {
      menu.classList.remove("menu-none");
    } else {
      menu.classList.add("menu-none");
    }
  }

  return (
    <>
      <header className={`header ${isBlack ? "header-black" : ""}`}>
        <div className="container">
          <div className="d-flex justify-between align-center">
            <div className="navbar w-45 d-flex justify-between align-center">
              <ul className="d-flex align-center text-uppercase">
                <li className="mr-6">
                  <Link to="/project">projects</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </div>
            <div className="w-55 d-flex justify-between align-center">
              <h1 className="logo">
                <Link to="/">
                  <strong className="design">design</strong>
                  <span className="bureau">bureau</span>
                </Link>
              </h1>
              <div className="humburger" onClick={toggleMenu}>
                <span className="bar bar01"></span>
                <span className="bar bar02"></span>
              </div>
            </div>
          </div>
          <div className="menu menu-none mt-20" ref={container}>
            <ul className="menu-list d-flex flex-column text-uppercase text-white fs-28">
              {navbar.map((item) => (
                 <li className="menu-li mb-2" key={item.id}>
                <Link to={item.navLink} onClick={toggleMenu}>
                  {item.nav}
                </Link>
              </li>
              ))}
            </ul>
            <div className="menu-footer"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
