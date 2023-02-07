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
              SmartTag.Você conectado com sua Vela, independente do modelo.
              Integrado com a parte eletrônica, possui um sistema de backup
              capaz de atingir até 15 anos em pleno funcionamento.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background: linear-gradient(221.51deg, #8ecec9 1.22%, #8acca8 100%);
          background-size: cover;
          position: relative;
        }
        .bg {
          background-image: url("/plus/hands.png");
          background-repeat: no-repeat;
          background-position: bottom center;
        }
        .limiter {
          max-width: 1100px;
          margin: 0 auto;
        }
        .bg-text {
          position: absolute;
          text-align: center;
          font-size: 16px;
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
        }
        @media (min-width: 768px) {
          .bg {
            background-position: calc(50% - 300px) bottom;
          }
          .bg-text {
            left: calc(50% - 300px);
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
            min-width: 400px;
            width: 40%;
          }
        }
        @media (max-width: 768px) {
          .bg {
            background-size: 153%;
            background-position: 57% 2em;
          }
          .bg-text {
            left: 50%;
            transform: translateX(-50%);
            top: 100vw;
          }
          .limiter {
            display: flex;
          }
          .box {
            margin-top: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default Tracking;
