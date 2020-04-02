import { lightGray, darkGray, offWhite } from '../../style/colors.js'
import ModelData from './ModelData.js'

const Display = ({ model: { frame, color, tire, size } }) => {
  const defaultPhoto = '../../static/vela2/models/VEL-V2-RETO-NAO-SELECIONADO.png'
  const selectedModelData = ModelData[JSON.stringify({ frame, tire, color })] || {}

  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <img
        src={(selectedModelData.photos && selectedModelData.photos[0]) || defaultPhoto}
        alt='Vela 2'
      />
      <div className='model'>
        <p><b>Quadro: </b>{frame}</p>
        <p><b>Cor: </b>{color}</p>
        <p><b>Pneu: </b>{tire}</p>
        <p><b>Tamanho: </b>{size}</p>
      </div>
      <style jsx>{`
      .Display {
        background-color: ${lightGray};
        padding: 1.5em 1em 0 1em;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      h1 {
        color: ${darkGray};
        font-size: 4.5rem;
        text-align: center;
      }
      .Display img {
        width: 100%;
        position: relative;
      }
      .model {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${offWhite};
        padding: 1.5em 2em 1em 2em;
        margin-bottom: 1.5em;
        min-width: 50%;
      }
      .model > p {
        display: flex;
        flex-direction: row;
        font-size: 0.8em;
      }

      @media only screen and (min-width: 768px) {
        .Display {
        }
        h1 {
          font-size: 5rem;
        }
        .Display img {
        }
        .slider {
        }
      }
    `}</style>
    </div>
  )
}

export default Display
