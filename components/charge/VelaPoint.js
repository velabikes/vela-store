import Link from 'next/link'
import Grid from 'components/Grid'
import Button from 'components/Button'
import VelaPointFigure from './VelaPointFigure'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'

const VelaPoint = () =>
  <Section>
    <Grid template='1fr 1fr'>
      <div>
        <SectionHeader title='Ponto Vela' />
        <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
        <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
        <div>
          <Link href='/network/map' as='/rede/mapa'><a>
            <Button big>Onde encontrar</Button>
          </a></Link>
          <Link href='https://velabikes.freshdesk.com/support/solutions/folders/43000558455tii'><a>
            <Button big>Saiba mais</Button>
          </a></Link>
        </div>
      </div>

      <div className='figureWrapper'>
        <VelaPointFigure />
      </div>
    </Grid>
    <style jsx>{`
      .figureWrapper :global(svg) {
        max-height: 280px;
      }
    `}</style>
  </Section>

export default VelaPoint
