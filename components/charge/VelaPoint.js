import Button from '../Button'
import { offBlack, offWhite } from '../../style/colors'
import Link from 'next/link'

const VelaPoint = () =>
  <div className='vela-point'>
    <img src='static/point.png' />

    <div className='description'>
      <h1>Ponto Vela</h1>
      <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
      <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
      <Link href='https://forms.gle/Wb7DyMpQwUwqQL6F7'><a><Button big>Seja um parceiro</Button></a></Link>
    </div>

    <style jsx>{`
      .vela-point {
        position: relative;
        display: grid;
        background-color: ${offBlack};
      }
      .vela-point h1 {
        color: ${offWhite};
        // font-size: 3rem;
      }
      .vela-point p {
        // font-size: 1.8rem;
      }
      .vela-point .description :global(button) {
        margin-top: 3rem;
      }
      .vela-point .description {
        color: ${offWhite};
        margin: 0 2rem 2rem 2rem;
        height: fit-content;
      }

      @media only screen and (min-width: 460px) {
        .vela-point h1 {
          // font-size: 4rem;
        }
        .vela-point .description {
          margin: 0 7rem 7rem 7rem;
        }
      }
      @media only screen and (min-width: 1300px) {
        .vela-point .description {
          margin: 0 7rem;
          padding: 7rem 0;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .vela-point {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>
  </div>

export default VelaPoint
