import React from "react";
import { offWhite } from "../../style/colors";

const Power = () => {
  return (
    <div className="power">
      <img
        className="power-image"
        src="/velax/power.png"
        alt="Vela x - Lights Specs"
      />
      <div className="power-text-container">
        <p className="power-text">
          <span className="power-text-small">Poderia até ser:</span> <br />
          <br />
          <span className="power-text-large">"Encontre o erro".</span>
        </p>
        <p className="power-text-details">
          Mas são 550W de potência e 45 Nm de torque <br />
          subindo uma bela ladeira com o boost.
        </p>
      </div>

      <style jsx>{`
        .power {
          display: flex;
          width: 100vw;
          height: 90vh;
          background-color: blue;
        }

        .power-image {
          margin: 20px;
          width: 60%;
          height: auto;

          background-color: red;
          object-fit: contain;
        }

        .power-text-container {
          position: relative;
          text-align: left;
          width: 30%;
          font-weight: 500;
          color: ${offWhite};
          margin-top: 10%;
          margin-left: 0vw;
        }

        .power-text-small {
          font-size: 2vw;
          margin-bottom: 10em;
        }

        .power-text-large {
          font-size: 4vw;
          font-weight: 800;
        }

        .power-text-details {
          font-size: 1.5vw;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Power;
