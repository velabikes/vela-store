import React from "react";

const Regen = () => {
  return (
    <div className="regen">
      <div className="regen-text-container">
        <p className="regen-text">
          <span className="regen-text-small">Até </span>{" "}
          <span className="regen-text-large"> 550W</span>
        </p>
        <p className="regen-text-details">
          Potência de pico com o acionamento <br></br>do boost e 45 N.m de
          torque na roda.
        </p>
      </div>
      <img
        className="regen-image"
        src="/velax/regen.png"
        alt="Vela x - Regen"
      />

      <style jsx>{`
        .regen {
          display: flex;
        }

        .regen-image {
          width: 60%;
        }

        .regen-text-container {
          text-align: left;
          font-weight: 500;
          margin-top: 14vw;
          margin-left: 7vw;
        }

        .regen-text-small {
          font-size: 2vw;
        }

        .regen-text-large {
          font-size: 7vw;
          font-weight: 800;
        }

        .regen-text-details {
          font-size: 1.35vw;
        }
      `}</style>
    </div>
  );
};

export default Regen;
