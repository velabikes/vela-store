

const HomeCards = () =>
  <div className='HomeCards'>
    <div className='top'>
    <a 
      href='https://canaltech.com.br/produtos/conheca-vela-2-a-bicicleta-eletrica-que-conecta-a-internet-158097/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FCanaltechVelaBikes.png?alt=media&token=816473cd-4089-4b2e-9e9b-911ccd609953'
        alt='Vela 2 a smartbike do Brasil no CanalTech'
      />
    </a>
    <a 
      href='https://avenidas.blogfolha.uol.com.br/2020/10/30/bike-eletrica-da-vela-tem-funcao-nitro-escondida-em-design-retro/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FFolhadeSPVelBikes.png?alt=media&token=db2a857b-d1b9-457b-a5c5-868c73a8121c'
        alt='Bike elétrica com função nitro escondida na Folha de São Paulo'
      />
    </a>
    <a 
      href='https://exame.com/pme/fabricante-de-bike-eletrica-e-primeira-a-instalar-pontos-de-recarga-em-sp/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FExameVelaBikes.png?alt=media&token=ee839626-61af-4f71-a4de-341e97f22c99'
        alt='Vela Bikes lança primeira rede de Recarga Rápida na Exame'
      />
    </a>
    </div>
    <div className='bottom'>
    <a 
      href='https://mobilidade.estadao.com.br/mobilidade-para-que/vela-2-e-bicicleta-eletrica-inteligente-controlada-por-aplicativo-assista/'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FPortalMobilidadeEstadaoVelaBikes.png?alt=media&token=28b38806-eb01-4896-834d-ce9d34f1fb41'
        alt='Assista a review da smartbike Vela 2 no Portal Mobilidade do Estadão'
      />
    </a>
    <a 
      href=' https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/11/08/empresa-lanca-bicicleta-eletrica-inteligente-com-funcoes-controladas-pelo-celular.ghtml'
      target='_blank'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FPEGNVelaBikes.png?alt=media&token=fb77d33d-6a09-4b49-bf57-2c717390f8d4'
        alt='Vela 2 é a bicicleta elétrica inteligente, confira na Pequenas Empresas Grandes Negócios'
      />
    </a>
    </div>
    <style jsx>{`
    .HomeCards {
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em 2em 1em 2em;
    }
    img {
      max-width: 180px;
      padding: 1.5em 2em;
    }
      @media only screen and (min-width: 768px) {
        .HomeCards {
          display: flex; 
          flex-direction: column;
          justify-content: space-around;
          padding: 2em 2em 1em 2em;
        }
        .img {
          max-width: 150px;
        }
        .top {
          display: flex;
          flex-direction: row;
        }
        .bottom {
          display: flex;
          flex-direction: row;
        }
      }
    `}
    </style>
  </div>

export default HomeCards
