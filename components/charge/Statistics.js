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

    <div className='statistic'>
      <h2>R$0,05</h2>
      <p>Por dez minutos</p>
      <p>de recarga</p>
    </div>

    <style jsx>{`
      .statistics {
        margin-top: 12rem;
        margin-bottom: 1rem;
        padding: 3rem 12rem 3rem 12rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background-color: ${velaGreen};
        outline-width: 0.5rem;
        outline-style: solid;
        outline-offset: 0.5rem;
        outline-color: ${velaGreen};
      }
      .statistic {
        color: ${offWhite};
        text-align: center;
      }
      .statistic h2 {
        font-size: 6rem;
        color: ${velaGreen};
        margin: 0;

        text-shadow:
          -2px -2px 0 ${offWhite},
          2px -2px 0 ${offWhite},
          -2px 2px 0 ${offWhite},
          2px 2px 0 ${offWhite};
      }
      .statistic p {
        margin: 0;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-style: italic;
        line-height: 1;
      }
    `}</style>
  </div>

export default Statistics
