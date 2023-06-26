import React from "react";

const Regen = () => {
  return (
    <div className="regen">
      <img
        className="regen-image"
        src="/velax/regen.png"
        alt="Vela x - Regen "
      />
      <div className="regen-text-container">
        <p className="regen-text">
          <span className="regen-text-small">Até </span>{" "}
          <span className="regen-text-large"> 550W</span>
        </p>
        <p className="regen-text-details">
          Potência com o acionamento <br></br>do boost e 45 Nm de torque.
        </p>
      </div>

      <style jsx>{`
        .regen {
          display: cover;
        }

        .regen-image {
          height: auto;
          width: 80vw;
        }

        .regen-text-container {
          position: absolute;
          text-align: left;
          top: 30%;
          font-weight: 500;
          margin-top: -30vw;
          margin-left: 76vw;
        }

        .regen-text-small {
          font-size: 1.35vw;
        }

        .regen-text-large {
          font-size: 5.5vw;
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
