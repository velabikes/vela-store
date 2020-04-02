import { offWhite, darkGray } from '../../style/colors.js'
import ModelData from './ModelData.js'

const Display = ({ model: { frame, color, tire, size } }) => {
  const selectedModelData = ModelData[JSON.stringify({ frame, tire, color })] || {}

  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <img
        src={(selectedModelData.photos && selectedModelData.photos[0])}
        alt='Vela 2'
      />
      <div className='model'>
        <p><b>Quadro:</b> {frame}</p>
        <p><b>Cor:</b> {color}</p>
        <p><b>Pneu:</b> {tire}</p>
        <p><b>Tamanho:</b> {size}</p>
      </div>
      <style jsx>{`
      .Display {
        background-color: ${offWhite};
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
        padding: 1em;
        margin-bottom: 1.5em;
        min-width: 10em;
        max-width: 10em;
      }
      .model > p {
        margin: 0;
        font-size: 0.8em;
        line-height: 1.5em;
        text-align: center;
      }

      @media only screen and (min-width: 768px) {
        .Display {
          min-width: 40%;
          max-width: 40%;
        }
        h1 {
          font-size: 5rem;
        }
      }
    `}</style>
    </div>
  )
}

export default Display
