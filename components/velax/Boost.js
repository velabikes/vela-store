import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";

const Boost = () => {
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
    <div className="Boost">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="Boost-video"
        poster="/velax/boost-poster.webp" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/boost.mp4" type="video/mp4" />}
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Boost-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Boost-text-tittle">BOOST</p>
          <p className="Boost-subtitle">
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
        .Boost {
          position: relative;
          height: 100vh;
        }

        .Boost-video {
          object-fit: cover;
          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100vw;
          height: 100vh;
        }

        .Boost-text-container {
          position: absolute;
          top: 55vh;
          width: 30vw;
          left: 60vw;
          text-align: right;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 2.5s; /* Add a 5-second delay */
        }

        .Boost-text-container.fade-in {
          opacity: 1;
        }

        .Boost-subtitle {
          font-size: 2.2vw;
          font-weight: 700;
          color: ${offBlack};
          margin-top: 3vh;
          line-height: 1.2; /* Adjust the line height value as needed */
        }

        .Boost-text-tittle {
          font-size: 1.6vw;
          font-weight: 800;
          color: ${offBlack};
          margin-bottom: -1vw;
        }

        .text-details {
          font-size: 1.4vw;
          font-weight: 300;
          color: ${offBlack};
        }
      `}</style>
    </div>
  );
};

export default Boost;
