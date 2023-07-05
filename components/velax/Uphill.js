import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack, offWhite } from "../../style/colors";

const Uphill = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className="Uphill">
      <img src="/velax/uphill.webp" alt="Uphill" className="Uphill-image" />

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Uphill-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Uphill-text-tittle">Forte</p>
          <p className="Uphill-text">
            Subidas se tornam <br /> mais <spam className="plana">planas.</spam>
          </p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Uphill {
          position: relative;
          height: 100%;
        }

        .Uphill-image {
          object-fit: cover;
          width: 100vw;
          height: auto;
        }

        .plana {
        }

        .Uphill-text-container {
          position: absolute;
          width: 30vw;
          top: 35%;
          left: 75%;
          transform: translate(-50%, -50%);
          text-align: left;
          z-index: 1;

          opacity: 1;
          transition: opacity 0.5s ease;
          transition-delay: 0.5s; /* Add a 5-second delay */
        }

        .Uphill-text-container.fade-in {
          opacity: 1;
        }

        .Uphill-text {
          font-size: 2vw;
          font-weight: 600;
          color: ${offWhite};
          top: 70%;
          margin: 0;
        }

        .Uphill-text-tittle {
          font-size: 5vw;
          font-weight: 800;
          color: ${offWhite};
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .Uphill-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .Uphill-text-container {
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

          .Uphill-text-container.fade-in {
            opacity: 1;
          }

          .Uphill-text-small,
          .Uphill-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offBlack};
          }

          .Uphill-text-details {
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

export default Uphill;
