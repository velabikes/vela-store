import PaddedView from '../PaddedView'
import { offBlack, offWhite, velaGreen } from '../../style/colors'
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
          <img className='img-clock' src='static/clock.png' />
          <p>10 Minutos carregando</p>
        </div>
        <div>
          <p className='plus-ten'>+10</p>
          <p>Quilômetros para rodar</p>
        </div>
        <div className='bateries'>
          <img className='img-bateries' src='static/batteries.png' />
          <p>Carregador para até três baterias simultâneas</p>
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
      }
      .about .made-by p {
        color: ${offWhite};
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
      }

      .about .texts {
        display: flex;
        text-align: center;
      }
      .about .plus-ten {
        font-size: 3rem;
        color: ${offWhite};
        font-weight: 800;
        text-shadow:
          -2px -2px 0 ${velaGreen},
          2px -2px 0 ${velaGreen},
          -2px 2px 0 ${velaGreen},
          2px 2px 0 ${velaGreen};
      }
      .about table {
        border-spacing: 2rem 3rem;
      }
      .about td:first-child {
        height: 5rem;
        text-align: center;
      }
      .about p {
        font-style: italic;
        text-transform: uppercase;
        margin: 0;
      }
      .about .bateries {
        text-align: center;
      }
      .about .bateries p {
        line-height: 1;
      }
      .about .img-clock {
        height: 2.5rem;
        width: auto;
      }
      .about .img-plus-ten {
        height: 2.5rem;
        width: auto;
      }
      .about .img-bateries {
        height: 15rem;
        width: auto;
        margin-bottom: 1rem;
      }

      @media only screen and (min-width: 880px) {

      }
    `}</style>
  </div>

export default About;
