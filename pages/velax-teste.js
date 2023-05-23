import React, { useState, useEffect } from "react";
import ScrollImageContainer from "/components/velax/ScrollImageContainer";
import PlayVideo from "/components/velax/PlayVideo";
import Mask from "/components/velax/Mask";
import { offWhite } from "../style/colors";

const VelaX = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="VelaX landing">
      <PlayVideo />
      <div className="image-container">
        <div className="mask-container">
          <Mask maskSize="100vw" />
        </div>
        <ScrollImageContainer />
        <div className="image-text-wrapper">
          <p
            className="image-text"
            style={{ transform: `translateY(-${scrollOffset * 0.7}px)` }}
          >
            Vela X
          </p>
        </div>
      </div>
      <div className="image-2">
        <img src="/velax/teste2.png" alt="Image 2" />
      </div>
      <style jsx>{`
        .VelaX {
          width: 100%;
          height: auto;
          background-color: #000000;
        }
        .landing {
          max-width: 100%;
        }
        .image-container {
          position: relative;
          width: 100%;
        }
        .mask-container {
          position: absolute;
          height: 20%;
          z-index: 2;
        }
        .scroll-image-container {
          position: relative;
          z-index: 1;
        }
        .image-2 {
          width: 100%;
          height: 90vh;
        }
        .image-text-wrapper {
          position: absolute;
          top: 18%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          z-index: 3;
        }
        .image-text {
          color: ${offWhite};
          font-size: 10em;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
