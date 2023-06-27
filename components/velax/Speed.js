import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { offWhite } from "/style/colors";

const Speed = () => {
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
    <div className="speed">
      <Parallax
        bgImage="/velax/speed.jpg"
        bgImageAlt="Vela X Speed Iamge"
        strength={-100} // Ajuste o valor para alterar a intensidade do efeito
      >
        <div className="speed-image" />

        <div className="speed-text-container">
          <p className="speed-text">
            <span className="speed-text-small">Até</span>{" "}
            <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp
                key={startAnimation ? "start" : "reset"}
                start={startAnimation ? null : 0}
                end={32}
                duration={8}
                className="speed-text-count"
              />
            </VisibilitySensor>
            <span className="speed-text-medium">km/h</span>
          </p>
          <p className="speed-text-details">
            <br></br>Velocidade máxima de assistência do motor.
          </p>
        </div>
      </Parallax>

      <style jsx>{`
        .speed {
          position: relative;
          height: auto;
        }

        .speed-image {
          object-fit: cover;
          margin-right: 300px;
          width: auto;
          height: 90vh;
        }

        .speed-text-container {
          position: absolute;
          width: 100vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1; // Garante que o texto fique acima da imagem
        }

        .speed-text {
          font-size: 10vw;
          font-weight: 800;
          color: ${offWhite};
          margin: 0;
        }

        .speed-text-small,
        .speed-text-medium {
          display: inline-block;
          font-weight: 500;
          color: ${offWhite};
        }

        .speed-text-small {
          font-size: 4vw;
        }

        .speed-text-medium {
          font-size: 4vw;
        }

        .speed-text-count {
          font-size: 10vw;
          font-weight: 800;
        }

        .speed-text-details {
          font-size: 1.8vw;
          font-weight: 400;
          color: ${offWhite};
          margin-top: -7vw;
        }

        @media only screen and (max-width: 868px) {
          .speed-image {
            object-fit: cover;
            margin-right: 300px;
            width: auto;
            height: 80vh;
          }

          .speed-text-container {
            position: absolute;
            width: 100vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1; // Garante que o texto fique acima da imagem
          }

          .speed-text {
            font-size: 20vw;
            font-weight: 800;
            color: ${offWhite};
            margin: 0;
          }

          .speed-text-small,
          .speed-text-medium {
            display: inline-block;
            font-weight: 300;
            color: ${offWhite};
          }

          .speed-text-small {
            font-size: 8vw;
          }

          .speed-text-medium {
            font-size: 8vw;
          }

          .speed-text-count {
            font-size: 10vw;
            font-weight: 800;
          }

          .speed-text-details {
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

export default Speed;
