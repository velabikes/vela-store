import Head from 'next/head'
import Link from 'next/link'
import LandingImage from 'components/vela/LandingImage'
import Button from '../components/Button'
import PaddedView from '../components/PaddedView'
import { offWhite, darkGray, offBlack, white } from '../style/colors'
import { Navigation, Charge, Battery } from '../components/Icons'

const Vela = () =>
  <div className='HomePage'>
    <Head>
      <title>Vela 2 - Vela Bikes</title>
    </Head>
    <div className='cover'>
      <LandingImage />
      <div className='cta'>
        <div className='slogan'>
          <h1>V2</h1>
          <h4>A geração smart de bikes elétricas da Vela</h4>
        </div>
        <div className='actions'>
            <Link href='/vela2'>
              <Button primary >Monte a sua</Button>
            </Link>
          </div>
      </div>
    </div>
    <PaddedView>
      <div className='section'>
        <div className='right'>
          <div className='right-content'>
            <h2>Elétrica & smart</h2>
            <h4>Conectada com as ruas, com seu celular e com você</h4>
            <p>Nosso aplicativo te acompanha pelo caminho, mostrando em tempo real as informações essenciais para velejar com tranquilidade.</p>
          </div>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/e3a28fde-abd9-45a4-9218-5eb691d9e089.jpg' alt='Smartbike' />
        </div>
      </div>
    </PaddedView>
    <div className='image-cut'>
      <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/4c7d7806-85db-4c1a-b7fb-67cd2f630049.png' alt='Bike elétrica' />
      <div className='tagline'>
        <h2>Tecnologia e design nunca estiveram tão próximos</h2>
        <div className='actions'>
            <Link href='/vela2'>
              <Button primary >Monte a sua</Button>
            </Link>
        </div>
      </div>
    </div>
    <div className='app-content'>
      <PaddedView>
      <div className='section'>
        <div className='right'>
          <div className='right-content'>
            <h2>App companheiro</h2>
            <h4>Conte com auxílio e muito mais tranquilidade nas pedaladas</h4>
            <p>Utilize o bloqueio eletromagnético, receba notificações de atividades suspeitas e consulte o mapa para se localizar pela cidade com eficiência.</p>
          </div>
        </div>
      </div>
      <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/ed4c1b5f-ef18-4808-8355-d8f6b1423f13.png' alt='App Vela 2' />
      <div className='app-features'>
        <div className='app-class'>
          <div className='app-icon'>
            <Battery />
          </div>
          <p>Nível da bateria</p>
        </div>
        <div className='app-class'>
          <div className='app-icon'>
            <Navigation />
          </div>
        <p>Localização GPS</p>
        </div>
        <div className='app-class'>
          <div className='app-icon'>
            <Charge />
          </div>
        <p>Controle de potência</p>
        </div>
      </div>
      <div className='section'>
        <div className='left'>
          <div className='left-content'>
            <h2>Sempre visível</h2>
            <h4>O rastreamento GPS garante que sua bicicleta esteja sempre ao alcance</h4>
            <p>Observe sua Vela de qualquer distância, em qualquer lugar. Cuidamos da sua segurança, para um deslocamento sem preocupações.</p>
          </div>
        </div>
      </div>
      </PaddedView>
    </div>
    <PaddedView>
      <div className='section'>
        <div className='right'>
          <div className='right-content'>
            <h2>Maior precisão</h2>
            <h4>Sensores de pedal com alta percepção de movimento, para você pedalar com agilidade e confiança</h4>
            <p>Ao iniciar seu trajeto, com o assistente de partida da Vela 2, a resposta do motor é ainda mais rápida e intensa.</p>
          </div>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/ba0a2156-5584-4806-8c7c-48e47cc670c4.jpg' alt='Sensor de pedal' />
        </div>
        <div className='left'>
        <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/95fd9074-45b9-49b1-a378-528663e9ef0d.jpg' alt='Bateria impermeável' />
          <div className='left-content'>
            <h2>Impermeável</h2>
            <h4>Conecte o carregador diretamente na bike ou retire a bateria para carregar onde e quando precisar</h4>
            <p>A bateria possui formato cilíndrico, feita com células de lítio e acabamento  completamente impermeabilizado. É projetada para encaixar no tubo do selim e ficar protegida no quadro.</p>
          </div>
        </div>
        <div className='right'>
          <div className='right-content'>
            <h2>Desempenho inédito</h2>
            <h4>Freio regenerativo que recupera energia para a bateria nas descidas, com até <b>60km</b> de autonomia em trajetos</h4>
            <p>Tenha toda a assistência necessária para pedalar sem qualquer esforço, mesmo nas maiores inclinações.</p>
            <div className='actions'>
              <Link href='/vela2'>
                <Button primary >Monte a sua</Button>
              </Link>
            </div>
          </div>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/31fe79c8-b877-47b4-a404-1aa65801049a.jpg' alt='Freio regenerativo' />
        </div>
      </div>
      <div className='bfunction-content'>
        <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/7c334ed2-6d6a-4f67-9893-792c9d0c2e88.png' />
        <h2>Botão multifunções</h2>
        <h4>Integrado ao guidão da Vela 2, o acionador em aço inox é totalmente à prova d'água e resistente à impactos</h4>
        <div className='bfunctions'>
          <div className='bleft'>
            <h3>Assist</h3>
            <p>Assistente de partida</p>
          </div>
          <div className='bcenter'>
            <h3>Boost</h3>
            <p>Impulso na potência</p>
          </div>
          <div className='bright'>
            <h3>Lock</h3>
            <p>Bloqueio da bike</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='left'>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/4a4e1121-733b-407a-baa3-08539e201028.jpg' alt='Design urbano' />
            <div className='left-content'>
              <h2>Design atemporal</h2>
              <h4>Cada detalhe é pensado para oferecer muito conforto, com acabamento artesanal e uma paleta de cores exclusivas</h4>
              <p>Escolher a Vela é adotar uma nova forma de transporte, agilizar o tempo no trânsito e se aventurar por melhores experiências na cidade.</p>
            </div>
          </div>
          <div className='right'>
            <div className='right-content'>
              <h2>Clássica & urbana</h2>
              <h4>Equipada com todos os acessórios essenciais para o dia a dia</h4>
              <p>A tranquilidade de pedalar com faróis automáticos integrados, conjunto completo de paralamas, manoplas ergonômicas e mudflaps</p>
              <div className='actions'>
                <Link href='/vela2'>
                  <Button primary >Monte a sua</Button>
                </Link>
              </div>
            </div>
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/1733ae4d-b955-4b4d-b97e-038439ab0c1c.jpg' alt='Bike clássica' />
          </div>
        </div>
    </PaddedView>
    <style jsx>{`
      .cover {
        position: relative;
        background-color: ${offWhite};
      }
      .cta {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 4em;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
        text-align: center;
      }
      h1 {
        font-size: 6em;
        color: ${offWhite};
        font-weight: 900;
      }
      .slogan {
        background-color: ${white};
        padding: 1rem 2rem;
        max-width: 15em;
      }
      .slogan h1 {
        color: ${darkGray};
      }
      .cta .actions {
        margin-top: -1.2em;
      }
      .section {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
      }
      .left {
        display: flex;
        flex-direction: column;
      }
      .left-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .right {
        display: flex;
        flex-direction: column-reverse;
      }
      .right-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .image-cut {
        width: 100%;
        overflow: hidden;
      }
      .image-cut img {
        height: 20em;
        object-fit: cover;
        object-position: 50% 50%;
      }
      .tagline {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 2em 4em;
        background-color: ${offWhite};
      }
      .tagline h2 {
        margin-bottom: 1em;
        color: ${darkGray};          
      }
      .app-content{
        background-color: ${offWhite};
      }
      .app-content img {
        margin-bottom: 2em;
      }
      .app-content .section {
        padding-top: 0em;
      }
      .app-features {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .app-class {
        max-width: 5em;
        margin: 1em;
      }
      .app-icon {
        max-width: 2em;
        margin: 0 auto;
      }
      .app-class p {
        text-align: center;
      }
      .bfunction-content {
        background-color: ${offWhite};
        max-width: 45em;
        padding: 3em 0;
        margin: 2em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bfunction-content h4{
        max-width: 20em;
        text-align: center;
      }
      .bfunctions {
        display: flex;
        flex-direction: column;
        padding: 0em 2em 1em 2em;
        justify-content: center;
      }
      .bfunctions h3{
        color: ${offBlack};
      }
      .bleft, .bright, .bcenter {
        padding: 2em;
        text-align: center;
        max-width: 10em;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 8em;
        }
        
        .cta {
          position: absolute;
          justify-content: flex-end;
          align-items: flex-start;
          left: 8em;
          bottom: 4em;
        }
        .cta .actions {
          margin-left: 4em;
          margin-top: 0em;
         }
        .slogan {
          background-color: transparent;
        }
        .cta .slogan h4, .cta .slogan h1 {
          color: ${offWhite};
        }
        .section {
          flex-direction: column;
          padding-top: 4em;
          padding-bottom: 2em;
          align-items: stretch;
        }
        .left {
          flex-direction: row-reverse;
          margin-bottom: 2em;
        }
        .section img {
          max-width: 32em;
          min-width: 10em;
          object-fit: cover;
        }
        .section p, .section h4 {
          width: 16em;
        }
        .right {
          flex-direction: row-reverse;
          align-self: start;
        }
        .left-content {
          padding: 4em;
          text-align: right;
        }
        .right-content {
          padding: 4em;
          text-align: left;
        }
        .image-cut img {
          width:100%;
          height: 100%;
          object-fit: cover;
        }
        .image-cut {
          position: relative;
          z-index: 0;
        }
        .tagline {
          justify-content: flex-end;
          align-items: flex-end;
          top: 0em;
          right: 2em;
          text-align: right;
          position: absolute;
          max-width: 30em;
          background-color: transparent;
        }
        .app-content .section .right {
          margin-top: -20em;
          position: relative;
          z-index: 1;
        }
        .app-content .section .left {
          margin-top: -20em;
          margin-bottom: -10em;
        }
        .app-content img{
          position: relative;
          max-width: 75%;
          margin-top: -10em;
          margin-left: 10em;
        }
        .app-features {
          justify-content: space-around;
          max-width: 25em;
        }
        .app-class {
          margin: 4em 0 0 0;
        }
        .bfunctions {
          flex-direction: row;
          padding: 2em
          justify-content: space-between;
          margin-top: 2em;
        }
      }
    `}</style>
  </div>

export default Vela
