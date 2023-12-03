/* eslint-disable react/prop-types */
import { compose } from "recompose";
import { lightGray, darkGray, offWhite, white } from "../../style/colors";
import withCheckout from "../../containers/withCheckout";
import Button from "../Button";
import Price from "../Price";

const Bar = ({ onContinue, extra, step, checkout }) => {
  return (
    <div className="Bar">
      <div className="top">
        <p className="right">
          Prazo:
          <br />
        </p>
        <small>
          {" "}
          Quantidade limitada do primeiro lote com o prazo de 2-3 semanas.
        </small>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>
            {step === 1 && <Price value={11890} />}
            {step === 2 && (
              <Price
                value={
                  11890 +
                  extra.reduce((a, b) => a + parseInt(b.priceV2.amount), 0)
                }
              />
            )}
            {step === 3 && (
              <Price
                value={
                  11890 +
                  extra.reduce((c, d) => c + parseInt(d.priceV2.amount), 0)
                }
              />
            )}
            {step === 4 && "Total:" && (
              <Price value={checkout.totalPrice.amount} />
            )}
          </h2>
        </div>
        <div className="actions">
          <Button primary onClick={onContinue}>
            {step === 1
              ? "Continuar"
              : step === 2
              ? "Adicionar"
              : step === 3
              ? "Adicionar"
              : checkout.lineItems.edges.length
              ? "Finalizar"
              : "Voltar"}
          </Button>
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

        font-size: 2vh;
        font-weight: 300;
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
      .top p {
     max-width: 15rem;
      }
      .right {
        text-align: left;
        font-size: 18px;
      }
      .left {
        display: flex;
        flex-direction: row;
        align-items: center;
    
      
      }

      .actions :global(button) {
        margin: 0;
      }
      small {
        max-width: 200px;
        font-size: 14px;
      }
      @media only screen and (min-width: 868px) {
        .Bar {
          width: 100%;
          height: 10vh;
          flex-direction: row;
          position: relative;
          margin-top: 0
          z-index: 5;
          background-color: ${white};
        }
        .bottom {
          padding: 0 6em 0 0;
          border: 0;
        }
        .bottom h2 {
          margin: 0;
        }
        .top {
          font-size: 0.8em;
          display: flex;
          justify-content: center;
          padding: 0 0 0 6em;
        }
        .top p{
          max-width: 10rem;
          text-align: center;
          margin: 0;
        }
        .top .right {
          text-align: right;
          margin-right: 0.8em;

        }
        .left {
          flex-direction: column;
        }
        .left h2 {
          padding-right: 1.5em;
        }
        small {
          border-left: 1px ${lightGray} solid;
          padding-left: 1em;
          max-width: 15em;
        }
      }
    `}</style>
    </div>
  );
};

export default compose(withCheckout)(Bar);
