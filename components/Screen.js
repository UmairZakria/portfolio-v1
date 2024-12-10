import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Screen = (Props) => {
  const sliderRef = useRef(null);




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    swipe: true,
    arrows: false,
  };



  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1000,
        overflowY: "scroll",
      }}
    >

      <Slider ref={sliderRef} {...settings}>
        {Props.images.map((image, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </Slider>

      <motion.button
      whileTap={{rotate:180}}
        className="fixed top-4 right-4 bg-white  font-semibold  rounded-full"
        onClick={Props.onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
          <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
        </svg>
      </motion.button>
      <button
        className="fixed top-1/2 hidden md:block -translate-y-1/2  left-4 bg-white  p-2 rounded"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/rewind.png" alt="rewind" />
      </button>

      <button
        className="fixed top-1/2 -translate-y-1/2 hidden md:block  right-4 bg-[#ffffff]  p-2 rounded"
        onClick={() => sliderRef.current.slickNext()}
      >
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/fast-forward.png" alt="fast-forward" />
      </button>


    </div>
  );
};

export default Screen;
