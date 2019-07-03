import Button from '../Button'
import { offBlack, offWhite } from '../../style/colors'
import Link from 'next/link'

const VelaPoint = () =>
  <section className='vela-point'>
    <div className='description'>
      <h1>Ponto Vela</h1>
      <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
      <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
      <Link href='https://forms.gle/Wb7DyMpQwUwqQL6F7'><a><Button big>Seja um parceiro</Button></a></Link>
    </div>

    <div><img src='static/point.png' alt='Ponto de recarga vela' /></div>

    <style jsx>{`
      .vela-point {
        position: relative;
        background-color: ${offBlack};
      }
      .vela-point h1 {
        color: ${offWhite};
      }
      .vela-point .description {
        color: ${offWhite};
        margin-bottom: 1rem;
      }
      .vela-point .description :global(button) {
        margin-top: 3rem;
      }

      @media only screen and (min-width: 768px) {
        .vela-point {
          display: flex;
        }
        .vela-point .description {
          width: 75%;
          margin-right: 6rem;
        }
        .vela-point .description {
        }
      }
    `}</style>
  </section>

export default VelaPoint
