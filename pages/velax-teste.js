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
            style={{ transform: `translateY(-${scrollOffset * 0.4}px)` }}
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
        .image-container {
          position: relative;
        }
        .mask-container {
          display: flex;
          position: absolute;
          overflow: hidden;
          top: -1px;
          z-index: 2;
        }
        .mask2-container {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          height: 100vh;
          z-index: 2;
        }
        .scroll-image-container {
          position: relative;
          z-index: 1;
        }
        .image-2 {
          display: flex;
          position: absolute;
          top: 85%;
          left: 0;
          height: 100vh;
          overflow: hidden;
          transform: translateY(${image2Offset * 0.4}px);
        }

        .image-2 img {
          height: 100%;
          width: 100vw;
          object-fit: cover;
        }
        .image-3 {
          display: flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          width: auto;
          height: 100vh;
        }

        .image-text-wrapper {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          z-index: 3;
          vertical-align: middle;
          width: auto;
          height: 100vh;
        }
        .darkhero {
          position: relative;
          height: 100vh;
          min-height: 100vh;
        }

        .image-text {
          color: ${offWhite};
          font-size: 15vw;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
