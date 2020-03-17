import PaddedView from 'components/PaddedView'
import Link from 'next/link'
import { offWhite, offBlack, midGray, white } from '../../style/colors'
import Button from '../Button'

const Highlight = () => {
  return (
    <PaddedView style={{ background: '#1D1D1D' }}>
      <div className='content'>
        <p>O melhor desempenho para a cidade, em dois modelos diferentes</p>
      </div>
      <div className='models'>
        <div className='qr'>
          <img alt='Vela 2 Quadro reto' src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/38f52e38-046a-4b9a-b38b-652ea463ddbd.png' />
          <p>
            <h3>Quadro reto</h3>
            <span>3 tamanhos</span>
            <span>1,60m até 2m</span>
          </p>
        </div>
        <div className='qb'>
          <img alt='Vela 2 Quadro reto' src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/0aed083a-3ee3-41db-9acf-fa78afb7010f.png' />
          <p>
            <h3>Quadro baixo</h3>
            <span>2 tamanhos</span>
            <span>1,58m até 1,90m</span>
          </p>
        </div>
      </div>
      <div className='color'>
        <p>Com cinco cores exclusivas para você escolher.</p>
      </div>
      <div className='price'>
        <div className='left'>
          <h3>Compra</h3>
          <p>R$ 600 na reserva +<br /> R$ 5.890 na entrega</p>
        </div>
        <div className='actions'>
          <Link href='/vela'>
            <Button primary>Reservar</Button>
          </Link>
        </div>
        <div className='right'>
          <h3>Aluguel</h3>
          <p>R$ 600 na reserva +<br /> R$ 349/mês na entrega</p>
        </div>
      </div>
      <style jsx>{`
          .content{
            background-color: ${offBlack};
            padding: 1rem;
            margin-bottom: 1rem;
          }
          .content p, .color p {
            color: ${offWhite};
            text-align: center;
          }
          .models {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .models img {
            background-color: ${offWhite};
            padding: 2rem 0;
          }
          .models p {
            padding: 2rem;
            background-color: ${white};
            text-align: center;
            box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
          }
          .models span {
            display: block;
          }
          .color {
            background-color: ${offBlack};
            padding: 1rem;
          }
          .price {
            display: flex;
            flex-direction: column;
            color: ${offWhite};
            padding: 2em;
            justify-content: center;
          }
          .price > * {
            min-width: 33%;
          }
          .price h3{
            color: ${offWhite};
          }
          .actions {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .actions :global(button) {
            margin: 0;
          }
          .left {
            padding: 2em;
            align-self: flex-start;
            border-left: 1px solid ${midGray};
          }
          .right {
            text-align: right;
            padding: 2em;
            align-self: flex-end;
            border-right: 1px solid ${midGray};
          }
          @media only screen and (min-width: 768px) {
            .content {
              width: 30vw;
              height: 35vh;
              position:absolute;
              display: flex;
              left: 30%;
              justify-content: flex-start;
              z-index: 0;
              padding: 2rem;
            }
            .content p {
              max-width: 16vw;
              text-align: left;
            }
            .models {
              flex-direction: row;
              justify-content: center;
              position: relative;
              z-index: 1;
            }
            img {
              max-width: 30vw;
            }
            .qr {
              margin-top: 8rem;
              margin-right: 2rem;
            }
            .qb {
              margin-top: 2rem;
            }
            .color {
              width: 30vw;
              height: 35vh;
              position: relative;
              display: flex;
              left: 40%;
              margin-top: -15rem;
              justify-content: flex-end;
              z-index: 0;
              padding: 2rem;
            }
            .color p {
              max-width: 16vw;
              text-align: right;
              align-self: flex-end;
            }
            .price {
              flex-direction: row;
              padding: 2em
              justify-content: space-between;
            }
            @media only screen and (min-width: 1200px) {
              .color {
                margin-top: -13rem;
              }
            }
          }
        `}</style>
    </PaddedView>
  )
}

export default Highlight
