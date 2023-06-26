import React from "react";

const Lightspecs = () => {
  return (
    <div className="lightspecs">
      <img
        className="lightspecs-image"
        src="/velax/lightspecs.png"
        alt="Vela x - lightspecs"
      />
      <div className="lightspecs-text-container">
        <p className="lightspecs-text">
          <span className="lightspecs-text-small">Até </span>{" "}
          <span className="lightspecs-text-large"> 550W</span>
        </p>
        <p className="lightspecs-text-details">
          Potência com o acionamento <br></br>do boost e 45 Nm de torque.
        </p>
      </div>

      <style jsx>{`
        .lightspecs {
          display: cover;
        }

        .lightspecs-image {
      position: relative;
          width: 100vw;
          height: auto;
          z-index: 1;
        }

        .lightspecs-text-container {
          positionÇ absolute;
          text-align: left;
   
          font-weight: 500;
          margin-top: -20vw;
          margin-left: 72vw;
          margin-bottom: 12.55vw;
        }

        .lightspecs-text-small {
          font-size: 1.35vw;
        }

        .lightspecs-text-large {
          font-size: 5.5vw;
          font-weight: 800;
        }

        .lightspecs-text-details {
          font-size: 1.35vw;
        }
      `}</style>
    </div>
  );
};

export default Lightspecs;
