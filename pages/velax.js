import React, { useState, useEffect, useRef } from "react";
import ScrollImageContainer from "/components/velax/ScrollImageContainer";
import ScrollImageContainerMob from "/components/velax/ScrollImageContainerMob";
import PlayVideo from "/components/velax/PlayVideo";
import Mask from "/components/velax/Mask";
import AutoplayRender1 from "/components/velax/AutoplayRender1";
import AutoplayRender1Mob from "/components/velax/AutoplayRender1Mob";
import AutoplayRender2 from "/components/velax/AutoplayRender2";
import Mask2 from "/components/velax/Mask2";
import { offWhite } from "../style/colors";
import { useMediaQuery } from "react-responsive";
import PlayVideo2 from "../components/velax/PlayVideo2";

const VelaX = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 762px)" });

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
      <PlayVideo2 />
      <div className="image-container">
        <div className="mask-container">
          <Mask maskSize="80vw" />
        </div>

        <div className="image-text-wrapper">
          <p
            className="image-text"
            style={{ transform: `translateY(-${scrollOffset * 0.55}px)` }}
          >
            Vela X
          </p>
        </div>

        {isMobile ? <ScrollImageContainerMob /> : <ScrollImageContainer />}
      </div>

      <div className="motor1">
        <img src="/velax/profile.jpg" alt="Image 2" />
      </div>

      <PlayVideo />
      <div className="profile">
        <img src="/velax/profile.jpg" alt="Image 2" />
      </div>

      <div className="image-2" ref={image2Ref}>
        <img src="/velax/VX-1.jpg" alt="Image 2" />
      </div>

      {isMobile ? <AutoplayRender1Mob /> : <AutoplayRender1 />}
      <AutoplayRender2 />

      <style jsx>{`
        .VelaX landing {
          width: 100%;
          height: auto;

          overflow: hidden;
        }

        .image-container {
          position: relative;
          top: 0px;
        }

        .mask-container {
          display: flex;
          position: absolute;
          overflow: hidden;
          top: -50px;
          z-index: 2;
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

        .image-text {
          color: ${offWhite};
          font-size: 15vw;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.1s ease;
        }

        .image-2 {
          display: flex;
          left: 0;
          position: relative;
          height: 90vh;
        }

        .profile {
          display: flex;
          width: 100vw;
          height: auto;
          position: relative;
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

        .play-video {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default VelaX;
