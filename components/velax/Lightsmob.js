import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { offWhite } from "/style/colors";

const Lightsmob = () => {
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
    <div className="lights">
      <video autoPlay muted loop playsInline className="lights-video">
        <source src="/velax/lightsmob.mp4" type="video/mp4" />
      </video>

      <div className="lights-text-container">
        <p className="lights-text-tittle">Muita Luz</p>
        <p className="lights-text">Pra ver e ser visto.</p>
      </div>

      <style jsx>{`
        .lights {
          position: relative;
          height: auto;
        }

        .lights-video {
          object-fit: cover;
          margin-right: 300px;
          width: 100vw;
          height: 70vh;
        }

        .lights-text-container {
          position: absolute;
          width: 100vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1; // Garante que o texto fique acima da imagem
        }

        .lights-text {
          font-size: 13vw;
          font-weight: 1000;
          color: ${offWhite};
          margin: 0;
        }

        @media only screen and (max-width: 868px) {
          .lights-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 90vh;
          }

          .lights-text-container {
            position: absolute;
            width: 100vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1; // Garante que o texto fique acima da imagem
          }

          .lights-text-small,
          .lights-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offWhite};
          }

          .lights-text {
            font-size: 6vw;
            font-weight: 600;
            color: #ffffff;
            top: 70%;
            margin: 0;
          }
          .lights-text-tittle {
            font-size: 3vw;
            font-weight: 500;
            color: #ffffff;
            top: 90%;
            margin-bottom: -1vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Lightsmob;
