import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/iphone-7-press-5.jpg";
import img2 from "../../../images/3064238-poster-3064238-poster-p-1-casting-doubt-on-the-iphone-7-plus-as-apples-first-step-toward-augmented-reality.jpg";
import img3 from "../../../images/QFPwzRmZai65u5XvMzfuPg-1200-80.jpg";

import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel variant="white">
        <Carousel.Item>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${img1})`,
            }}
            className="banner-pos"
          ></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),url(${img2})`,
            }}
            className="banner-pos"
          ></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),url(${img3})`,
            }}
            className="banner-pos"
          ></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
