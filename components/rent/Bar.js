/* eslint-disable react/prop-types */
import { compose } from "recompose";
import { lightGray, darkGray } from "../../style/colors";
import withCheckout from "../../containers/withCheckout";
import Button from "../Button";
import Price from "../Price";

const Bar = ({ onContinue, extra, step, checkout, model, activeButton }) => {
  const priceExtra =
    (model.time === "Anual"
      ? 5438.5
      : model.time === "Semestral"
      ? 3582.0
      : 1885.5) + extra.reduce((a, b) => a + parseInt(b.priceV2.amount), 0);

  return (
    <div className="Bar">
      <div className="top">
        <div className="right">
          Entrega de
          <br /> 4 até 8 semanas
        </div>
        <p>
          A Vela é um produto sob medida e artesanal. Por conta do COVID-19, o
          prazo de entrega se encontra estendido e pode sofrer alterações.
        </p>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>
            {step === 1 && (
              <Price
                value={
                  model.time === "Anual"
                    ? 5438.5 / 365
                    : model.time === "Semestral"
                    ? 3582.0 / 180
                    : 1885.5 / 90
                }
                period={"/dia"}
              />
            )}
            {step === 2 && (
              <Price
                value={
                  model.time === "Anual"
                    ? priceExtra / 365
                    : model.time === "Semestral"
                    ? priceExtra / 180
                    : priceExtra / 90
                }
                period={"/dia"}
              />
            )}
            {step === 3 && (
              <Price
                value={
                  model.time === "Anual"
                    ? checkout.totalPrice / 365
                    : model.time === "Semestral"
                    ? checkout.totalPrice / 180
                    : checkout.totalPrice / 90
                }
                period={"/dia"}
              />
            )}
          </h2>
        </div>
        <div className="actions">
          {step === 1 ? (
            <Button primary onClick={onContinue}>
              Continuar
            </Button>
          ) : step === 2 ? (
            <Button primary onClick={onContinue}>
              Adicionar
            </Button>
          ) : activeButton === false ? (
            <Button disabled onClick={""}>
              Finalizar
            </Button>
          ) : activeButton === true && checkout.lineItems.edges.length ? (
            <Button disabled onClick={""}>
              Finalizar
            </Button>
          ) : (
            <Button primary onClick={onContinue}>
              Voltar
            </Button>
          )}
        </div>
      </div>
      <style jsx>{`
      .Bar {
        border-top: 1px solid ${lightGray};
        padding: 1em;
        display: flex;
        flex-direction: column;
      }
      h2 { 
        color: ${darkGray};
      }
      h3 { 
        color: ${darkGray};
        margin-bottom: 0;
      }
      .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding 1em 0.5em;
        border-top: 1px solid ${lightGray};
      }
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.5em 0.5em 1.5em 0.5em;
      }
      .right {
        text-align: left;
        max-width: 6rem;
      }
      .left {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .left p {
        font-size: 0.7em
      }
      .actions :global(button) {
        margin: 0;
      }
      .top p {
        max-width: 15em;
        font-size: 0.8em
      }
      @media only screen and (min-width: 768px) {
        .Bar {
          width: 100%;
          flex-direction: row;
        }
        .bottom {
          padding: 0 3em 0 0;
          border: 0;
        }
        .bottom h2 {
          margin: 0;
        }
        .top {
          font-size: 0.8em;
          display: flex;
          justify-content: center;
          padding: 0 0 0 3em;
        }
        .right {
          max-width: 6rem;
          text-align: center;
          margin: 0;
          text-align: right;
          margin-right: 0.8em;
        }
        .left {
          flex-direction: column;
          padding-right: 2.5em;
        }
        .top p {
          border-left: 1px ${lightGray} solid;
          padding-left: 1em;
          max-width: 20em;
          margin-bottom: 0;
        }
      }
    `}</style>
    </div>
  );
};

export default compose(withCheckout)(Bar);
