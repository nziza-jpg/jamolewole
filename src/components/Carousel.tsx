import { useState, useEffect } from "react";
import "../styles/Carousel.css";

import Us1 from "../assets/Us1.jpeg";
import Us2 from "../assets/Us2.jpeg";
import Us3 from "../assets/Us3.jpeg";
import Us4 from "../assets/Us4.jpeg";
import Us5 from "../assets/Us5.jpeg";
import Us6 from "../assets/Us6.jpeg";
import Us7 from "../assets/Us7.jpeg";
import Us8 from "../assets/Us8.jpeg";

const PHOTOS = [Us1, Us2, Us3, Us4, Us5, Us6, Us7, Us8];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % PHOTOS.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-main">
        <img
          src={PHOTOS[current]}
          alt={`photo-${current}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-btn carousel-prev" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-btn carousel-next" onClick={goToNext}>
        ❯
      </button>
      <div className="carousel-dots">
        {PHOTOS.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
