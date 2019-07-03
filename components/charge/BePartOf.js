const BePartOf = () =>
  <div className='be-part'>
    <div>
      <h1>Faça parte</h1>
      <h1>da rede</h1>
    </div>

    <div className='description'>
      <p>Sabia que você pode aumentar as visitas ao seu estabelecimento sendo um Ponto Vela? Confira so benefícios abaixo e entre em contato com a gente!</p>
    </div>

    <style jsx>{`
      .be-part {
        display: grid;
      }
      .be-part p, .be-part h1 {
        margin: 0;
      }
      .be-part .description {
        margin-top: 2rem;
      }

      @media only screen and (min-width: 460px) {
        .be-part {
          margin: 3rem 7rem 3rem 7rem;
        }
      }
      @media only screen and (min-width: 1000px) {
        .be-part {
          grid-template-columns: auto auto;
          margin: 8rem 7rem 0 7rem;
        }
        .be-part .description {
          margin: 0 7rem;
        }
      }
    `}</style>
  </div>

export default BePartOf
