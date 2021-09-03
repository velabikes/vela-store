import Head from "next/head";
import PaddedView from "components/PaddedView";
import TestRideBanner from "components/test-ride/TestRideBanner";
import TestRideImage from "components/test-ride/TestRideImage";
import TestRideFooter from "components/test-ride/TestRideFooter";
import Button from "../../components/Button";
import { white, offWhite, offBlack, velaGreen } from "../../style/colors";

const TestRide = () => (
  <div>
    <Head>
      <title>Test-ride - Vela Bikes</title>
      <link
        rel="alternate"
        hrefLang="pt-br"
        href="https://velabikes.com.br/test-ride"
      />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="application-name" content="Vela Bikes Store" />
      <meta
        name="description"
        content="Você já pode testar a Vela 2 em São Paulo! Conheça a primeira smartbike do Brasil."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" />
      <meta name="twitter:title" content="Test-ride - Vela Bikes" />
      <meta
        name="twitter:description"
        content="Você já pode testar a Vela 2 em São Paulo! Conheça a primeira smartbike do Brasil."
      />
      <meta
        name="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRideVela2.jpg?alt=media&token=67d76c33-aa93-4704-81c8-72ffca0ef7a0"
      />
      <meta property="og:url" content="https://velabikes.com.br/test-ride" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Test-ride - Vela Bikes" />
      <meta property="og:locale" content="pt_BR" />
      <meta
        property="og:description"
        content="Você já pode testar a Vela 2 em São Paulo! Conheça a primeira smartbike do Brasil."
      />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRideVela2.jpg?alt=media&token=67d76c33-aa93-4704-81c8-72ffca0ef7a0"
      />
    </Head>
    <div className="cover">
      <TestRideImage />
      <div className="cta">
        <div className="slogan">
          <h1>Quer pedalar a primeira smartbike do Brasil?</h1>
          <h4>Prepare-se para uma nova forma de se deslocar pela cidade. </h4>
        </div>
      </div>
    </div>
    <PaddedView>
      <TestRideBanner />
    </PaddedView>
    <div className="cover">
      <TestRideFooter />
      <div className="cta-bottom">
        <div className="slogan">
          <h2>Faça parte do futuro. Agora.</h2>
          <p>
            O horário de funcionamento de nossas lojas está sempre atualizado no
            mapa de nossa <a href="/rede/mapa">rede</a>.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        background-color: ${offWhite};
      }
      .cta {
        text-align: center;
        padding: 2rem 3rem 2rem 3rem;
        background-color: ${offBlack};
      }
      .cta h1,
      .cta small,
      .cta h4 {
        color: ${offWhite};
      }
      .cta-bottom {
        text-align: center;
        padding: 2rem 3rem 2rem 3rem;
        background-color: ${white};
      }
      .cta-bottom h2 {
        color: ${offBlack};
      }
      .models-content {
        padding: 2em;
        background-color: ${offWhite};
      }
      .models {
        display: flex;
        flex-direction: column;
      }
      .models > * {
        margin: 2em 0;
        padding: 2em;
        background-color: ${white};
        box-shadow: 0px 0.75rem 1rem -1.25rem rgba(20, 20, 20, 0.8);
        text-align: center;
      }
      .models > * > .profile {
        padding-bottom: 0;
      }

      .actions {
        padding-top: 0.5em;
      }

      @media only screen and (min-width: 768px) {
        .cta h1 {
          color: ${velaGreen};
        }
        .cta h4,
        .cta p,
        .cta small {
          color: ${offBlack};
        }
        .cta-bottom h2 {
          color: ${offBlack};
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 16em;
          right: 4em;
          top: 4em;
          text-align: left;
          background-color: ${white};
          margin-top: 0rem;
          padding: 2em;
        }
        .cta-bottom {
          position: absolute;
          justify-content: center;
          max-width: 20em;
          left: 4em;
          bottom: 4em;
          text-align: left;
          background-color: ${white};
          margin-top: 0rem;
          padding: 2em;
        }
        .models-content {
          margin: 0 auto;
          padding: 2em;
        }
        .models {
          flex-direction: row;
          justify-content: center;
        }
        .models > * {
          width: 18em;
          margin: 2em;
        }
        .models > * > .profile {
          font-size: 0.8em;
        }
        @media only screen and (min-width: 1300px) {
          .cta {
            left: 4em;
            top: 4em;
          }
        }
      }
    `}</style>
  </div>
);

export default TestRide;
