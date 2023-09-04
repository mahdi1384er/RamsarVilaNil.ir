import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "../../css/index.css";

const Carousel = ({
  imgsSliders,
  imgsSliders2,
  imgsSliders3,
  imgsSliders4,
  imgsSliders5,
  imgsSliders6,
}) => {
  const [slides, setSlide] = useState(0);
  const data = [
    {
      id: 0,
      imgs: imgsSliders,
    },
    {
      id: 1,
      imgs: imgsSliders2,
    },
    {
      id: 2,
      imgs: imgsSliders3,
    },
    ,
    {
      id: 3,
      imgs: imgsSliders4,
    },
    ,
    {
      id: 4,
      imgs: imgsSliders5,
    },
    ,
    {
      id: 5,
      imgs: imgsSliders6,
    },
    
  ];

  const nextSlide = () => {
    setSlide(slides === data.length - 1 ? 0 : slides + 1);
  };

  const prevSlide = () => {
    setSlide(slides === 0 ? data.length - 1 : slides - 1);
  };

  return (
    <div className="carousel mt-[17px] mb-[8px]">
      <BsArrowLeftCircleFill onClick={nextSlide} className="arrow arrow-left" />
      {data.map(
        (c) => (
            <div>
              <img
                src={c.imgs}
                key={c.id}
                className={slides === c.id ? "slides" : "slides slides-hidden"}
              />
            </div>
        )
      )}

      <BsArrowRightCircleFill
        onClick={prevSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slides === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
