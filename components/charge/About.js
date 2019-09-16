import PaddedView from '../PaddedView'
import { offBlack, offWhite } from '../../style/colors'
import Player from './Player'

const About = () =>
  <div className='about'>
    <div className='station'>
      <Player src='/static/station.mp4' />

      <div className='made-by'>
        <p>Desenvolvido e produzido</p>
        <p>por jovens brasileiros</p>
      </div>
    </div>

    <PaddedView>
      <div className='texts'>
        <div>
          <img className='img-clock' src='/static/clock.png' alt='' />
          <p>10 Minutos carregando</p>
        </div>
        <div>
          <img className='img-plusten' src='/static/plusten.png' alt='' />
          <p>Quilômetros para rodar</p>
        </div>
        <div className='bateries'>
          <img className='img-bateries' src='/static/batteries.png' alt='' />
          <p>Até três baterias simultâneas</p>
        </div>
      </div>
    </PaddedView>
    <style jsx>{`
      .about {
      }

      .about .station {
        position: relative;
        width: auto;
        height: auto;
        grid-template-columns: 1fr 0;
        margin-bottom: 7rem;
      }
      .about .made-by {
        text-align: center;
        padding: 1.5rem 3rem;
        height: fit-content;
        width: fit-content;
        background-color: ${offBlack};
        display: none;
      }
      .about .made-by p {
        color: ${offWhite};
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
      }
      .texts {
        text-align: center;
      }
      .texts > div {
        padding: 2rem;
        min-width: 33%;
      }
      .texts img {
        width: auto;
        margin-bottom: 1rem;
      }
      .texts p {
        max-width: 130px;
        margin: 0 auto;
      }
      .about p {
        font-style: italic;
        text-transform: uppercase;
      }
      @media only screen and (min-width: 768px) {
        .texts {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </div>

export default About
