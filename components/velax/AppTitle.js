import React from "react";

const AppTitle = () => {
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
          padding-top: 30vh;
          padding-left: 0vw;
          text-align: center;

          color: #2f2f2f;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }

        .apptitle-text-container {
          width: 50vw;
          margin-left: 25vw;
        }
        .title {
          font-size: 2vw;
          font-weight: 500;
          margin-bottom: vh;
        }

        .call {
          font-size: 4vw;
          line-height: 1.3;
          font-weight: 500;
        }

        .details {
          font-size: 2vw;
          font-weight: 200;
          margin-top: -1vh;
        }
      `}</style>
    </div>
  );
};

export default AppTitle;
