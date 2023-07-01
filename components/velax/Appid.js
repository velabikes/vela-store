import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Appid = () => {
  return (
    <div className="Appid">
      <div className="Appid-text-container">
        <p className="Appid-text">
          <span className="Appid-text-small">Garantia</span> <br />
          <br />
          <span className="Appid-text-large">2 ANOS</span>
        </p>
        <p className="Appid-text-details">
          A maior garantia do mercado contra defeito de fabrição. Toda a
          segurança e confiabilidadede que você precisa pra deixar o carro em
          casa. <br></br>
          <br></br>Um projeto da Vela.
        </p>
      </div>
      <img
        className="Appid-image"
        src="/velax/Appid.png"
        alt="Vela x - Lights Specs"
      />

      <style jsx>{`
        .Appid {
          display: flex;
          width: 100vw;
          height: 80vh;
          background-color: #ede6de;
        }

        .Appid-text-container {
          position: relative;
          text-align: left;
          width: 32vw;
          font-weight: 500;
          color: ${offBlack};
          margin-top: 10%;
          margin-left: 10vw;
        }

        .Appid-image {
          margin-top: 3vw;
          margin-bottom: 3vw;
          margin-left: 10vw;
          width: 60vw;
          height: auto;
          background-color: #ede6de;
          object-fit: contain;
        }

        .Appid-text-small {
          font-size: 2vw;
          margin-bottom: 10em;
        }

        .Appid-text-large {
          font-size: 4vw;
          font-weight: 800;
        }

        .Appid-text-details {
          font-size: 1.5vw;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Appid;
