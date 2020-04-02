import { lightGray, darkGray, offWhite } from '../../style/colors.js'
import ModelData from './ModelData.js'

const Display = ({ model: { frame, color, tire } }) => {
  const defaultPhoto = '../../static/vela2/models/VEL-V2-RETO-NAO-SELECIONADO.png'
  const selectedModelData = ModelData[JSON.stringify({ frame, tire, color })] || {}

  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <img
        src={(selectedModelData.photos && selectedModelData.photos[0]) || defaultPhoto}
        alt='Vela 2'
      />
      {/* <div className='slider'>
        <div className='s1'>
          <img src='' alt='' />
        </div>
        <div className='s2'>
          <img src='' alt='' />
        </div>
        <div className='s3'>
          <img src='' alt='' />
        </div>
      </div> */}
      <style jsx>{`
      .Display {
        background-color: ${lightGray};
        padding: 1.5em 1em 0 1em;
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
      .slider {
        display: flex;
        flew-direction: row;
        justify-content: center;
      }
      .slider > * {
        width: 4em;
        height: 4em;
        background-color: ${offWhite};
        margin: 1em 0.5em;
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
