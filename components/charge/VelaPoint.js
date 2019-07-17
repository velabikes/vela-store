import Button from '../Button'
import { offBlack, offWhite } from '../../style/colors'
import Link from 'next/link'
import Grid from 'components/Grid'
import VelaPointFigure from './VelaPointFigure'

const VelaPoint = () =>
  <section className='vela-point'>
    <Grid template="1fr 1fr">
      <div className='description'>
        <h1>Ponto Vela</h1>
        <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
        <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
        <Link href='https://forms.gle/Wb7DyMpQwUwqQL6F7'><a><Button>Onde encontrar</Button></a></Link>
        <Link href='https://forms.gle/Wb7DyMpQwUwqQL6F7'><a><Button>Saiba mais</Button></a></Link>
      </div>

      <div>
        <div><VelaPointFigure /></div>
      </div>
    </Grid>
    <style jsx>{`
      .vela-point {
        position: relative;
      }
      .vela-point .description {
        margin-bottom: 1rem;
      }
      .vela-point .description :global(button) {
        margin-bottom: 1rem;
      }
    `}</style>
  </section>

export default VelaPoint
