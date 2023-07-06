import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";
const Lightrendermob = () => {
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
    <div className="Lightrender">
      <img
        className="image"
        src="/velax/lightrendermob.webp" // Add the poster image URL here
      ></img>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Lightrender-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Lightrender-text-tittle">FAROL</p>
          <p className="Lightrender-subtitle">
            3X MAIS BRILHO COM O NOVO FAROL LED
          </p>
          <p className="text-details">
            O farol integrado e automático da Vela sempre adicionou praticidade.
            A Vela X vem com o mesmo sistema, mas dessa vez com a tecnologia
            CREE de LEDs que fornecem um brilho superior.
          </p>
        </div>
      </VisibilitySensor>
      <style jsx>{`
        .Lightrender {
          position: relative;
          width: 100vw;
          height: auto;
          margin-top: 10vh;
        }

        .Lightrender-video {
          object-fit: cover;
          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100vw;
          height: 100vh;
        }

        .Lightrender-text-container {
          position: absolute;
          top: -3vh;
          width: 80vw;
          left: 10vw;
          text-align: center;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 0.5s; /* Add a 5-second delay */
        }

        .Lightrender-text-container.fade-in {
          opacity: 1;
        }

        .Lightrender-subtitle {
          font-size: 6vw;
          font-weight: 700;
          color: ${offBlack};
          margin-top: 3vh;

          line-height: 1.2; /* Set the desired line height value */
        }

        .Lightrender-text-tittle {
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

export default Lightrendermob;
