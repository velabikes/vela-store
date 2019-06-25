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

      <div className='card hold'>
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
      .how-works h1 {
        font-size: 3rem;
        margin-top: 6rem;
        margin-bottom: 6rem;
      }
      .how-works .card {
        text-align: center;
        margin-bottom: 7rem;
      }
      .how-works .card h2 {
        font-size: 2.5rem;
      }
      .how-works .card p {
        font-size: 2rem;
        margin: 0
      }
      .how-works .hold {
        grid-column: 1 / span 2;
        left: 0;
      }
      .how-works .card.description {
        margin: 0 4rem;
      }

      @media only screen and (min-width: 960px) {
        .how-works {
          margin: 0 7rem;
        }
        .how-works h1 {
          font-size: 4rem;
          margin-top: 8rem;
          margin-bottom: 6rem;
        }
        .how-works .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }

      @media only screen and (min-width: 1300px) {
        .how-works .cards {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .how-works .description {
          margin: 0 4rem;
        }
        .how-works .hold {
          grid-row: 1;
          grid-column: 1;
        }
      }
    `}</style>
  </div>

export default HowWorks
