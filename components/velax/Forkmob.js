import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { offWhite } from "/style/colors";

const Forkmob = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setStartAnimation(true);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const handleVisibilityChange = () => {
      if (document.hidden && isMounted) {
        setStartAnimation(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="Forkmob">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="Forkmob-video"
      >
        <source src="/velax/forkmob.mp4" type="video/mp4" />
      </video>

      <div className="Forkmob-text-container">
        <p className="Forkmob-text-tittle">Urbana.</p>
        <p className="Forkmob-text">Para qualquer rota.</p>
      </div>

      <style jsx>{`
        .Forkmob {
          position: relative;
          height: auto;
        }

        .Forkmob-video {
          object-fit: cover;
          margin-right: 300px;
          width: 100vw;
          height: 100vh;
        }

        .Forkmob-text-container {
          position: absolute;
          width: 100vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1; // Garante que o texto fique acima da imagem
        }

        .Forkmob-text {
          font-size: 6vw;
          font-weight: 600;
          color: #ffffff;
          top: 70%;
          margin: 0;
        }
        .Forkmob-text-tittle {
          font-size: 6vw;
          font-weight: 600;
          color: #ffffff;
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .Forkmob-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .Forkmob-text-container {
            position: absolute;
            width: 100vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1; // Garante que o texto fique acima da imagem
          }

          .Forkmob-text-small,
          .Forkmob-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offWhite};
          }

          .Forkmob-text-details {
            font-size: 5vw;
            width: 60vw;
            font-weight: 300;
            color: ${offWhite};
            margin-left: 20vw;
            margin-top: -15vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Forkmob;
