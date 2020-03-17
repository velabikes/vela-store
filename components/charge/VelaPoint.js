import Link from 'next/link'
import Button from 'components/Button'
import SectionHeader from 'components/SectionHeader'
import VelaPointFigure from './VelaPointFigure'

const VelaPoint = () =>
  <>
    <div className='Point'>
      <div className='PointContent'>
        <SectionHeader title='Rede' tagline='Confira o mapa de serviços da Vela e dos nossos parceiros para sempre contar com apoio pelo caminho. ' />
        <Link href='/network/map' as='/rede/mapa'><a>
          <Button primary>Encontrar</Button>
        </a></Link>
      </div>
    </div>
    <div className='PointFigure'>
      <div className='FigureWrapper'>
        <VelaPointFigure />
      </div>
    </div>
    <style jsx>{`
      .FigureWrapper {
        padding: 2em 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .FigureWrapper :global(svg) {
        max-width: 100%;
      }
      .Point {
        display: flex;
        justify-content: center;
        padding: 2em 0 0 0;
      }
      .PointContent {
        text-align: center;
      }
      .PointContent :global(button) {
        margin: 0;
      }
      @media only screen and (min-width: 768px) {
        .FigureWrapper {
          padding: 3em 0 0 0;
        }
        .FigureWrapper :global(svg) {
          max-width: 60%;
        }
        .PointContent {
          max-width: 16rem;
        }
      }
    `}</style>
  </>
export default VelaPoint
