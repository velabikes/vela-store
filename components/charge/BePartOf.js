const BePartOf = () =>
  <div className='be-part'>
    <div>
      <h1>Faça parte da rede</h1>
    </div>

    <div className='description'>
      <p>Sabia que você pode aumentar as visitas ao seu estabelecimento sendo um Ponto Vela? Confira so benefícios abaixo e entre em contato com a gente!</p>
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
    `}</style>
  </div>

export default BePartOf
