import React, { useState, useEffect, useRef } from "react";
import ScrollImageContainer from "/components/velax/ScrollImageContainer";
import PlayVideo from "/components/velax/PlayVideo";
import Mask from "/components/velax/Mask";
import Mask2 from "/components/velax/Mask2";
import { offWhite } from "../style/colors";

const VelaX = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [image2Offset, setImage2Offset] = useState(0);
  const image2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const containerOffset = scrollPosition - image2Ref.current.offsetTop;
      setImage2Offset(containerOffset);
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

        <div className="image-text-wrapper">
          <p
            className="image-text"
            style={{ transform: `translateY(-${scrollOffset * 0.5}px)` }}
          >
            Vela X
          </p>
        </div>
        <ScrollImageContainer />
      </div>
      <div className="image-2" ref={image2Ref}>
        <img src="/velax/teste2.png" alt="Image 2" />
      </div>
      <div className="darkhero">
        <div className="mask2-container">
          <Mask2 width="100vw" />
        </div>
        <div className="image-3">
          <img src="/velax/darkhero.png" alt="Image 3" />
        </div>
      </div>
      <style jsx>{`
        .VelaX {
          width: 100%;
          height: auto;
          background-color: #000000;
          overflow: hidden;
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
          z-index: 2;
        }
        .mask2-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .scroll-image-container {
          position: relative;
          z-index: 1;
        }
        .image-2 {
          position: absolute;
          top: 85%;
          left: 0;
          width: 100%;
          height: 100vh;
          transform: translateY(${image2Offset * 0.4}px);
        }
        .image-3 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .image-text-wrapper {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          z-index: 3;
        }
        .darkhero {
          position: relative;
          height: auto;
          min-height: 100vh;
        }

        .image-text {
          color: ${offWhite};
          font-size: 10em;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
