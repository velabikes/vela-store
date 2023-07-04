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
      }, 1000); // 3-second delay
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
        poster="/velax/boost-poster.jpg" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/boost.mp4" type="video/mp4" />}
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Boostmob-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Boostmob-text-tittle">Boostmob</p>
          <p className="Boostmob-text">
            Hidráulico com regulagem por pressão de ar: responsiva e apenas
            1.730g de peso.
          </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Boostmob {
          position: relative;
          height: 100vh;
          margin-bottom: 0vw;
          margin-top: -2vw;
        }

        .Boostmob-video {
          object-fit: cover;
          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100%;
          height: 100vh;
        }

        .Boostmob-text-container {
          position: absolute;
          width: 30vw;
          bottom: 10vh;
          left: 78vw;
          transform: translate(-50%, -50%);
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 3s; /* Add a 5-second delay */
        }

        .Boostmob-text-container.fade-in {
          opacity: 1;
        }

        .Boostmob-text {
          font-size: 2vw;
          font-weight: 600;
          color: ${offBlack};
          top: 70%;
          margin: 0;
        }

        .Boostmob-text-tittle {
          font-size: 5vw;
          font-weight: 800;
          color: ${offBlack};
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .Boostmob-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .Boostmob-text-container {
            position: absolute;
            width: 40vw;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: left;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.5s ease;
            transition-delay: 0.5s;
          }

          .Boostmob-text-container.fade-in {
            opacity: 1;
          }

          .Boostmob-text-small,
          .Boostmob-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offBlack};
          }

          .Boostmob-text-details {
            font-size: 5vw;
            width: 60vw;
            font-weight: 300;
            color: ${offBlack};
            margin-left: 20vw;
            margin-top: -15vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Boostmob;
