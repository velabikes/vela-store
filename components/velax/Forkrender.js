import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";

const Forkrender = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className="Forkrender">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="Forkrender-video"
      >
        <source src="/velax/Forkrender.mp4" type="video/mp4" />
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div
          className={`Forkrender-text-container ${isVisible ? "fade-in" : ""}`}
        >
          <p className="Forkrender-text-tittle">Amortecedor</p>
          <p className="Forkrender-text">
            Hidráulico com regulagem por pressão de ar: responsiva e apenas
            1.730g de peso.
          </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Forkrender {
          position: relative;
          height: 100vh;
          margin-bottom: 0vw;
          margin-top: -2vw;
        }

        .Forkrender-video {
          object-fit: cover;

          margin-top: 0vh;
          margin-bottom: 0vw;
          width: 100%;
          height: 100vh;
        }

        .Forkrender-text-container {
          position: absolute;
          width: 30vw;
          top: 13vw;
          left: 73%;
          transform: translate(-50%, -50%);
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 3s; /* Add a 5-second delay */
        }

        .Forkrender-text-container.fade-in {
          opacity: 1;
        }

        .Forkrender-text {
          font-size: 2vw;
          font-weight: 600;
          color: ${offBlack};
          top: 70%;
          margin: 0;
        }

        .Forkrender-text-tittle {
          font-size: 5vw;
          font-weight: 800;
          color: ${offBlack};
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .Forkrender-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .Forkrender-text-container {
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

          .Forkrender-text-container.fade-in {
            opacity: 1;
          }

          .Forkrender-text-small,
          .Forkrender-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offBlack};
          }

          .Forkrender-text-details {
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

export default Forkrender;
