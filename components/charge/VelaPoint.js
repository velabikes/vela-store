import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

const VelaPoint = () => (
  <>
    <div className="PointBanner">
      <div className="BannerTitle">
        <SectionHeader
          title="Conheça nossa Rede"
          tagline="No mapa você encontra as lojas da Vela, pontos de recarga pela cidade e assistência autorizada."
        />
        <p></p>
        <a href="/rede/mapa">
          <Button primary>Onde encontrar</Button>
        </a>
      </div>
      <div className="BannerImage">
        <img src="/Vela_Bikes_Rede.jpg" alt="Rede de serviços Vela" />
      </div>
      <style jsx>{`
        .PointBanner {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column-reverse;
          justify-content: space-between;
          margin-top: -50px;
        }
        .BannerTitle {
          padding: 20px 0;
          text-align: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .BannerTitle :global(button) {
          margin-top: 1em;
        }
        @media only screen and (min-width: 768px) {
          .PointBanner {
            flex-direction: row;
            justify-content: space-around;
            margin-top: -100px;
          }
          .BannerTitle {
            width: 30%;
            text-align: left;
          }
          .BannerImage {
            max-width: 60%;
          }
          .BannerImage img {
            max-width: auto;
          }
        }
      `}</style>
    </div>
  </>
);

export default VelaPoint;
