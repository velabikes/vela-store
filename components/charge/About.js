import { offBlack, offWhite, velaGreen } from '../../style/colors'

const About = () =>
  <div className='about'>
    <div className='station'>
      <iframe src='https://player.vimeo.com/video/344802481' frameborder='0' allow='autoplay; fullscreen' allowfullscreen/>

      <div className='made-by'>
        <p>Desenvolvido e produzido</p>
        <p>por jovens brasileiros</p>
      </div>
    </div>

    <div className='texts'>
      <table>
        <tr>
          <td><img className='img-clock' src='static/clock.png' /></td>
          <td><p>10 Minutos carregando</p></td>
        </tr>
        <tr>
          <td><p className='plus-ten'>+10</p></td>
          <td><p>Quilômetros para rodar</p></td>
        </tr>
      </table>

      <div className='bateries'>
        <img className='img-bateries' src='static/batteries.png' />
        <p>Carregador para até</p>
        <p>três baterias simultâneas</p>
      </div>
    </div>

    <style jsx>{`
      .about {
        display: grid;
      }

      .station iframe {
        width: 100%;
        height: 56vw;
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
        // font-size: 1.8rem;
        color: ${offWhite};
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
      }

      .about .texts {
        display: grid;
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
        .about .texts {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .about table {
          border-spacing: 3rem 0;
        }
        .about .plus-ten {
          font-size: 6rem;
          margin-top: 2rem;
        }
        .about .img-clock {
          height: 6rem;
        }
        .about .img-plus-ten {
          height: 100%;
        }
        .about .img-bateries {
          height: 20rem;
        }
        .station iframe {
          height: 53vw;
        }
      }
    `}</style>
  </div>

export default About;
