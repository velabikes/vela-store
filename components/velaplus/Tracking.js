const Tracking = () => {
  return (
    <div className="root">
      <div className="bg">
        <div className="limiter">
          <p className="bg-text">
            Compatível com<br></br>Apple ou Samsung
          </p>
          <div className="box">
            <h2>Na palma da mão.</h2>
            <p>
              Localização em tempo real com o rastreamento via AirTag ou
              SmartTag. Você conectado com sua Vela, independente do modelo.
              Integrado com a parte eletrônica, possui um sistema de backup
              capaz de atingir até 15 anos em pleno funcionamento.
            </p>
            <img className="box-icons" src="/plus/hands-box-icons.svg" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background: linear-gradient(221.51deg, #8ecec9 1.22%, #8acca8 100%);
          background-size: cover;
          position: relative;
        }

        h2 {
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
        }
        .bg {
          background-image: url("/plus/hands2.png");
          background-repeat: no-repeat;
          background-position: bottom center;
          background-size: 50vw;
        }
        .limiter {
          max-width: 1200px;
          margin: 0 auto;
        }
        .bg-text {
          position: absolute;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          line-height: 120%;
        }
        .box {
          background: #ede6de;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 32px;
          gap: 16px;
          margin: 32px;
          font-family: "Filson-Pro";
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 150%;
        }

        .box-icons {
          width: 250px;
        }
        @media (min-width: 880px) {
          .root {
            padding-top: 50px;
          }

          .bg {
            background-position: calc(56% - 300px) bottom;
            background-size: contain;
          }
          .bg-text {
            left: calc(52% - 300px);
            transform: translateX(-50%);
            bottom: 40px;
          }
          .limiter {
            display: flex;
            flex-direction: row-reverse;
            align-items: end;
            min-height: 720px;
          }
          .box {
            min-width: 300px;
            width: 40%;
            margin-top: 00px;
          }
        }
        @media (max-width: 880px) {
          .bg {
            background-size: 155%;
            background-position: 52% 5em;
          }
          .bg-text {
            left: 50%;
            transform: translateX(-50%);
            top: 120vw;
          }
          .limiter {
            display: flex;
          }
          .box {
            margin-top: 600px;
          }
        }
        @media (min-width: 1800px) {
          .root {
            padding-top: 50px;
          }

          .bg {
            background-position: calc(56% - 300px) bottom;
            background-size: contain;
          }
          .bg-text {
            left: calc(52% - 300px);
            transform: translateX(-50%);
            bottom: 40px;
          }
          .limiter {
            display: flex;
            flex-direction: row-reverse;
            align-items: end;
            min-height: 1000px;
          }
          .box {
            min-width: 300px;
            width: 40%;
            margin-top: 00px;
          }
        }
      `}</style>
    </div>
  );
};

export default Tracking;
