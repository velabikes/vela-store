import { velaGreen, offWhite } from '../../style/colors'

const Statistics = () =>
  <div className='statistics'>
    <div className='statistic'>
      <h2>1.5K</h2>
      <p>Velas circulando</p>
      <p>em São Paulo</p>
    </div>

    <div className='statistic'>
      <h2>500</h2>
      <p>Ciclistas elétricos</p>
      <p>diários no mapa</p>
    </div>

    <div className='statistic price'>
      <h2>R$0,05</h2>
      <p>Por dez minutos</p>
      <p>de recarga</p>
    </div>

    <style jsx>{`
      .statistics {
        margin-top: 6rem;
        margin-bottom: 1rem;
        display: grid;
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
      }
      .statistics .statistic h2 {
        font-size: 6rem;
        color: ${velaGreen};
        margin: 0;

        text-shadow:
          -2px -2px 0 ${offWhite},
          2px -2px 0 ${offWhite},
          -2px 2px 0 ${offWhite},
          2px 2px 0 ${offWhite};
      }
      .statistics .statistic p {
        margin: 0;
        // font-size: 1.5rem;
        text-transform: uppercase;
        font-style: italic;
        line-height: 1;
      }

      @media only screen and (min-width: 900px) {
        .statistics {
          grid-template-columns: 1fr 1fr;
        }
        .statistics .statistic.price {
          grid-column: 1 / span 2;
        }

      }

      @media only screen and (min-width: 1400px) {
        .statistics {
          padding: 3rem 12rem 3rem 12rem;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .statistics .statistic.price {
          grid-column: 3;
        }
      }
    `}</style>
  </div>

export default Statistics
