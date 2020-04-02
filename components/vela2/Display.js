import { lightGray, darkGray, offWhite } from '../../style/colors.js'
import ModelData from './ModelData.js'

const Display = ({ model: { frame, color, tire, size } }) => {
  const selectedModelData = ModelData[JSON.stringify({ frame, tire, color })] || {}

  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <div className='model'>
        <p className='sentence'>Quadro {frame} {size},<br /> {color} com pneu {tire}.</p>
      </div>
      <img
        src={(selectedModelData.photos && selectedModelData.photos[0])}
        alt='Vela 2'
      />
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
        padding: 1.5em 1.5em 1em 1.5em;
        margin: 1em 0 1.5em 0;
        min-width: 60%;
        max-width: 60%;
      }
      .model > .sentence {
        font-size: 0.8em;
        text-transform: lowercase;
        text-align: center;
      }
      .sentence:first-letter {
        text-transform: capitalize;
      }

      @media only screen and (min-width: 768px) {
        .Display {
          width: 40%;
          height: 100%;
          position: absolute;
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
