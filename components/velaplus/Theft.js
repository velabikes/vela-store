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
              não seja possível recuperá-la, faremos a reposição para você. Sua
              única preocupação vai ser aproveitar o vento no rosto.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background-image: url("/plus/theft_protection_bg.png");
          background-position: center center;
          background-size: cover;
          position: relative;
        }
        .limiter {
          max-width: 1100px;
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
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.5em;
          margin-bottom: 0.8em;
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
            background-size: 400%;
          }
          .limiter {
            display: flex;
          }
          .box {
            margin-top: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default Theft;
