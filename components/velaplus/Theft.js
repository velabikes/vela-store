import { offWhite } from "../../style/colors";

const Theft = () => {
  return (
    <div className="root">
      <div className="limiter">
        <div className="box">
          <div className="box-text">
            <div className="box-text-title">
              Proteção contra roubo, furto e acidentes.
            </div>
            <p>
              Segurança em primeiro lugar para Velejar sem medo. Em caso de
              roubo ou furto, bloqueamos sua bike, ajudamos na busca, e, caso
              não seja possível recuperá-la, faremos a reposição para você.
              Verifique as condições do contrato para receber sua nova Vela.
              Nosso objetivo é que a sua única preocupação seja curtir o vento
              no rosto.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background-image: url("/plus/theft_protection_bg_mobile.jpg");
          background-position: center center;
          background-size: cover;
          position: relative;
        }
        .limiter {
          max-width: 1200px;
          margin: 0 auto;
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

        .box-text-title {
          color: ${offWhite};
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
          margin-bottom: 0.8em;
        }
        @media (min-width: 880px) {
          .root {
            background-image: url("/plus/theft_protection_bg.jpg");
            background-position: center center;
            background-size: cover;
            position: relative;
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
            font-family: "Filson-Pro";
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 150%;
          }
        }
        @media (max-width: 880px) {
          .limiter {
            display: flex;
          }
          .box {
            margin-top: 600px;
          }
        }
        @media (min-width: 1800px) {
          .root {
            background-image: url("/plus/theft_protection_bg_max.jpg");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 101%;
            position: relative;
          }
          .limiter {
            display: flex;
            flex-direction: row-reverse;
            align-items: end;
            min-height: 1000px;
            max-width: 1200px;
          }
          .box {
            min-width: 400px;

            width: 40%;
            font-family: "Filson-Pro";
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 150%;
          }
        }
      `}</style>
    </div>
  );
};

export default Theft;
