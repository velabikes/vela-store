import React, { useState, useEffect, useRef } from "react";
import IntroDarkMob from "/components/velax/IntroDarkMob";
import IntroDark from "/components/velax/IntroDark";
import Mask from "/components/velax/Mask";
import Maskmob from "/components/velax/Maskmob";
import ScrollImageContainer from "/components/velax/ScrollImageContainer";
import ScrollImageContainerMob from "/components/velax/ScrollImageContainerMob";
import Speed from "/components/velax/Speed";
import Lights from "/components/velax/Lights";
import Speedmob from "/components/velax/Speedmob";
import Lightsmob from "/components/velax/Lightsmob";
import Power from "/components/velax/Power";
import Regen from "/components/velax/Regen";
import { useMediaQuery } from "react-responsive";
import Lightspecs from "/components/velax/Lightspecs";
import Comparelights from "/components/velax/Comparelights";
import Battery from "/components/velax/Battery";
import Batterymob from "/components/velax/Batterymob";
import Batteryrendermob from "../components/velax/Batteryrendermob";
import Colors from "/components/velax/Colors";
import Fork from "/components/velax/Fork";
import Forkmob from "../components/velax/Forkmob";
import Boost from "/components/velax/Boost";
import Boostmob from "../components/velax/Boostmob";
import Explode from "../components/velax/Specs";
import Uphill from "../components/velax/Uphill";
import Forkrender from "../components/velax/Forkrender";
import App from "../components/velax/App";
import Range from "../components/velax/Range";
import Rangemob from "../components/velax/Rangemob";
import Batteryrender from "../components/velax/Batteryrender";
import Motorbrake from "../components/velax/Motorbrake";
import Specs from "../components/velax/Specs";
import Explosion from "../components/velax/Explosion";
import Explosionmob from "../components/velax/Explosionmob";

import {
  darkGray,
  offBlack,
  velaBlue,
  velaGreen,
  velaRed,
  offWhite,
} from "../style/colors";
import Appmob from "../components/velax/Appmob";
import AppTitle from "../components/velax/AppTitle";

const VelaX = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [image2Offset, setImage2Offset] = useState(0);
  const [image3Offset, setImage3Offset] = useState(0);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

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

  const preloadImages = async () => {
    const { imageFolderPath } = getConfig();

    const imagesContext = require.context(
      `public${imageFolderPath}`,
      false,
      /\.(webp)$/
    );
    const imagePaths = imagesContext.keys();

    await Promise.all(
      imagePaths.map((imagePath) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = imagesContext(imagePath);
        });
      })
    );
  };

  return (
    <div className="VelaX landing">
      <div className="topcta">
        <button className="button" onClick={redirectToBuildPage}>
          MONTE A SUA
        </button>
      </div>

      {isMobile ? (
        <IntroDarkMob className="introdarkmob" />
      ) : (
        <IntroDark className="introdark" />
      )}

      <div className="image-container">
        <div className="mask-container">
          {isMobile ? <Maskmob maskSize="30vw" /> : <Mask maskSize="100vw" />}
        </div>

        {isMobile ? (
          <ScrollImageContainerMob />
        ) : (
          <ScrollImageContainer className="scroll-image" />
        )}
      </div>

      {isMobile ? (
        <Speedmob className="Speedmob" />
      ) : (
        <Speed className="Speed" />
      )}

      {isMobile ? (
        <Boostmob className="bosstmob" />
      ) : (
        <Boost className="boost" />
      )}

      <Uphill />

      <Motorbrake />

      {isMobile ? (
        <Batterymob className="Batterymob" />
      ) : (
        <Battery className="Battery" />
      )}
      {isMobile ? (
        <Rangemob className="Rangemob" />
      ) : (
        <Range className="Range" />
      )}

      {isMobile ? (
        <Batteryrendermob className="Batteryrendermob" />
      ) : (
        <Batteryrender className="Batteryrender" />
      )}

      <div className="image-2" ref={image2Ref}>
        <img src="/velax/VX-1.jpg" alt="Image 2" />
      </div>

      {isMobile ? (
        <Lightsmob className="Lightmob" />
      ) : (
        <Lights className="Lightsmob" />
      )}

      {isMobile ? <Forkmob className="forkmob" /> : <Fork className="fork" />}

      <Forkrender />

      <AppTitle />

      <div className="app-container">
        <div className="app">
          {isMobile ? (
            <Appmob className="Appmob" />
          ) : (
            <App className="Appdkp" />
          )}
        </div>
      </div>

      {isMobile ? (
        <Explosionmob className="exposionmob" />
      ) : (
        <Explosion className="explosion" />
      )}

      <Specs className="specs" />

      <style jsx>{`
        .VelaX {
          width: 100%;
          margin-top: -6px;
          height: auto;
          overflow: hidden;
          background-color: #ede6de;
        }
        .scroll-image {
          magin-top: 5vh;
        }

        .app-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .explosion {
          position: relative;
        }

        .app {
          position: relative;
          z-index: 3;
        }
        .explode {
          z-index: 99;
        }
        .topcta {
          position: fixed;
          top: 5px;
          right: 110px;
          z-index: 999;
        }

        .apptitle {
          position: relative;
          display: cover;
          background-color: #ebbd99;
          margin-top: 0vw;
          padding-top: 25vh;
          padding-left: 0vw;
          text-align: center;

          color: white;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }

        .apptitle-text-container {
          width: 50vw;
          margin-left: 25vw;
        }
        .title {
          font-size: 3vh;
          font-weight: 500;
          margin-bottom: -0.5vh;
        }

        .call {
          font-size: 6vh;
          font-weight: 500;
        }

        .details {
          font-size: 3vh;
          font-weight: 200;
        }

        .scroll-preload {
          position: absolute;
          height: 1vh;
          z-index: -2;
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
          cursor: pointer;
          color: ${offBlack};
        }

        .introdarkmob {
          height: 50%;
          z-index: 5;
        }
        .introdark {
          height: 100vh;
          z-index: 99;
        }

        .image-container {
          position: relative;
          top: 0px;
          z-index: 3;
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
          margin-top: -320%;
          font-size: 15vw;
          font-weight: 800;
          font-family: filson-pro;
          transition: transform 0.5s ease;
        }

        .end-text {
          position: absolute;
          top: 240%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.2);
          color: ${offBlack};
          font-size: 10vw;
          font-weight: 800;
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
          position: absolute;
          visibility: hidden;
          height: 90vh;
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
          top: 35%;
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
          position: relative;
          margin-bottom: 0%;
          font-weight: 500;
          font-family: filson-pro;
          transition: transform 0.1s ease;
        }
        .AutoplayRender1 {
          position: relative;
          margin-top: 300%;
          z-index: 5;
        }
        @media only screen and (max-width: 868px) {
          .image-text {
            color: ${offWhite};
            margin-top: -500%;
            font-size: 16vw;
            font-weight: 500;
            font-family: filson-pro;
            transition: transform 0.1s ease;
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
            cursor: pointer;
            color: ${offBlack};
          }
        }
      `}</style>
    </div>
  );
};

export default VelaX;
