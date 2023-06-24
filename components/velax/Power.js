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
          Potência de pico com o acionamento <br></br>do boost e 45 N.m de
          torque na roda.
        </p>
      </div>

      <style jsx>{`
        .power {
          display: flex;
        }

        .power-image {
          width: 60%;
        }

        .power-text-container {
          text-align: left;
          font-weight: 500;
          margin-top: 14vw;
          margin-left: 6vw;
        }

        .power-text-small {
          font-size: 2vw;
        }

        .power-text-large {
          font-size: 7vw;
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
