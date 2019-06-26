import { offBlack, offWhite } from '../../style/colors'

const Banner = () => 
  <div className='banner'>
    <video autoPlay muted controls controlsList="nodownload">
      <source src="static/charge-banner.mp4" type="video/mp4" />
    </video>

    <div className='content'>
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
    </div>

    <style jsx>{`
      .banner {
        display: grid;
        position: relative;
      }
      .banner video {
        width: 100%;
        height: auto;
      }
      .banner .content {
        display: grid;
        grid-template-columns: auto 1fr;
        width: fit-content;
        height: fit-content;
        margin: 3rem auto;
      }
      .banner .card {
        position: relative;
        padding: 2.5vw 2vw;
        height: fit-content;
        width: fit-content;
        background-color: ${offBlack};
      }
      .banner .card p {
        font-size: 3vw;
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
      .banner .description p {
        margin: 0;
        font-size: 1.2rem;
        margin-left: 3rem;
      }

      @media only screen and (min-width: 768px) {
        .banner .description {
          position: relative;
          margin-left: 1rem;
          bottom: -9vw;
        }
        .banner .description p {
          margin: 0;
          // font-size: 1.7rem;
        }
        .banner .content {
          position: relative;
          left: 35%;
          top: -8vw;
          transform: translateX(-25%);
          width: 75%;
          margin: 0;
        }
      }

      @media only screen and (min-width: 1350px) {
        .banner {
          grid-template-columns: 75% 0;
        }
        .banner .description {
          width: 100%;
          margin: 0;
          margin-top: 2vw;
          bottom: 0;
          position: relative;
        }
        .banner .content {
          width: fit-content;
          display: block;
          left: -8vw;
          top: 10vw;
          transform: translateX(0);
        }
        .banner .description-text {
          position: absolute;
          right: 0;
        }
      }
    `}</style>
  </div>

export default Banner