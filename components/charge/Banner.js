import { offBlack, offWhite } from '../../style/colors'

const Banner = () => 
  <div className='banner'>
    <img src='static/video.png' style={{ opacity: 0.2 }} />

    <div className='card'>
      <p>Aproveite</p>
      <p>Cada minuto</p>
      <p>na cidade</p>
    </div>

    <div className='description'>
      <div className='description-text'>
        <p>Conheça a Rede de</p>
        <p>Recarga Rápida</p>
        <p>da Vela.</p>
      </div>
    </div>

    <style jsx>{`
      .banner {
        display: grid;
        position: relative;
        grid-template-columns: 3fr 0 1fr;
      }
      .card {
        position: relative;
        top: 12rem;
        right: 16rem;
        padding: 2.5rem 2rem;
        height: fit-content;
        width: fit-content;
        background-color: ${offBlack};
      }
      .card p {
        font-size: 4.7em;
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
        text-align: right;
        line-height: 1.2;
        color: ${offWhite};
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }
      .description {
        position: relative;
        height: 100%;
      }
      .description-text {
        position: absolute;
        bottom: 3rem;
      }
      .description-text p {
        font-size: 1.7rem;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>

export default Banner