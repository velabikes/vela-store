import Link from "next/link";
import Button from "components/Button";
import SectionHeader from "components/SectionHeader";

const VelaPoint = () => (
  <div className="content">
    <div className="PointFigure">
      <div className="FigureWrapper">
        <a href="/network/map">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FRedeVela.png?alt=media&token=d63d5018-1ab5-4874-b5f3-7cc623619a41"
            alt="Rede Vela"
          />
          </a>
      </div>
      <div className="PointContent">
        <SectionHeader
          title="Rede"
          tagline="Confira o mapa para conhecer as lojas da Vela, recarregar em pontos parceiros ou procurar assistência autorizada."
        />
        <p>
          Entregamos em todo o Brasil, com diversos pontos de apoio para você
          velejar com tranquilidade.
        </p>
        <Link href="/network/map" as="/rede/mapa">
          <a>
            <Button primary>Onde encontrar</Button>
          </a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .FigureWrapper {
        display: flex;
        flex-direction: column;
        align-items: left;
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
        .FigureWrapper img {
          max-width: 85%;
        }
        .PointFigure {
          flex-direction: row;
          padding: 2em 0 0 0;
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
