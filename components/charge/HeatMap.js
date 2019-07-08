import Button from '../Button'
import Link from 'next/link'

const HeatMap = () =>
  <div className='heat-map'>
    <div className='map'>
      <img src="static/heatmap.jpg" />
    </div>

		<div className='heat-map-description'>
      <h1>Mapa de calor</h1>
      <p>Para entender melhor o trajeto diário dos Velejadores Urbanos, a Vela realizou uma pesquisa origem-destino, até chegar nas regiões com maior fluxo.</p>
      <p className='cta'>Seu estabelecimento está no nosso mapa de calor?</p>
      <Link href='https://forms.gle/Wb7DyMpQwUwqQL6F7'><a><Button big>Seja um parceiro</Button></a></Link>
		</div>

    <style jsx>{`
      .heat-map {
        display: grid;
        position: relative;
        grid-template-columns: 1fr;
        height: fit-content;
      }
      .heat-map .map {
        background-color: #d0d0d0;
      }
      .heat-map-description {
        position: relative;
        margin: 0 2rem;
        padding: 2em;
        background-color: rgba(208, 208, 208, 0.9);
      }
      .heat-map-description h1 {
        // font-size: 3rem;
        margin: 0 0 2rem;
      }
      .heat-map-description p {
        text-align: justify;
        // font-size: 1.7rem;
      }
      .heat-map-description .cta {
        text-align: left;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 2em;
      }
      
      @media only screen and (min-width: 768px) {
        .heat-map {
          grid-template-columns: 1fr 0;
        }
        .heat-map-description h1 {
          // font-size: 4rem;
        }
        .heat-map-description {
          margin: 3rem;
          position: absolute;
          bottom: 0rem;
          left: 0rem;
          width: 35%;
        }
      }
    `}</style>
  </div>

export default HeatMap
