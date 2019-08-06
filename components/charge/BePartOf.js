const BePartOf = () =>
  <div className='be-part'>
    <div>
      <h1>Faça parte da rede</h1>
    </div>

    <div className='description'>
      <p>Sabia que você pode aumentar as visitas ao seu estabelecimento sendo um Ponto Vela? Conheça a rede abaixo e entre em contato com a gente para conectar novos caminhos!</p>
    </div>

    <style jsx>{`
      @media only screen and (min-width: 768px) {
        .be-part {
          display: flex;
          align-items: center;
        }

        .be-part .description {
          margin-left: 4rem;
          width: 66%;
        }
      }

      @media only screen and (max-width: 768px) {
        h1 {
          margin-bottom: 3rem;
        }
      }
    `}</style>
  </div>

export default BePartOf
