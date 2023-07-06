import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Batteryrendermob = () => {
  return (
    <div className="Batteryrender">
      <div className="Batteryrender-text-container">
        <p className="Batteryrender-text">
          <div className="garantia">
            <span className="Batteryrender-text-small">BATERIA</span> <br />
            <br />
          </div>
          <br></br>
          <span className="Batteryrender-text-large">2 ANOS DE GARANTIA</span>
        </p>
        <p className="Batteryrender-text-details">
          Desde 2017 a maior garantia do mercado contra defeito de fabricação.
          Toda a segurança e confiabilidade que você precisa para deixar o carro
          em casa. <br />
          <br />
          Um projeto Vela.
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
          width: 80vw;
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
          font-size: 3.5vw;
          margin-bottom: 4vh; /* Adjust the margin-bottom value as needed */
          font-weight: 800;
        }

        .Batteryrender-text-large {
          font-size: 6vw;
          font-weight: 700;
          line-height: 0.8; /* Adjust the line height value as needed */
          margin-top: 10vh;
          margin-bottom: 2vh;
        }

        .Batteryrender-text-details {
          font-size: 3.8vw;
          font-weight: 300;
          line-height: 1.5; /* Adjust the line height value as needed */
          margin-top: 2vh;
          margin-bottom: 2vh;
        }
      `}</style>
    </div>
  );
};

export default Batteryrendermob;
