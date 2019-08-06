import { velaGreen, offWhite } from '../../style/colors'
import PaddedView from '../PaddedView'

const Statistics = () =>
  <div className='statistics'>
    <PaddedView>
      <div className='items'>
        <div className='statistic'>
          <h3>1.6K</h3>
          <p>Velejadores pedalando
          em São Paulo</p>
        </div>

        <div className='statistic'>
          <h3>500</h3>
          <p>Ciclistas elétricos
          diários no mapa</p>
        </div>

        <div className='statistic price'>
          <h3>R$0,05</h3>
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
        color: ${offWhite};
        text-align: center;
        padding: 3rem 0;
        min-width: 33%;
      }
      .statistics .statistic h3 {
        font-size: 3rem;
        color: ${velaGreen};
        margin: 0;

        text-shadow:
          -1px -1px 0 ${offWhite},
          1px -1px 0 ${offWhite},
          -1px 1px 0 ${offWhite},
          1px 1px 0 ${offWhite};
      }
      .statistics .statistic p {
        margin: 0 auto;
        max-width: 50%;
        text-transform: uppercase;
        font-style: italic;
        line-height: 1;
        font-size: 0.75rem;
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

      @media only screen and (max-width: 768px) {
        .statistics .statistic {
          padding: 2rem 0;
        }
        .statistics .statistic p {
          max-width: 60%;
        }
      }
    `}</style>
  </div>

export default Statistics
