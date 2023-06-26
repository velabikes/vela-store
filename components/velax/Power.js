import React from "react";

const Power = () => {
  return (
    <div className="power">
      <img
        className="power-image"
        src="/velax/power.png"
        alt="Vela x - Power"
      />
      <div className="power-text-container">
        <p className="power-text">
          <span className="power-text-small">Até </span>{" "}
          <span className="power-text-large"> 550W</span>
        </p>
        <p className="power-text-details">
          Potência com o acionamento <br></br>do boost e 45 Nm de torque.
        </p>
      </div>

      <style jsx>{`
        .power {
          display: cover;
        }

        .power-image {
          width: 80%;
        }

        .power-text-container {
          positionÇ absolute;
          text-align: left;
          top: 30%;
          font-weight: 500;
          margin-top: -30vw;
          margin-left: 76vw;
        }

        .power-text-small {
          font-size: 1.35vw;
        }

        .power-text-large {
          font-size: 5.5vw;
          font-weight: 800;
        }

        .power-text-details {
          font-size: 1.35vw;
        }
      `}</style>
    </div>
  );
};

export default Power;
