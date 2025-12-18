import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import throttle from "lodash.throttle";

const SVG_SIZE = 60;
const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ScrollToTopBtn() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeOffset = CIRCUMFERENCE - (CIRCUMFERENCE * scrollPercent) / 100;

  return (
    <div
      className={`scroll-progress ${scrollPercent > 5 ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg className="progress-ring" width="60" height="60">
        <circle
          className="progress-ring__background"
          cx={SVG_SIZE/2}
          cy={SVG_SIZE/2}
          r={RADIUS}
        />
        <circle
          className="progress-ring__circle"
          cx="30"
          cy="30"
          r={RADIUS}
          style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: strokeOffset }}
        />
      </svg>
      <ArrowUp className="arrow-icon" size={20} />
    </div>
  );
}

export default ScrollToTopBtn;
