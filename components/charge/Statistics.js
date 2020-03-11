import { velaGreen, white } from '../../style/colors'
import PaddedView from '../PaddedView'

const Statistics = () =>
  <div className='statistics'>
    <PaddedView>
      <div className='items'>
        <div className='statistic'>
          <h2>1.5K</h2>
          <p>Velas circulando
            em São Paulo</p>
        </div>

        <div className='statistic'>
          <h2>500</h2>
          <p>Ciclistas elétricos
            diários no mapa</p>
        </div>

        <div className='statistic price'>
          <h2>R$0,05</h2>
          <p>Custo fixo por recarga
            para o estabelecimento</p>
        </div>
      </div>
    </PaddedView>
    <style jsx>{`
      .statistics {
        margin-bottom: 1rem;
        background-color: ${velaGreen};
        outline-width: 0.5rem;
        outline-style: solid;
        outline-offset: 0.5rem;
        outline-color: ${velaGreen};
      }
      .statistics .statistic {
        color: ${white};
        text-align: center;
        padding: 3rem 0;
        min-width: 33%;
      }
      .statistics .statistic h2 {
        font-size: 4rem;
        color: ${velaGreen};
        margin: 0;

        text-shadow:
          -2px -2px 0 ${white},
          2px -2px 0 ${white},
          -2px 2px 0 ${white},
          2px 2px 0 ${white};
      }
      .statistics .statistic p {
        margin: 0 auto;
        max-width: 66%;
        text-transform: uppercase;
        font-style: italic;
        line-height: 1;
      }

      @media only screen and (min-width: 768px) {
        .statistics .items {
          display: flex;
          justify-content: space-evenly;
        }
        .statistics .statistic.price {
          grid-column: 1 / span 2;
        }

      }
    `}</style>
  </div>

export default Statistics
