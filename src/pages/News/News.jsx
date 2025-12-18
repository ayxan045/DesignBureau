import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import newsImg from "../../assets/images/news.png";
import newsBg from "../../assets/images/newsBg.jpg";
import newsSlide1 from "../../assets/images/newsSlide01.png";
import { Link } from "react-router-dom";

function News() {
  const allNews = [
    {
      id: 1,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 2,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 3,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 4,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 5,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 6,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 7,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 8,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 9,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
    {
      id: 10,
      image: newsImg,
      title: "Recently, Design Bureau LLC was rewarded the IRA 2022",
      region: "Azerbaijan",
      year: "2025",
      newsDetailsLink: "/newsdetails",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  };

  const newsSlides = [
    {
      id: 1,
      img: newsSlide1,
      title: "Design Bureau wins IRA 2023",
      year: "2023",
      link: "/newsdetails",
    },
    {
      id: 2,
      img: newsImg,
      title: "New office opening in Baku",
      year: "2024",
      link: "#",
    },
    {
      id: 3,
      img: newsSlide1,
      title: "Concept development milestone",
      year: "2024",
      link: "#",
    },
    {
      id: 4,
      img: newsImg,
      title: "We join international expo",
      year: "2025",
      link: "#",
    },
    {
      id: 5,
      img: newsSlide1,
      title: "Design Bureau wins IRA 2023",
      year: "2023",
      link: "#",
    },
    {
      id: 6,
      img: newsImg,
      title: "New office opening in Baku",
      year: "2024",
      link: "#",
    },
    {
      id: 7,
      img: newsSlide1,
      title: "Concept development milestone",
      year: "2024",
      link: "#",
    },
    {
      id: 8,
      img: newsImg,
      title: "We join international expo",
      year: "2025",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);
  const slidesToShow = 2.42;
  const nextSlide = () => {
    if (current < newsSlides.length - slidesToShow) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="news">
      <div className="container">
        <h2
          className="news-title mt-30"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          News
        </h2>

        <div className="grid-2 row-gap-40 col-gap-20">
          {allNews.slice(0, visibleCount).map((item) => (
            <div
              className="news-box"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="news-item">
                <img
                  className="news-img d-block img-fluid"
                  src={item.image}
                  alt=""
                />
              </div>
              <Link
                className="news-detail d-inline_block mt-3"
                to={item.newsDetailsLink}
              >
                {item.title}
              </Link>
              <div className="d-flex mt-2">
                <span className="mr-6">{item.region}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allNews.length && (
          <div className="d-flex justify-center">
            <button className="load-more-btn mt-30" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
        <section
          className="news-slider-bg"
          style={{ backgroundImage: `url(${newsBg})` }}
        >
          <div className="container">
            <div className="news-slider-box">
              <h4 className="news-slider-title">Latest insights</h4>
              <div className="news-slider">
                <div
                  className="news-slider-track"
                  style={{
                    transform: `translateX(-${
                      (100 / slidesToShow) * current
                    }%)`,
                  }}
                >
                  {newsSlides.map((slide) => (
                    <div className="news-slide" key={slide.id}>
                      <Link to={slide.link}>
                        <img src={slide.img} alt={slide.title} />
                        <div className="news-slide-info">
                          <h4>{slide.title}</h4>
                          <span>{slide.year}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <button
                  className={`news-prev ${current === 0 ? "disabled" : ""}`}
                  onClick={prevSlide}
                >
                  ‹
                </button>
                <button
                  className={`news-next ${
                    current >= newsSlides.length - slidesToShow
                      ? "disabled"
                      : ""
                  }`}
                  onClick={nextSlide}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default News;
