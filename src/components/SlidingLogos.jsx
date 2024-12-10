import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import logo from "/he-logo.svg";

export default function SlidingLogos() {
  const [isMoving, setMoving] = useState(true); // Controls animation
  const [translate, setTranslate] = useState(0); // Tracks manual translation

  const handleRightMoving = () => {
    // Stop the animation
    setMoving(false);

    // Increment translation
    setTranslate((prev) => prev + 1);

    // Resume animation after 8 seconds
    setTimeout(() => {
      setMoving(true);
    }, 2000);
  };
  const handleLeftMoving = () => {
    setMoving(false);
    setTranslate((prev) => prev - 5);
    setTimeout(() => {
      setMoving(true);
    }, 2000);
  };

  return (
    <section className="relative flex flex-col  items-center">
      <button className="sm:hidden absolute -top-6  border-2 bg-red-700 px-4 py-4 border-red-700">
        TALK TO AN EXPERT
      </button>
      <section className="mt-14 md:mt-20">
        <h1 className=" text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          TRUSTED BY OUR CLIENTS & PARTNERS
        </h1>
        <div className="flex justify-center items-center ">
          <button onClick={handleLeftMoving} className="hidden lg:block">
            <FaChevronLeft size={50} />
          </button>
          <body className="xl:w-[1000px] ">
            <div class="image-slider">
              <div
                className={`${isMoving ? "image-slider-track" : "flex"}`}
                style={{
                  transform: isMoving ? "none" : `translateX(${translate}px)`,
                }}>
                <div class="slide">
                  <img src={logo} className="translate-x-5" />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>

                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>

                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>

                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide">
                  <img src={logo} />
                </div>
                <div class="slide ">
                  <img src={logo} />
                </div>
              </div>
            </div>
          </body>
          <button onClick={handleRightMoving} className="hidden lg:block">
            <FaChevronRight size={50} />
          </button>
        </div>
      </section>
    </section>
  );
}
