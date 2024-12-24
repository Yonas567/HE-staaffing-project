import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "/he-logo.svg";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container my-10 mx-2">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div>
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
        <div className="mx-12">
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={logo} className="w-20" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;
