import Button from '../Button'
import { offBlack, offWhite } from '../../style/colors'

const VelaPoint = () =>
  <div className='vela-point'>

    <div className='description'>
      <h1>Ponto Vela</h1>
      <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
      <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
      <Button big>Seja um parceiro</Button>
    </div>

    <img src='static/point.png' />
    
    <style jsx>{`
      .vela-point {
        grid-template-columns: 1fr 1fr;
        position: relative;
        display: grid;
        background-color: ${offBlack};
      }
      .vela-point h1 {
        color: ${offWhite};
        font-size: 4rem;
      }
      .vela-point p {
        font-size: 1.8rem;
      }
      .description :global(button) {
        margin-top: 3rem;
      }
      .description {
        color: ${offWhite};
        margin: 0 7rem 7rem 7rem;
        height: fit-content;
        margin: 0 7rem;
        padding: 7rem 0;
      }
    `}</style>
  </div>

export default VelaPoint
