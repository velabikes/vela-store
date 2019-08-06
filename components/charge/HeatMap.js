import Button from '../Button'
import Link from 'next/link'

const HeatMap = () =>
  <div className='heat-map'>
    <div className='map'>
      <img src="/static/heatmap.jpg" />
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
        background-color: #e8e8e8;
      }
      .heat-map-description {
        position: relative;
        padding: 3em;
        background-color: rgb(232,232,232, 0.8);
      }
      .heat-map-description h1 {
        // font-size: 3rem;
        margin: 0 0 3rem;
      }
      .heat-map-description p {
        text-align: justify;
        // font-size: 1.7rem;
      }
      .heat-map-description .cta {
        text-align: left;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 3em;
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
