import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";
const Forkrender = () => {
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
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="Forkrender-video"
        poster="/velax/Forkrender-poster.webp" // Add the poster image URL here
      >
        {playVideo && <source src="/velax/Forkrender.mp4" type="video/mp4" />}
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Forkrender-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Forkrender-text-tittle">PREPARADA</p>
          <p className="Forkrender-subtitle">
            <p>Amortecedor hidráulico com suspensão pneumática.</p>{" "}
          </p>
          <p className="text-details">
            {" "}
            Leve e responsiva para deixar você confiante em trechos sem
            infraestrutura adequada.
          </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Forkrender {
          position: relative;
          height: 100vh;
        }

        .Forkrender-video {
          object-fit: cover;
          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100vw;
          height: 100vh;
        }

        .Forkrender-text-container {
          position: absolute;
          top: 12vh;
          width: 35vw;
          left: 60vw;
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
          font-size: 2.2vw;
          font-weight: 700;
          color: ${offBlack};
        }

        .Forkrender-text-tittle {
          font-size: 1.6vw;
          font-weight: 800;
          color: ${offBlack};
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

export default Forkrender;
