import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { offWhite, offBlack } from "/style/colors";
import { useMediaQuery } from "react-responsive";

const ScrollImageContainer = lazy(() =>
  import("/components/velax/ScrollImageContainer")
);
const ScrollImageContainerMob = lazy(() =>
  import("/components/velax/ScrollImageContainerMob")
);
const IntroDarkMob = lazy(() => import("/components/velax/IntroDarkMob"));
const Mask = lazy(() => import("/components/velax/Mask"));
const AutoplayRender1 = lazy(() => import("/components/velax/AutoplayRender1"));
const AutoplayRender1Mob = lazy(() =>
  import("/components/velax/AutoplayRender1Mob")
);
const AutoplayRender2 = lazy(() => import("/components/velax/AutoplayRender2"));
const Maskmob = lazy(() => import("/components/velax/Maskmob"));
const Speed = lazy(() => import("/components/velax/Speed"));
const Power = lazy(() => import("/components/velax/Power"));
const Regen = lazy(() => import("/components/velax/Regen"));
const IntroDark = lazy(() => import("/components/velax/IntroDark"));

const VelaX = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [image2Offset, setImage2Offset] = useState(0);
  const image2Ref = useRef(null);

  const redirectToBuildPage = () => {
    window.location.href = "https://www.velabikes.com.br/velax-build";
  };

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 868);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 868);
  }, []);

  return (
    <div className="VelaX landing">
      <div className="topcta">
        <button className="button" onClick={redirectToBuildPage}>
          MONTE A SUA
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? (
          <IntroDarkMob className="introdarkmob" />
        ) : (
          <IntroDark className="introdark" />
        )}

        <div className="image-container">
          <div className="mask-container">
            {isMobile ? <Maskmob maskSize="30vw" /> : <Mask maskSize="80vw" />}
          </div>

          <div className="image-text-wrapper">
            <p
              className="image-text"
              style={{ transform: `translateY(-${scrollOffset * 0.3}px)` }}
            >
              Vela X
            </p>
          </div>

          {isMobile ? <ScrollImageContainerMob /> : <ScrollImageContainer />}
        </div>

        <Speed />

        <Power />
        <Regen />
        <div className="image-2" ref={image2Ref}>
          <img src="/velax/VX-1.jpg" alt="Image 2" />
        </div>

        {isMobile ? <AutoplayRender1Mob /> : <AutoplayRender1 />}
        <AutoplayRender2 />
      </Suspense>

      <style jsx>{`
        .VelaX {
          width: 101%;
          margin-top: -6px;
          height: auto;
          overflow: hidden;
          background-color: #dbd7ce;
        }

        .topcta {
          position: fixed;
          top: 5px;
          right: 110px;
          z-index: 999;
        }

        .button {
          width: 9em;
          align-items: right;
          font-size: 0.8em;
          font-weight: 500;
          text-align: center;
          background-color: #8acca8;
          margin-top: 7px;
          border: none;
          border-radius: 20px;
          padding: 0.5em 0.5em;
          color: ${offWhite};
          cursor: pointer;
        }

        .introdarkmob {
          height: 50%;
          z-index: 5;
        }

        .introdark {
          height: 50%;
          z-index: 99;
        }

        .image-container {
          position: relative;
          top: 0px;
        }

        .mask-container {
          display: flex;
          position: absolute;
          overflow: hidden;
          top: -8px;
          z-index: 2;
        }

        .Maskmob {
          top: 0;
        }

        .image-text-wrapper {
          position: absolute;
          margin-top: 90%;
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
          margin-top: -550%;
          font-size: 15vw;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.5s ease;
        }

        .profile {
          display: flex;
          width: 100vw;
          height: auto;
          position: relative;
        }

        .image-2 {
          display: flex;
          left: 0;
          position: relative;
          height: 90vh;
        }

        .image-2 img {
          height: 100%;
          width: 100vw;
          object-fit: cover;
        }

        .darkhero {
          position: relative;
          height: 100vh;
          transform: translateY(${image2Offset * 0.2}px);
        }

        .play-video {
          position: relative;
        }

        @media only screen and (max-width: 868px) {
          .image-text {
            color: ${offWhite};
            font-size: 15vw;
            font-weight: 500;
            font-family: filson-pro;
            transition: transform 0.1s ease;
          }

          .end-text {
            position: absolute;
            top: 250%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.2);
            color: ${offBlack};
            font-size: 10vw;
            font-weight: 800;
            font-family: filson-pro;
            transition: transform 0.5s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default VelaX;
