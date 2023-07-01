import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Motorbrake = () => {
  return (
    <div className="Motorbrake">
      <img
        className="Motorbrake-image"
        src="/velax/Motorbrake.png"
        alt="Vela X - Motor Brake"
      />
      <div className="Motorbrake-text-container">
        <p className="Motorbrake-text">
          <span className="Motorbrake-text-small">Garantia</span> <br />
          <br />
          <span className="Motorbrake-text-large">2 ANOS</span>
        </p>
        <p className="Motorbrake-text-details">
          A maior garantia do mercado contra defeito de fabrição. Toda a
          segurança e confiabilidadede que você precisa pra deixar o carro em
          casa. <br></br>
          <br></br>Um projeto da Vela.
        </p>
      </div>

      <style jsx>{`
        .Motorbrake {
          display: flex;
          width: 100vw;
          height: 100vh;
          background-color: #ede6de;
        }

        .Motorbrake-text-container {
          position: relative;
          text-align: left;
          width: 32vw;
          font-weight: 500;
          color: ${offBlack};
          margin-top: 23vw;
          margin-left: 5vw;
        }

        .Motorbrake-image {
          margin-top: 0vw;
          margin-bottom: 0vw;
          margin-left: 0vw;
          width: 70vw;
          height: 100vh;
          background-color: #ede6de;
          object-fit: contain;
        }

        .Motorbrake-text-small {
          font-size: 2vw;
          margin-bottom: 10em;
        }

        .Motorbrake-text-large {
          font-size: 4vw;
          font-weight: 800;
        }

        .Motorbrake-text-details {
          font-size: 1.5vw;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Motorbrake;
