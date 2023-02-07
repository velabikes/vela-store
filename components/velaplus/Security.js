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
          font-weight: 700;
          font-size: 32px;
          line-height: 120%;
          text-align: center;
          font-family: "filson-pro";
          padding: 48px 32px 0px 32px;
        }

        p.subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          padding: 32px 32px 16px 32px;
        }
        .box-text-title {
          color: ${offWhite};
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
          margin-bottom: 0.8em;
        }

        .slider {
          display: flex;
          gap: 10px;
          padding: 32px;

          overflow-x: scroll;
          text-align: left;
        }

        .slider-card {
          min-width: 80vw;
          height: 410px;
          background: #f5f1ec;
          padding: 20px;
        }

        .slider-card h3 {
          margin-top: 32px;
          margin-bottom: 12px;
        }
        @media (min-width: 500px) {
          .root {
            background-image: url("/plus/theft_protection_bg.png");
            background-position: center center;
            background-size: cover;
            position: relative;
          }

          .box {
            min-width: 400px;
            width: 40%;
          }
        }
        @media (max-width: 500px) {
          .box {
            margin-top: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default Security;
