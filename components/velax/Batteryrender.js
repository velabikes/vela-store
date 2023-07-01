import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Batteryrender = () => {
  return (
    <div className="Batteryrender">
      <div className="Batteryrender-text-container">
        <p className="Batteryrender-text">
          <span className="Batteryrender-text-small">Garantia</span> <br />
          <br />
          <span className="Batteryrender-text-large">2 ANOS</span>
        </p>
        <p className="Batteryrender-text-details">
          A maior garantia do mercado contra defeito de fabrição. Toda a
          segurança e confiabilidadede que você precisa pra deixar o carro em
          casa. <br></br>
          <br></br>Um projeto da Vela.
        </p>
      </div>
      <img
        className="Batteryrender-image"
        src="/velax/batteryrender.png"
        alt="Vela x - Lights Specs"
      />

      <style jsx>{`
        .Batteryrender {
          display: flex;
          width: 100vw;
          height: 100vh;
          background-color: #ede6de;
        }

        .Batteryrender-text-container {
          position: relative;
          text-align: left;
          width: 32vw;
          font-weight: 500;
          color: ${offBlack};
          margin-top: 10%;
          margin-left: 10vw;
        }

        .Batteryrender-image {
          margin-top: 3vw;
          margin-bottom: 3vw;
          margin-left: 10vw;
          width: 60vw;
          height: auto;
          background-color: #ede6de;
          object-fit: contain;
        }

        .Batteryrender-text-small {
          font-size: 2vw;
          margin-bottom: 10em;
        }

        .Batteryrender-text-large {
          font-size: 4vw;
          font-weight: 800;
        }

        .Batteryrender-text-details {
          font-size: 1.5vw;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Batteryrender;
