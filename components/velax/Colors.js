import React from "react";

const Colors = () => {
  return (
    <div className="Colors">
      <img
        className="Colors-image"
        src="/velax/colors.jpg"
        alt="Vela x - Colors"
      />
      <div className="Colors-text-container">
        <p className="Colors-text">
          <span className="Colors-text-small">Até </span>{" "}
          <span className="Colors-text-large"> 550W</span>
        </p>
        <p className="Colors-text-details">
          Potência com o acionamento <br></br>do boost e 45 Nm de torque.
        </p>
      </div>

      <style jsx>{`
        .Colors {
          display: cover;
        }

        .Colors-image {
      position: relative;
          width: 100vw;
          height: 1000vh;
          z-index: 1;
        }

        .Colors-text-container {
          positionÇ absolute;
          text-align: left;
   
          font-weight: 500;
          margin-top: -20vw;
          margin-left: 72vw;
          margin-bottom: 12.55vw;
        }

        .Colors-text-small {
          font-size: 1.35vw;
        }

        .Colors-text-large {
          font-size: 5.5vw;
          font-weight: 800;
        }

        .Colors-text-details {
          font-size: 1.35vw;
        }
      `}</style>
    </div>
  );
};

export default Colors;
