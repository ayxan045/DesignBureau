import React, { useState, useEffect, useRef } from "react";

function CountUp({ end = 0, duration = 2000, threshold = 0.5 }) {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const startedRef = useRef(false);
  const timerRef = useRef(null);
  const observerRef = useRef(null);

  const startCounting = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const steps = Math.max(1, end);
    const stepTime = Math.max(10, Math.floor(duration / steps));

    let current = 0;
    timerRef.current = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, stepTime);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (observerRef.current) {
        try {
          observerRef.current.disconnect();
        } catch (e) {
        }
        observerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      startCounting();
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          startCounting();
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      { threshold }
    );

    if (elRef.current) {
      observerRef.current.observe(elRef.current);
    } else {
      startCounting();
    }
  }, [end, duration, threshold]);

  return <span className="count-up" ref={elRef}>{count}+</span>;
}

export default CountUp;
