import { offBlack, offWhite, velaGreen } from '../../style/colors'

const About = () =>
  <div className='about'>
    <div className='station'>
      <div className='spare-parts'></div>

      <div className='made-by'>
        <p>Produzido</p>
        <p>nacionalmente</p>
        <p>pela vela.</p>
      </div>
    </div>

    <div className='texts'>
      <table>
        <tr>
          <td><img className='img-clock' src='static/clock.png' /></td>
          <td><p>10 Minutos carregando</p></td>
        </tr>
        <tr>
          <p className='plus-ten'>+10</p>
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

      .about .station {
        position: relative;
        min-height: 600px;
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 0;
        margin-bottom: 7rem;
      }
      .about .spare-parts {
        background-color: #d0d0d0;
      }
      .about .made-by {
        position: absolute;
        left: 50%;
        bottom: -10%;
        transform: translateX(-50%);
        text-align: center;
        padding: 1.5rem 3rem;
        height: fit-content;
        width: fit-content;
        background-color: ${offBlack};
      }
      .about .made-by p {
        font-size: 1.8rem;
        color: ${offWhite};
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
      }

      .about .texts {
        display: grid;
      }
      .about .plus-ten {
        font-size: 3rem;
        color: ${offWhite};
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
        font-size: 1.3rem;
        font-style: italic;
        text-transform: uppercase;
        margin: 0;
      }
      .about .bateries {
        text-align: center;
        margin-bottom: 3rem;
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
        margin-bottom: 3rem;
      }

      @media only screen and (min-width: 880px) {
        .about .texts {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .about table {
          border-spacing: 3rem 5rem;
        }
        .about .plus-ten {
          font-size: 6rem;
        }
        .about .img-clock {
          height: 6rem;
        }
        .about .img-plus-ten {
          height: 100%;
        }
        .about .img-bateries {
          height: 25rem;
        }
      }

      @media only screen and (min-width: 1300px) {
        .about {
          grid-template-columns: 4fr 3fr;
          margin-top: 8rem;
        }
        .about .station {
          margin: 0;
        }
        .about .texts {
          grid-template-columns: none;
        }
      }
    `}</style>
  </div>

export default About;