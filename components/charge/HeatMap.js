import Button from '../Button'

const HeatMap = () =>
  <div className='heat-map'>
		<div className='map'>

    </div>

		<div className='heat-map-description'>
      <h1>Mapa de calor</h1>
      <p>Para entender melhor o trajeto diário dos Velejadores Urbanos, a Vela realizou uma pesquisa origem-destino, até chegar nas regiões com mais fluxo.</p>
      <p className='cta'>Seu estabelecimento está no nosso mapa de calor?</p>
      <Button big>Seja um parceiro</Button>
		</div>

    <style jsx>{`
      .heat-map {
        display: grid;
        position: relative;
        grid-template-columns: 1fr;
        height: fit-content;
      }
      .heat-map .map {
        height: 800px;
        background-color: #d0d0d0;
      }
      .heat-map-description {
        position: relative;
        margin: 0 2rem;
      }
      .heat-map-description h1 {
        font-size: 3rem;
        margin: 4rem 0;
      }
      .heat-map-description p {
        text-align: justify;
        font-size: 1.7rem;
      }
      .heat-map-description .cta {
        text-align: left;
        font-weight: bold;
        font-style: italic;
      }
      
      @media only screen and (min-width: 1100px) {
        .heat-map {
          grid-template-columns: 1fr 0;
        }
        .heat-map-description h1 {
          font-size: 4rem;
        }
        .heat-map-description {
          margin: 7rem;
          position: absolute;
          top: 0rem;
          left: 0rem;
          width: 35%;
        }
      }
    `}</style>
  </div>

export default HeatMap
