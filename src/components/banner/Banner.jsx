import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <img src="/img/img1.jpg" alt="" />
        </div>
        <div>
          <img src="/img/img2.jpg" alt="" />
        </div>
        <div>
          <img src="/img/img3.jpg" alt="" />
        </div>
        <div>
          <img src="/img/img4.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;