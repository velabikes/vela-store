import PaddedView from "components/PaddedView";
import {
  offWhite,
  offBlack,
  white,
  lightGray,
  velaGreen,
  midGray,
} from "../../style/colors";
import Button from "../Button";

const Highlight = () => {
  return (
    <PaddedView style={{ background: { lightGray } }}>
      <div className="Highlight">
        <div className="content">
          <p>
            Dois modelos diferentes pra você escolher, além de várias cores e
            combinações:
          </p>
        </div>
        <div className="models">
          <div className="qr">
            <a href="/vela">
              <img
                alt="Vela 2 Quadro reto"
                src="/static/Vela_Bikes_Vela2_Quadro_Reto_Verde_Creme.webp"
              />
              <div className="models-content">
                <h3>Quadro reto</h3>
                <span>3 tamanhos</span>
                <span>1,60m até 2m</span>
              </div>
            </a>
          </div>
          <div className="qb">
            <a href="/vela">
              <img
                alt="Vela 2 Quadro baixo"
                src="/static/Vela_Bikes_Vela2_Quadro_Baixo_Azul_Creme.webp"
              />
              <div className="models-content">
                <h3>Quadro baixo</h3>
                <span>2 tamanhos</span>
                <span>1,50m até 1,85m</span>
              </div>
            </a>
          </div>
        </div>
        <div className="color">
          <p>
            Única no Brasil com aplicativo companheiro, sistema regenerativo e
            rastreamento GPS.
          </p>
        </div>
      </div>
      <div className="price">
        <h1>
          Faça parte do futuro. <br></br>Agora.
        </h1>
        <div className="actions">
          <a href="/vela">
            <Button primary>Saiba mais</Button>
          </a>
        </div>
      </div>
      <style jsx>{`
          .Highlight {
            padding: 2em 0em;
          }
          .content{
            background-color: ${midGray};
            padding: 1rem 1rem;
          }
          .content p, .color p {
            color: ${offBlack};
            text-align: center;
          }
          .models {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .models span {
            color: ${offBlack}
          }
          .models img {
            background-color: ${offWhite};
            padding: 2rem 0;
          }
          .models-content {
            padding: 2rem;
            background-color: ${white};
            text-align: center;
            box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
          }
          .qr {
            margin-bottom: 1em;
          }
          .models span {
            display: block;
          }
          .color {
            background-color: ${midGray};
            padding: 1rem;
          }
          .price {
            display: flex;
            flex-direction: column;
            color: ${offWhite};
            padding: 0em 2em 2em 2em;
            justify-content: center;
          }
           .price h1{
            display: flex;
            flex-direction: column;
            color: ${offBlack};
            text-align: center;
            justify-content: center;
          }
          .price h2{
            color: ${offBlack};
            text-align: center;
          }
          .price h3{
            color: ${offWhite};
          }
          .actions {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 10em;
            margin-top: 1em;
          }
          .actions :global(button) {
            margin: 0;
          }
          .left, .right {
            padding: 2em;
            text-align: center;
          }
          @media only screen and (min-width: 768px) {
            .Highlight {
              padding: 4em 2em;
            }
            .content {
              width: 30em;
              height: 15em;
              display: flex;
              justify-content: flex-start;
              z-index: 0;
              padding: 2rem;
              margin: 0 auto;
            }
            .content p {
              max-width: 14em;
              text-align: left;
            }
            .models {
              flex-direction: row;
              justify-content: center;
              position: relative;
              z-index: 1;
            }
            img {
              max-width: 30em;
            }
            .qr {
              margin: -5em 2em 0 2em;
            }
            .qb {
              margin: -10em 2em 0 2em;
            }
            .color {
              width: 30em;
              height: 15em;
              display: flex;
              justify-content: flex-end;
              z-index: 0;
              padding: 2rem;
              margin: -10em auto 0 auto;
            }
            .color p {
              max-width: 12em;
              text-align: right;
              align-self: flex-end;
            }
            .price {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 0 2em 2em 2em;  
            }
            }
          }
        `}</style>
    </PaddedView>
  );
};

export default Highlight;
