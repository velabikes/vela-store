const HowWorks = () =>
  <div className='how-works'>
    <h1>Como funciona?</h1>

    <div className='cards'>
      <div className='card'>
        <img src='static/low-battery.png' />
        <div className='description'>
          <h2>Ficou sem bateria?</h2>
          <p>Fique tranquilo!</p>
          <p>Agora você pode recarregar pelo caminho.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/find-vela-point.png' />
        <div className='description'>
          <h2>Procure um ponto Vela</h2>
          <p>Basta checar no mapa nossa rede de cafés parceiros.</p>
        </div>
      </div>

      <div className='card last'>
        <img src='static/wait.png' />
        <div className='description'>
          <h2>Espere 15 minutos</h2>
          <p>Relaxe, tome um café e aproceite o fim do percurso sem se preocupar.</p>
        </div>
      </div>
    </div>

    <style>{`
      .how-works {
        margin: 0 2rem;
      }
      .how-works img {
        width: 40vw;
      }
      .how-works h1 {
        margin-top: 6rem;
        margin-bottom: 6rem;
      }
      .how-works .card {
        text-align: center;
        margin: 0 2rem 8rem 2rem;
      }
      .how-works .card p {
        margin: 0;
      }
      .how-works .last {
        grid-column: 1 / span 2;
        left: 0;
      }
      .how-works .description {
        margin: 2rem 4rem 0 4rem;
      }

      @media only screen and (min-width: 960px) {
        .how-works {
          margin: 0 7rem;
        }
        .how-works h1 {
          margin-top: 8rem;
          margin-bottom: 6rem;
        }
        .how-works .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .how-works img {
          width: 30vw;
        }
        .how-works .card {
          margin-bottom: 5rem;
        }
      }


      @media only screen and (min-width: 460px) {
        .how-works {
          margin: 0 7rem 8rem 7rem;
        }
      }
      @media only screen and (min-width: 1300px) {
        .how-works .cards {
          grid-template-columns: 1fr 1fr 1fr;
          margin-bottom: 0rem;
        }
        .how-works .last {
          grid-row: 1;
          grid-column: 3;
        }
        .how-works img {
          width: 22vw;
        }
      }
    `}</style>
  </div>

export default HowWorks
