import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Batteryrendermob = () => {
  return (
    <div className="Batteryrender">
      <div className="Batteryrender-text-container">
        <p className="Batteryrender-text">
          <div className="garantia">
            <span className="Batteryrender-text-small">Garantia</span> <br />
            <br />
          </div>
          <span className="Batteryrender-text-large">2 ANOS</span>
        </p>
        <p className="Batteryrender-text-details">
          Desde 2017 a maior garantia do mercado contra defeito de fabrição.
          Toda a segurança e confiabilidade que você precisa pra deixar o carro
          em casa. <br></br>
          <br></br>Um projeto Vela.
        </p>
      </div>
      <img
        className="Batteryrender-image"
        src="/velax/batteryrender.png"
        alt="Vela x - Lights Specs"
      />

      <style jsx>{`
        .Batteryrender {
          display: cover;
          width: 100vw;
          height: 100vh;
          background-color: #0e0e0e;
        }

        .Batteryrender-text-container {
          position: absolute;
          text-align: left;
          width: 70vw;
          font-weight: 500;
          color: ${offWhite};
          margin-top: 20%;
          margin-left: 10vw;
        }
        .garantia {
          margin-bottom: -2.5vh;
        }
        .Batteryrender-image {
          margin-top: 15vh;
          margin-left: 0vw;
          width: 100vw;
          height: 130%;
          background-color: #0e0e0e;
          object-fit: contain;
        }

        .Batteryrender-text-small {
          font-size: 5vw;
          padding-bottom: 2vh;
        }

        .Batteryrender-text-large {
          font-size: 8vw;
          font-weight: 800;
        }

        .Batteryrender-text-details {
          font-size: 4vw;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Batteryrendermob;
