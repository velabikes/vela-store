import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack } from "../../style/colors";

const Boost = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className="Boost">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="Boost-video"
      >
        <source src="/velax/boost.mp4" type="video/mp4" />
      </video>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Boost-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Boost-text-tittle">BOOST</p>
          <p className="Boost-text">
            Até 550W de potência <br /> com um toque.
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
          margin-top: 10vh;
          margin-bottom: 10vw;
          width: 80%;
          height: auto;
        }

        .Boost-text-container {
          position: absolute;
          width: 30vw;
          top: 70%;
          left: 80%;
          transform: translate(-50%, -50%);
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 5s; /* Add a 5-second delay */
        }

        .Boost-text-container.fade-in {
          opacity: 1;
        }

        .Boost-text {
          font-size: 2vw;
          font-weight: 600;
          color: ${offBlack};
          top: 70%;
          margin: 0;
        }

        .Boost-text-tittle {
          font-size: 5vw;
          font-weight: 800;
          color: ${offBlack};
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .Boost-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .Boost-text-container {
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

          .Boost-text-container.fade-in {
            opacity: 1;
          }

          .Boost-text-small,
          .Boost-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offBlack};
          }

          .Boost-text-details {
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

export default Boost;
