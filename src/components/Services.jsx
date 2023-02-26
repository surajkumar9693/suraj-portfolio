import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/fullstack.jpg";
import img2 from "../assets/backend.jpg";
import img3 from "../assets/nodejs.jpg";



const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">Full Stack developer</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Backend developer</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p className="legend">Nodejs developer</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;