const Theft = () => {
  return (
    <div className="root">
      <div className="limiter">
        <div className="box">
          <h2>Na palma da mão.</h2>
          <p>
            Localização em tempo real com o rastreamento via AirTag ou
            SmartTag.Você conectado com sua Vela, independente do modelo.
            Integrado com a parte eletrônica, possui um sistema de backup capaz
            de atingir até 15 anos em pleno funcionamento.
          </p>
        </div>
      </div>
      <style jsx>{`
        .root {
          background-image: url("/plus/theft_protection_bg.jpg");
          background-position: center center;
          background-size: cover;
          position: relative;
        }
        .limiter {
          max-width: 1100px;
          margin: 0 auto;
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
          .root {
            background-position: 42% bottom;
            background-size: cover;
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

export default Theft;
