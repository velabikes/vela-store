const HowWorks = () =>
  <section className='how-works'>
    <h1>Como funciona?</h1>

    <div className='cards'>
      <div className='card'>
        <img src='static/low-battery.png' />
        <div className='description'>
          <h2>Ficou sem bateria?</h2>
          <p>Fique tranquilo!<br />
          Agora você pode recarregar pelo caminho.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/find-vela-point.png' />
        <div className='description'>
          <h2>Procure um ponto Vela</h2>
          <p>Basta conferir no mapa nossa rede de cafés parceiros.</p>
        </div>
      </div>

      <div className='card last'>
        <img src='static/wait.png' />
        <div className='description'>
          <h2>Espere 10 minutos</h2>
          <p>Relaxe, tome um café e aproveite o fim do percurso sem se preocupar.</p>
        </div>
      </div>
    </div>

    <style>{`
      .card {
        margin-bottom: 2rem
      }
      .card h2 {
        margin-bottom: 0
      }
      .card .description {
        text-align: center;
        margin: 0 auto;
        max-width: 230px
      }
      @media only screen and (min-width: 768px) {
        .how-works {
        }
        .how-works h1 {

        }
        .how-works .cards {
          display: flex;
        }
        .how-works img {

        }
        .how-works .card {
        }
      }
    `}</style>
  </section>

export default HowWorks
