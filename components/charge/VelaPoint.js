import Link from "next/link";
import Button from "components/Button";
import SectionHeader from "components/SectionHeader";

const VelaPoint = () => (
  <div className="content">
    <div className="PointFigure">
      <div className="PointContent">
        <SectionHeader
          title="Rede"
          tagline="Confira o mapa para conhecer as lojas da Vela, recarregar em pontos parceiros ou procurar assistência autorizada para a sua smartbike."
        />
        <p>
          Entregamos em todo o Brasil, com diversos pontos de apoio para você velejar com tranquilidade.
        </p>
        <Link href="/network/map" as="/rede/mapa">
          <Button primary>Onde encontrar</Button>
        </Link>
      </div>
      <div className="FigureWrapper">
        <a href="/network/map" as="/rede/mapa">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FRedeVela.png?alt=media&token=d63d5018-1ab5-4874-b5f3-7cc623619a41"
            alt="Rede Vela"
          />
          </a>
      </div>
    </div>
    <style jsx>{`
      .content {
        background-color: #ffffff;
      }
      .FigureWrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
      }
      .FigureWrapper img {
        max-width: 100%;
      }
      .PointFigure {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 2em 0em;
      }
      .PointContent {
        text-align: center;
        padding: 1em;
      }
      .PointContent :global(button) {
        margin: 1em 0 0 0;
      }
      @media only screen and (min-width: 768px) {
        .FigureWrapper {
          justify-content: flex-end;
          align-items: flex-end;
        }
        .FigureWrapper img {
          max-width: 100%;
        }
        .PointFigure {
          flex-direction: row;
          justify-content: center;
          padding: 1em 0 1em 0;
        }
        .PointContent {
          max-width: 20rem;
          padding-top: 8em;
          text-align: left;
        }
      }
    `}</style>
  </div>
);
export default VelaPoint;
