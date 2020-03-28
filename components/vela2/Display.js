import { lightGray, darkGray, offWhite } from '../../style/colors.js'

const Display = () => {
  return (
    <div className='Display'>
      <h1>Vela 2</h1>
      <img
        src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/c5558f25-3db0-4376-bae2-668f6eb6374e.png'
        alt='Vela 2'
      />
      <div className='slider'>
        <div className='s1'>
          <img src='' alt='' />
        </div>
        <div className='s2'>
          <img src='' alt='' />
        </div>
        <div className='s3'>
          <img src='' alt='' />
        </div>
      </div>
      <style jsx>{`
      .Display {
        background-color: ${lightGray};
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
