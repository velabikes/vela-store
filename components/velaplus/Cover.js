import SignalAnimation from "./SignalAnimation";

const Cover = () => (
  <div className="root">
    <div className="animation">
      <SignalAnimation />
    </div>
    <div className="limiter">
      <img className="title" src="/plus/new_vplus.svg" alt="Title" />
      <h1 className="text1">
        Sua Vela ainda mais segura com AirTag ou SmartTag integrados.
      </h1>
      <h2 className="text2">
        Disponível para a Vela 1, Vela S, Vela 2 e Vela X.
      </h2>
      <img className="tags" src="/plus/Tags.gif" alt="Tags" />
      <img
        className="bike1"
        src="/plus/Main_bike_desktop.png"
        alt="Assinatura Segurança Bike Elétrica"
      />
    </div>
    <style jsx>{`
      .root {
        background-image: url("/plus/BG_Vplus.png");
        width: 100%;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        position: relative;
      }

      .desktop {
        display: none;
      }

      .limiter {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
      }

      .title {
        width: 338px;
        height: auto;
        margin-top: 5em;
      }
      .text1 {
        margin-top: 2em;
        font-size: 25px;
        font-weight: 400;
      }
      .text2 {
        margin-top: 0.2em;
        font-size: 18px;
        font-weight: 300;
      }
      .tags {
        max-width: 300px;
        margin-top: 3em;
      }
      .bike1 {
        max-width: 860px;
      }
      .animation {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
      }

      @media only screen and (min-width: 880px) {
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }

      @media only screen and (max-width: 880px) {
        .bike1 {
          position: relative;
          left: -15%;
          width: 130%;
        }

        .tags {
          max-width: 50%;
        }
      }
    }
    `}</style>
  </div>
);

export default Cover;
