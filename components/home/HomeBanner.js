import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from "styled-components"
import { offBlack, velaGreen, lightGray } from '../../style/colors';

const CarouselReview = styled(Carousel)`
  .rec.rec-arrow {
    background-color: transparent;
    border: 0;
  }
  .rec.rec-arrow:focus {
    background-color: ${velaGreen};
  }
  .rec button {
    width: 50px;
    height: 50px;
    min-width: 50px;
    font-size: 1em;
    box-shadow: none;
  }
  .rec.rec-pagination button {
    width: 12px;
    height: 12px;
    min-width: 12px;
  }
  .rec.rec-pagination button.rec-dot {
    background-color: ${lightGray}
  }
  .rec.rec-pagination button.rec-dot_active {
    background-color: ${velaGreen};
  }
  .rec.rec-carousel-item {
    text-align: center;
  }
`

const items = [
    {id: 1, title: '"Desenho clássico das bikes europeias com tecnologia de última geração."', value: 'Assista a review da smartbike Vela 2 no Portal Mobilidade do Estadão', img: 'https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FPortalMobilidadeEstadaoVelaBikes.png?alt=media&token=28b38806-eb01-4896-834d-ce9d34f1fb41', link: 'https://mobilidade.estadao.com.br/mobilidade-para-que/vela-2-e-bicicleta-eletrica-inteligente-controlada-por-aplicativo-assista/'},
    {id: 2, title: '"As principais funções da bicicleta são controladas pelo smartphone."', value: 'Vela 2 é a bicicleta elétrica inteligente, confira na Pequenas Empresas Grandes Negócios', img: 'https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FPEGNVelaBikes.png?alt=media&token=fb77d33d-6a09-4b49-bf57-2c717390f8d4', link: 'https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/11/08/empresa-lanca-bicicleta-eletrica-inteligente-com-funcoes-controladas-pelo-celular.ghtml'},
    {id: 3, title: '"Bike elétrica da Vela tem função nitro escondida em design retrô."', value: 'Bike elétrica com função nitro escondida na Folha de São Paulo', img: 'https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FFolhadeSPVelBikes.png?alt=media&token=db2a857b-d1b9-457b-a5c5-868c73a8121c', link: 'https://avenidas.blogfolha.uol.com.br/2020/10/30/bike-eletrica-da-vela-tem-funcao-nitro-escondida-em-design-retro/'},
    {id: 4, title: '"O app possui mapa de calor que entende o comportamento do usuário."', value: 'Vela 2 a smartbike do Brasil no CanalTech', img: 'https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FCanaltechVelaBikes.png?alt=media&token=816473cd-4089-4b2e-9e9b-911ccd609953', link: 'https://canaltech.com.br/produtos/conheca-vela-2-a-bicicleta-eletrica-que-conecta-a-internet-158097/'},
    {id: 5, title: '"A primeira com pontos de recarga para bicicletas elétricas no Brasil."', value: 'Vela Bikes lança primeira rede de Recarga Rápida na Exame', img: 'https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fpress%2FExameVelaBikes.png?alt=media&token=ee839626-61af-4f71-a4de-341e97f22c99', link: 'https://exame.com/pme/fabricante-de-bike-eletrica-e-primeira-a-instalar-pontos-de-recarga-em-sp/'}
  ]


const HomeCards = () =>
  <div className='HomeCards'>
    <CarouselReview itemsToShow={1} showArrows={false}>
        {items.map(item => 
        <div key={item.id}>
          <a href={item.link} target='_blank'>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.value} />
          </a>
        </div>)}
    </CarouselReview>
    <style jsx>{`
    .HomeCards {
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 3em 0 2em 0;
    }
    h2 {
      color: ${offBlack}
    }
    img {
      max-width: 200px;
      padding: 1em 0em;
    }
    .HomeCards button {
      background-color: transparent;
    }
      @media only screen and (min-width: 768px) {
        .HomeCards {
          display: flex; 
          flex-direction: column;
          justify-content: space-around;
          margin: 3em 0 1em 0;
        }
        h2 {
          font-size: 2em;
        }
        .img {
          max-width: 120px;
        }
      }
    `}
    </style>
  </div>

export default HomeCards
