const HowWorks = () =>
  <div className='how-works'>
    <h1>Como funciona?</h1>

    <div className='cards'>
      <div className='card'>
        <img src='static/vela.png' />
        <div className='description'>
          <h2>Ficou sem bateria?</h2>
          <p>Você pode oferecer testes para amigos e indicações nosas.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/test-ride.png' />
        <div className='description'>
          <h2>Procure um ponto Vela</h2>
          <p>A partir deles, você ajuda a expandir a comunidade Vela pelo Brasil.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/credit.png' />
        <div className='description'>
          <h2>Espere 15 minutos</h2>
          <p>Com os teste e vendas realizados, você acumula benefícios com a gente.</p>
        </div>
      </div>
    </div>

    <style>{`
      .how-works {
        margin: 0 7rem;
      }
      .how-works h1 {
        font-size: 4rem;
        margin-top: 8rem;
        margin-bottom: 6rem;
      }
      .cards {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
      }
      .card {
        text-align: center;
      }
      .card h2 {
        font-size: 2.5rem;
      }
      .card p {
        font-size: 2rem;
      }
      .description {
        margin: 0 4rem;
      }
    `}</style>
  </div>

export default HowWorks
