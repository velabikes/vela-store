import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Range = () => {
  return (
    <div className="Range">
      <img
        className="Range-image"
        src="/velax/range.jpg"
        alt="Vela x - Lights Specs"
      />
      <div className="Range-text-container">
        <p className="Range-text">
          <span className="Range-text-small">Autonomia</span> <br />
          <br />
          <span className="Range-text-large">20 à 40km</span>
        </p>
        <p className="Range-text-details">
          Suficiente pra ir longe num trajeto diário e voltar com segurança
        </p>
      </div>

      <style jsx>{`
        .Range {
          display: flex;
          width: 100vw;
          height: 100vh;
          background-color: #ede6de;
        }

        .Range-image {
          margin-top: 3vw;
          margin-bottom: 3vw;
          width: 60%;
          height: auto;
          background-color: #ede6de;
          object-fit: contain;
        }

        .Range-text-container {
          position: relative;
          text-align: left;
          width: 25vw;
          font-weight: 500;
          color: ${offBlack};
          margin-top: 10%;
          margin-left: 0vw;
        }

        .Range-text-small {
          font-size: 2vw;
          margin-bottom: 10em;
        }

        .Range-text-large {
          font-size: 4vw;
          font-weight: 800;
        }

        .Range-text-details {
          font-size: 1.5vw;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Range;
