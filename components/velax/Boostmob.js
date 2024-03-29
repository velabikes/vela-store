import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";

const Boostmob = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  const resetVideo = () => {
    setPlayVideo(false);
  };

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setPlayVideo(true);
      }, 300); // 3-second delay
    }
    return () => clearTimeout(timeout);
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (isVisible && !playVideo) {
        resetVideo();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, playVideo]);

  return (
    <div className="Boostmob">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="Boostmob-video"
        poster="/velax/boostmob-poster.webp" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/boostmob.mp4" type="video/mp4" />}
      </video>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Boostmob-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Boostmob-text-tittle">BOOST</p>
          <p className="Boostmob-subtitle">
            POTÊNCIA MÁXIMA <br />
            COM UM TOQUE
          </p>
          <p className="text-details">
            Além desta função, o botão também aciona o motor para partida nos
            modos conhecidos como start-assist e walk-assist.
          </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Boostmob {
          position: relative;
          display: cover;
          height: 100vh;
          width: 100vw;
        }

        .Boostmob-video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
        }

        .Boostmob-text-container {
          position: absolute;
          width: 80vw;
          top: 65vh;
          margin-left: 10vw;
          text-align: left;
          z-index: 1;
        }

        .Boostmob-text-container.fade-in {
          opacity: 1;
        }

        .Boostmob-subtitle {
          font-size: 6vw;
          font-weight: 700;
          color: ${offBlack};
          margin-top: 3vh;
          line-height: 1.2; /* Adjust the line height value as needed */
        }

        .Boostmob-text-tittle {
          font-size: 3.5vw;
          font-weight: 800;
          color: ${offBlack};
          margin-bottom: -1vw;
        }

        .text-details {
          font-size: 3.8vw;
          font-weight: 300;
          color: ${offBlack};
        }
      `}</style>
    </div>
  );
};

export default Boostmob;
