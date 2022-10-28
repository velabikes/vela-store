/* eslint-disable react/prop-types */
import { compose } from 'recompose'
import { lightGray, darkGray } from '../../style/colors'
import withCheckout from '../../containers/withCheckout'
import Button from '../Button'
import Price from '../Price'

const Bar = ({ onContinue, extra, step, checkout }) => {
  return (
    <div className='Bar'>
      <div className='top'>
        <p className='right'>Prazo de produção<br/> de 2 à 3 semanas</p><small>A Vela é feita sob encomenda em São Paulo.</small>
      </div>
      <div className='bottom'>
        <div className='left'>
          <h2>
            {step === 1 && <Price value={10890} />}
            {step === 2 && <Price value={10890 + extra.reduce((a, b) => a + parseInt(b.priceV2.amount), 0)} />}
            {step === 3 && <Price value={10890 + extra.reduce((c, d) => c + parseInt(d.priceV2.amount), 0)} />}
            {step === 4 && 'Total:' && <Price value={checkout.totalPrice} />}
          </h2>
        </div>
        <div className='actions'>
          <Button primary onClick={onContinue}>
            {step === 1 ? 'Continuar' : 
              step === 2 ? 'Adicionar' :
              step === 3 ? 'Adicionar' :
              checkout.lineItems.edges.length ? 'Finalizar' : 'Voltar'
            }
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
        max-width: 6rem;
      }
      .right {
        text-align: left;
      }
      .left {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .left h1 {
        margin-bottom: 0;
      }
      .actions :global(button) {
        margin: 0;
      }
      small {
        max-width: 15em;
      }
      @media only screen and (min-width: 768px) {
        .Bar {
          width: 100%;
          flex-direction: row;
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
          max-width: 6rem;
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
          max-width: 20em;
        }
      }
    `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(Bar)
