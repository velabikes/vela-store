import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack, offWhite } from "../../style/colors";

const Uphillmob = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className="Uphill">
      <img src="/velax/uphillmob.jpg" alt="Uphill" className="Uphill-image" />

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className={`Uphill-text-container ${isVisible ? "fade-in" : ""}`}>
          <p className="Uphill-text-tittle">Forte</p>
          <p className="Uphill-text">Subidas se tornam mais planas.</p>
        </div>
      </VisibilitySensor>

      <style jsx>{`
        .Uphill {
          position: relative;
          height: 100vh;
          width: 100vw;
        }

        .Uphill-image {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
        }

        .plana {
        }

        .Uphill-text-container {
          position: absolute;
          width: 80vw;
          top: 10vh;
          margin-left: 10vw;
          text-align: left;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: 0.5s; /* Add a 5-second delay */
        }

        .Uphill-text-container.fade-in {
          opacity: 1;
        }

        .Uphill-text {
          font-size: 5vw;
          font-weight: 300;
          color: ${offWhite};
        }

        .Uphill-text-tittle {
          font-size: 15vw;
          font-weight: 800;
          color: ${offWhite};
          top: 90%;
          margin-bottom: -1vw;
        }
      `}</style>
    </div>
  );
};

export default Uphillmob;
