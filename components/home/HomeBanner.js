

const HomeCards = () =>
  <div className='HomeCards'>
    <a 
      href='https://canaltech.com.br/produtos/conheca-vela-2-a-bicicleta-eletrica-que-conecta-a-internet-158097/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbikeCanalTech.png?alt=media&token=a8564a43-335c-452a-ac75-b9700e7ce214'
        alt='Vela 2 a smartbike do Brasil no CanalTech'
      />
    </a>
    <a 
      href='https://exame.com/pme/fabricante-de-bike-eletrica-e-primeira-a-instalar-pontos-de-recarga-em-sp/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FRecargaRápidaExame.png?alt=media&token=a92e6d92-a1e5-4d83-95b2-7af494355e77'
        alt='Vela Bikes lança primeira rede de Recarga Rápida na Exame'
        style={{marginTop: '0.5em'}}
      />
    </a>
    <a 
      href='https://br.reuters.com/article/internetNews/idBRKBN1XI1ZQ-OBRIN'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbikeReuters.png?alt=media&token=b394aadd-d19d-45bc-b60a-2df5d6140138'
        alt='Vela Bikes lança nova bicicleta elétrica smart na Reuters'
        style={{marginTop: '0.5em'}}
      />
    </a>
    <a 
      href='https://www.youtube.com/watch?v=bSm9BcdXkAs'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBicicletaEletricaSuperInteressante.png?alt=media&token=1f20576c-f651-4072-9d0e-c03af7c17695'
        alt='Vela Bikes a bicicleta elétrica escolhida pela Super Interessante'
        style={{marginTop: '0.5em'}}
      />
    </a>
    <a 
      href='https://www.youtube.com/watch?v=Y__53nLLV6s'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeeletricaWebmotors.png?alt=media&token=110f72a5-6879-4ffb-8369-c26fbc617894'
        alt='Webmotors avalia se vale a pena ter uma bike elétrica da Vela'
      />
    </a>
    <style jsx>{`
    .HomeCards {
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em 2em 0em 2em;
    }
    img {
      max-width: 180px;
      padding: 1.5em 0;
    }
      @media only screen and (min-width: 768px) {
        .HomeCards {
          display: flex; 
          flex-direction: row;
          justify-content: space-between;
          padding: 2em 2em 0em 2em;
        }
        img {
          max-width: 150px;
        }
      }
    `}
    </style>
  </div>

export default HomeCards
