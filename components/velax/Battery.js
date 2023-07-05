import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { offWhite } from "/style/colors";

const Battery = () => {
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
    <div className="battery">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="battery-video"
      >
        <source src="/velax/battery.mp4" type="video/mp4" />
      </video>

      <div className="battery-text-container">
        <p className="battery-text-tittle">Claro.</p>
        <p className="battery-text">A bateria da Vela.</p>
      </div>

      <style jsx>{`
        .battery {
          position: relative;
          height: auto;
        }

        .battery-video {
          object-fit: cover;
          margin-right: 300px;
          width: 100vw;
          height: 100vh;
        }

        .battery-text-container {
          position: absolute;
          width: 100vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1; // Garante que o texto fique acima da imagem
        }

        .battery-text {
          font-size: 3.8vw;
          font-weight: 600;
          color: #ffffff;
          top: 70%;
          margin: 0;
        }
        .battery-text-tittle {
          font-size: 3.8vw;
          font-weight: 600;
          color: #ffffff;
          top: 90%;
          margin-bottom: -1vw;
        }

        @media only screen and (max-width: 868px) {
          .battery-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 80vh;
          }

          .battery-text-container {
            position: absolute;
            width: 100vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1; // Garante que o texto fique acima da imagem
          }

          .battery-text-small,
          .battery-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offWhite};
          }

          .battery-text-details {
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

export default Battery;
