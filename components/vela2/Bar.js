import Link from 'next/link'
import { lightGray, darkGray } from '../../style/colors'
import Button from '../Button'
import Price from '../Price'

const Bar = ({onContinue, extra}) => {
  return (
    <div className='Bar'>
      <div className='bottom'>
        <p>Especificações técnicas</p>
        <p className='right'>Entrega em 120 dias úteis</p>
      </div>
      <div className='top'>
        <div className='left'>
          <Price value={6890 + extra.reduce((a, b) => a + parseInt(b.priceV2.amount), 0)} />
          <p>Em até 12x sem juros no cartão</p>
        </div>
        <div className='actions'>
          <Button primary onClick={onContinue}>Continuar</Button>
        </div>
      </div>
      <style jsx>{`
      .Bar {
        border: 1px solid ${lightGray};
        padding: 1em;
        display: flex;
        flex-direction: column;
      }
      h1{ 
        color: ${darkGray};
      }
      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        padding 1em 0;
        border-top: 1px solid ${lightGray};
      }
      .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0.5em 0;
      }
      .bottom p {
        max-width: 6rem;
      }
      .right {
        text-align: right;
      }
      .left {
        display: flex;
        flex-direction: column;
      }
      .left p {
        font-size: 0.8;
        max-width: 7rem;
        margin-bottom: 0;
      }
      .actions :global(button) {
        margin: 0 1em;
      }
      @media only screen and (min-width: 768px) {
        .Bar {
          position: relative;
          width: 100%;
          bottom: 0;
          flex-direction: row;
          justify-content: space-between;
          z-index: 2;
        }
        .top {
          width: 50%;
          padding: 0 4em 0 0;
          border: 0;
          align-items: flex-start;
        }
        .top p {
          font-size: 0.7em;
          margin-left: 1em;
          margin-top: 0.4em;
        }
        .bottom {
          padding: 0 0 0 4em;
          font-size: 0.8em;
          width: 33%;
        }
        .bottom p{
          max-width: 6rem;
        }
        .left {
          flex-direction: row;
        }
        .left p{
          max-width: 5rem;
        }
      }
    `}</style>
    </div>
  )
}

export default Bar
