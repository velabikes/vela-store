import { offWhite } from "../../style/colors";

const Security = () => {
  return (
    <div className="root">
      <div className="limiter">
        <h2>Segurança e tecnologia.</h2>
        <p className="subtitle">
          Além da proteção contra roubo e furto, o novo Plano Vela+ oferece uma
          série de vantagens exclusivas para você e para sua Vela.
        </p>
        <div className="slider">
          <div className="slider-card">
            <img src="/plus/slider-card-10.png" />
            <h3>10% OFF na compra da sua Vela</h3>
            <p className="card-text">
              Assine e ganhe R$1.000 de desconto na compra da sua Vela.
              Aproveite esse desconto exclusivo no momento da compra ou para
              presentear alguém especial.
            </p>
          </div>
          <div className="slider-card">
            <img src="" />
            <h3>10% OFF</h3>
            <p className="card-text">testando a descrição dessa parte</p>
          </div>
          <div className="slider-card">
            <img src="" />
            <h3>10% OFF</h3>
            <p className="card-text">testando a descrição dessa parte</p>
          </div>
          <div className="slider-card">
            <img src="" />
            <h3>10% OFF</h3>
            <p className="card-text">testando a descrição dessa parte</p>
          </div>
          <div className="slider-card">
            <img src="" />
            <h3>10% OFF</h3>
            <p className="card-text">testando a descrição dessa parte</p>
          </div>
          <div className="slider-card">
            <img src="" />
            <h3>10% OFF</h3>
            <p className="card-text">testando a descrição dessa parte</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background: linear-gradient(221.51deg, #db9612 0%, #ffcc99 100%);
        }
        .limiter {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .box {
          background: #d64315;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 32px;
          gap: 16px;
          margin: 32px;
        }

        .box-text {
          color: ${offWhite};
          line-height: 1.5rem;
        }

        h2 {
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
          text-align: center;
          font-family: "filson-pro";
          padding: 48px 32px 0px 32px;
        }

        p.subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          padding: 32px 32px 32px 32px;
          max-width: 580px;
          margin: 0 auto;
        }
        .box-text-title {
          color: ${offWhite};
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
          margin-bottom: 0.8em;
        }

        .slider {
          text-align: left;
        }

        .slider-card {
          height: 500px;
          background: #f5f1ec;
          padding: 20px;
        }

        .slider-card h3 {
          margin-top: 32px;
          margin-bottom: 12px;
        }
        @media (min-width: 500px) {
          .limiter {
            padding-bottom: 64px;
          }

          h2 {
            padding-top: 128px;
          }

          .slider {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-top: 32px;
          }
        }
        @media (max-width: 500px) {
          .slider {
            display: flex;
            gap: 10px;
            padding: 32px;
            overflow-x: scroll;
          }
          .slider-card {
            min-width: 80vw;
            max-width: 80vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Security;
