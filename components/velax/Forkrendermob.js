import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";
const Forkrendermob = () => {
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
    <div className="Forkrender">
      <img
        className="image"
        src="/velax/forkrendermob.webp" // Add the poster image URL here
      ></img>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Forkrender-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Forkrender-text-tittle">PREPARADA</p>
          <p className="Forkrender-subtitle">
            SUSPENSÃO PNEUMÁTICA E<br />
            AMORTECEDOR HIDRÁULICO
          </p>
          <p className="text-details">
            Leve e responsiva para deixar você confiante em trechos sem
            infraestrutura.
          </p>
        </div>
      </VisibilitySensor>
      <style jsx>{`
        .Forkrender {
          position: relative;
          height: 90vh;
        }

        .Forkrender-video {
          object-fit: cover;
          overflow: hidden;
          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100vw;
          height: 100vh;
        }

        .Forkrender-text-container {
          position: absolute;
          top: 3vh;
          width: 50vw;
          left: 40vw;
          text-align: right;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 0.5s; /* Add a 5-second delay */
        }

        .Forkrender-text-container.fade-in {
          opacity: 1;
        }

        .Forkrender-subtitle {
          font-size: 6vw;
          font-weight: 700;
          color: ${offBlack};
          margin-top: 3vh;
          width: 50vw;
          line-height: 1.2; /* Set the desired line height value */
        }

        .Forkrender-text-tittle {
          font-size: 3.5vw;
          font-weight: 800;
          color: ${offBlack};

          margin-bottom: -1vw;
        }

        .text-details {
          font-size: 3.8vw;
          font-weight: 300;
          color: ${offBlack};
          width: 40vw;
          margin-left: 10vw;
        }
      `}</style>
    </div>
  );
};

export default Forkrendermob;
