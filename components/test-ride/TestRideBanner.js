import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

const TestRideBanner = () => (
  <Section>
    <div className="TestRideBanner">
      <div className="BannerTitle">
        <SectionHeader
          title="Você já pode testar a Vela 2 em São Paulo!"
          tagline="Aproveite para descobrir a sensação única de pedalar uma bicicleta elétrica, com todo o apoio do Vela App pelo caminho."
        />
        <p>
          O teste é gratuito e sem compromisso, pode ser realizado sozinho, com
          amigos ou acompanhado de um especialista Vela. Agende um horário
          online e venha pedalar!
        </p>
        {/* <p>
          <i>R. Joaquim Antunes, 631 - Pinheiros</i>
        </p> */}
        <div className="actions">
          <a href="https://vela-bikes.reservio.com/">
            <Button primary>Agendar</Button>
          </a>
        </div>
      </div>
      <div className="BannerImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Ftestride%2FTestRideVelaBikes.png?alt=media&token=785ee1b6-ecfe-4e1a-83aa-71871069e4f4"
          alt="Test-ride Vela Bikes"
        />
      </div>
      <style jsx>{`
        .TestRideBanner {
          position: relative;
          display: flex;
          flex-direction: column-reverse;
        }
        .BannerTitle {
          padding: 20px 0;
          text-align: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }

        @media only screen and (min-width: 768px) {
          .TestRideBanner {
            flex-direction: row;
            justify-content: space-around;
          }
          .BannerTitle {
            width: 30%;
            text-align: left;
          }
        }
      `}</style>
    </div>
  </Section>
);

export default TestRideBanner;
