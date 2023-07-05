import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";
const Explosionmob = () => {
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
      }, 500); // 3-second delay
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
        poster="/velax/explosion-poster.webp" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/explosion.mp4" type="video/mp4" />}
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Boost-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Boost-text-tittle"></p>
          <p className="Boost-subtitle">
            <p>Por dentro da Vela X</p>{" "}
          </p>
          <p className="text-details"> </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Boost {
          position: relative;
          height: 100vh;
        }

        .Boost-video {
          object-fit: cover;
          margin-top: 30vh;
          mnargin-left: -50vw;
          width: 100vw;
          height: 75vh;
        }

        .Boost-text-container {
          position: absolute;
          top: 15vh;
          width: 100vw;
          left: 25vw;
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.2s ease;
          transition-delay: 0.1s; /* Add a 5-second delay */
        }

        .Boost-text-container.fade-in {
          opacity: 1;
        }

        .Boost-subtitle {
          font-size: 5vw;
          font-weight: 700;
          color: ${offBlack};
          margin-top: 3vh;
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

export default Explosionmob;
