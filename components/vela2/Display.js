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
      <style jsx>{`
      .Display {
        background-color: ${offWhite};
        padding: 1.5em 1em 0 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
      }
      h1 {
        color: ${darkGray};
        font-size: 4.5rem;
        text-align: center;
      }
      .Display img {
        width: auto;
        position: relative;
        max-width: 800px;
        max-height: 100vh;
      }

      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 5rem;
        }
      }
    `}</style>
    </div>
  )
}

export default Display
