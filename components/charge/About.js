import { offBlack, offWhite } from '../../style/colors'

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
          <td><img className='img-plus-ten' src='static/plus-ten.png' /></td>
          <td><p>Quilômetros para rodar</p></td>
        </tr>
      </table>

      <div className='bateries'>
        <img className='img-bateries' src='static/bateries.png' />
        <p>Carregador para até</p>
        <p>três baterias simultâneas</p>
      </div>
    </div>

    <style jsx>{`
      .about {
        margin-top: 8rem;
        display: grid;
        grid-template-columns: 4fr 3fr;
      }

      .station {
        position: relative;
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 0;
      }
      .spare-parts {
        background-color: #d0d0d0;
      }
      .made-by {
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
      .made-by p {
        font-size: 2rem;
        color: ${offWhite};
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
      }

      .texts {
        margin: 0 6rem;
      }
      .about table {
        border-spacing: 3rem 5rem;
      }
      .about img {
        opacity: 0.2;
      }
      .about td:first-child {
        height: 5rem;
        text-align: center;
      }
      .about p {
        font-size: 1.5rem;
        font-style: italic;
        text-transform: uppercase;
        margin: 0;
      }
      .bateries {
        text-align: center;
        margin-bottom: 3rem;
      }
      .bateries p {
        line-height: 1;
      }
      .img-clock {
        height: 6rem;
        width: auto;
      }
      .img-plus-ten {
        height: 100%;
        width: auto;
      }
      .img-bateries {
        height: 25rem;
        width: auto;
        margin-bottom: 3rem;
      }
    `}</style>
  </div>

export default About;