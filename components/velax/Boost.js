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
    <div className="Boost">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="Boost-video"
        poster="/velax/boost-poster.jpg" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/boost.mp4" type="video/mp4" />}
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Boost-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Boost-text-tittle">BOOST</p>
          <p className="Boost-subtitle">
            <p>Velocidade máxima e até 550W de potência com um toque.</p>{" "}
          </p>
          <p className="text-details">
            {" "}
            Além essa função, o botão também age como um acelerador que vai até
            6km/h sem precisar pedalar. Essa funcionalidade é conhecida como
            walk-assim ou start-assist.
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
          top: 45vh;
          width: 35vw;
          left: 60vw;
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 4s; /* Add a 5-second delay */
        }

        .Boost-text-container.fade-in {
          opacity: 1;
        }

        .Boost-subtitle {
          font-size: 2.2vw;
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
          font-weight: 200;
          color: ${offBlack};
        }
      `}</style>
    </div>
  );
};

export default Boost;
