import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Batteryrender = () => {
  return (
    <div className="Batteryrender">
      <div className="Batteryrender-text-container">
        <p className="Batteryrender-text">
          <span className="Batteryrender-text-small">BATERIA</span> <br />
          <br />
          <span className="Batteryrender-text-large">2 ANOS DE GARANTIA</span>
        </p>
        <p className="Batteryrender-text-details">
          A maior garantia do mercado contra defeito de fabricação. Toda a
          segurança e confiabilidade que você precisa para deixar o carro em
          casa. <br></br>
          <br></br>Um projeto Vela.
        </p>
      </div>
      <img
        className="Batteryrender-image"
        src="/velax/batteryrender.webp"
        alt="Vela x - Lights Specs"
      />

      <style jsx>{`
        .Batteryrender {
          display: flex;
          width: 100vw;
          height: 100vh;
          background-color: #0e0e0e;
        }

        .Batteryrender-text-container {
          position: relative;
          text-align: left;
          width: 40vw;
          font-weight: 500;
          color: ${offWhite};
          margin-top: 10%;
          margin-left: 10vw;
        }

        .Batteryrender-image {
          margin-top: 3vw;
          margin-bottom: 0vw;
          margin-left: 10vw;
          width: 60vw;
          height: auto;
          background-color: #0e0e0e;
          object-fit: contain;
        }

        .Batteryrender-text-small {
          font-size: 1.6vw;
          font-weight: 800;
        }

        .Batteryrender-text-large {
          font-size: 2.2vw;
          font-weight: 700;
        }

        .Batteryrender-text-details {
          font-size: 1.4vw;
          font-weight: 300;
          margin-top: 2vw;
          margin-bottom: 2vw;
        }
      `}</style>
    </div>
  );
};

export default Batteryrender;
