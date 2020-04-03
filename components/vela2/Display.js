import { offWhite, darkGray } from '../../style/colors.js'
import ModelData from './ModelData.js'

const Display = ({ model: { frame, color, tire, size } }) => {
  const selectedModelData = ModelData[JSON.stringify({ frame, color, tire, size })] || {}

  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <img
        src={(selectedModelData.photos && selectedModelData.photos[0])}
        alt='Vela 2'
      />
      <style jsx>{`
      .Display {
        background-color: ${offWhite};
        padding: 1.5em 1em 0 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
      }
      h1 {
        color: ${darkGray};
        font-size: 4.5rem;
        text-align: center;
      }
      .Display img {
        width: 100%
      }

      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 5rem;
        }
        .Display img {
          position: relative;
          width: auto;
          max-height: 60vh;
        }
      }
    `}</style>
    </div>
  )
}

export default Display
