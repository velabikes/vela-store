import React, { useState, useEffect, useRef } from "react";
import ScrollImageContainer from "/components/velax/ScrollImageContainer";
import PlayVideo from "/components/velax/PlayVideo";
import Mask from "/components/velax/Mask";
import AutoplayRender1 from "/components/velax/AutoplayRender1";
import Mask2 from "/components/velax/Mask2";
import { offWhite } from "../style/colors";

const VelaX = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [image2Offset, setImage2Offset] = useState(0);
  const [image3Offset, setImage3Offset] = useState(0);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

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
      const offset = containerOffset + 2500; // Subtract 200 pixels from the container offset
      setImage2Offset(offset);
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
          <Mask maskSize="80vw" />
        </div>

        <div className="image-text-wrapper">
          <p
            className="image-text"
            style={{ transform: `translateY(-${scrollOffset * 0.45}px)` }}
          >
            Vela X
          </p>
        </div>
        <ScrollImageContainer />
      </div>
      <div className="image-2" ref={image2Ref}>
        <img src="/velax/VX-1.jpg" alt="Image 2" />
      </div>
      <div className="profile">
        <img src="/velax/profile.jpg" alt="Image 2" />
      </div>
      <AutoplayRender1 />

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
          height: 100%;
          z-index: 2;
          opacity: 0;
        }

        .scroll-image-container {
          position: relative;
          z-index: 1;
        }
        .image-2 {
          display: flex;
          left: 0;
          height: 90vh;
        }
        .profile {
          display: flex;
          width: 100vw;
          height: auto;
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
          height: 100%;
        }

        .image-text-wrapper {
          position: absolute;
          top: 30%;
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
          transform: translateY(${image3Offset * 0.2}px);
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
