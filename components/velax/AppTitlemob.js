import React from "react";

const AppTitlemob = () => {
  return (
    <div className="apptitle">
      <div className="apptitle-text-container">
        <p className="title">App</p>

        <p className="call">Um universo em expansão sem limites.</p>

        <p className="details">
          Monitore, controle e mantenha o funcionamento da sua Vela X sempre em
          dia com as atualizações remotas. Novas funcionalidades e melhorias de
          forma contínua.
        </p>
      </div>

      <style jsx>{`
        .apptitle {
          position: relative;
          display: cover;
          background-color: #ebbd99;
          margin-top: 0vw;
          padding-top: 25vh;
          padding-left: 0vw;
          text-align: center;
          color: white;
          width: 100vw;
          height: 80vh;
          z-index: 1;
        }

        .apptitle-text-container {
          width: 80vw;
          margin-left: 10vw;
        }
        .title {
          font-size: 3.7vw;
          font-weight: 500;
          margin-bottom: vh;
        }

        .call {
          font-size: 7vw;
          line-height: 1.3;
          font-weight: 500;
        }

        .details {
          font-size: 3.5vw;
          font-weight: 200;
          margin-top: -1vh;
        }
      `}</style>
    </div>
  );
};

export default AppTitlemob;
