import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImgComp from "../Atoms/ImgComp";
// import BackgroundImg from "../Atoms/BackgroundImg";
import img1 from "./img/australie.jpg";
import img2 from "./img/bresil.jpg";
import img3 from "./img/chine.jpg";
import rightArrow from "./img/right-arrow.png";
import leftArrow from "./img/left-arrow.png";

export default function Slider() {
  let sliderArr = [
    <Link to={`/projects/3`}>
      <ImgComp src={img1} />
      <p className="legend">link 1</p>
    </Link>,
    <Link>
      <ImgComp src={img2} />
      <p>link 1</p>
    </Link>,
    <Link>
      <ImgComp src={img3} />
      <p>link 1</p>
    </Link>,
  ];
  const [x, setX] = useState(0);
  // console.log("x1", x);

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };
  return (
    <div className="back">
      <div className="sliderContainer">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="sliderContainer_slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <img src={leftArrow} alt="previous" />{" "}
        </button>
        <button id="goRight" onClick={goRight}>
          <img src={rightArrow} alt="next" />
        </button>
      </div>
    </div>
  );
}
