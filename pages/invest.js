import { compose } from 'recompose'
import Head from 'next/head'
import PaddedView from '../components/PaddedView'
import InvestImage from '../components/invest/InvestImage'
import { offBlack, offWhite, lightGray, darkGray } from '../style/colors'

const Invest = () =>
  <>
    <Head>
      <title>Investir</title>
    </Head>
    <InvestImage />
    <div className='main'>
      <div className='main-title'>
        <h1>Tecnologia na mobilidade</h1>
        <p>Você acredita no desenvolvimento da mobilidade urbana no Brasil?</p>
      </div>
      <div className='main-subtitle'>
        <p>A bicicleta elétrica cria uma vivência mais qualificada, um aproveitamento mais efetivo do espaço público e permite que as pessoas pedalem de forma mais inteligente pela cidade.</p>
      </div>
    </div>
    <PaddedView>
      <div className='values'>
        <div className='left'>
          <h3>Sustentabilidade</h3>
          <p>Pensar em uma cidade sustentável, significa abraçar novas formas de transporte, agilizar o tempo de deslocamento e trazer experiências mais ricas para quem diariamente se locomove pelas vias urbanas.</p>
        </div>
        <div className='right'>
          <h3>Transparência</h3>
          <p>A Vela tem como base uma comunicação digital transparente, empática e que respeita a privacidade. Acreditamos no desenvolvimento urbano colaborativo, que aproxima as pessoas e fortalece relações.</p>
        </div>
      </div>
    </PaddedView>
    <div className='models-content'>
      <h2>Modelos de aporte</h2>
      <div className='models'>
        <div className='m1'>
          <h3>Investimento</h3>
          <p>Seja sócio com ações percentuais definidas e participe da nossa jornada de crescimento.</p>
        </div>
        <div className='m2'>
          <h3>Mútuo conversível</h3>
          <p>A segurança da aplicação financeira, com a possibilidade de conversão do valor corrigido em ações da Vela.</p>
        </div>
        <div className='m3'>
          <h3>Aplicação financeira</h3>
          <p>Contribua para o nosso desenvolvimento e tenha retorno financeiro mensal acima da média do mercado.</p>
        </div>
      </div>
    </div>
    <div className='invest-content'>
      <div className='invest-form'>
        <div className='invest-img'>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/20fc6f70-6068-4c12-81ab-f94456de2ea5.png' alt='Mulher andando de bicicleta em quadra azul' />
        </div>
        <div className='invest-fields'>
          <h2>Investir</h2>
          <p>Entre em contato conosco para entendermos juntos qual modelo se encaixa melhor no seu perfil de investidor:</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      p {
        position: relative;
      }
      h3 {
        color: ${darkGray};
        padding-bottom: 1em;
        font-size: 1.2em;
      }
      h2 {
        text-align: center;
      }
      .main-title {
        background-color: ${offBlack};
        color: ${offWhite};
        padding: 2em;
        text-align: center;
      }
      .main-title h1 {
        color: ${offWhite};
      }
      .main-subtitle {
        padding: 2em;
      }
      .values {
        display: flex;
        flex-direction: column;
        background-color: ${lightGray};
      }
      .left {
        padding: 2em;
      }
      .right {
        text-align: right;
        padding: 2em;
      }
      .models-content {
        background-color: ${lightGray};
        padding: 2em;
        margin-top: 2em;
      }
      .models {
        display: flex;
        flex-direction: column;
      }
      .models > * {
        margin: 2em 0;
        padding: 3em;
        background-color: ${offWhite};
      }
      .invest-content {
        background-color: ${offBlack};
        display: flex;
        flex-direction: column;
        padding: 2em;
      }
      .invest-fields {
        padding: 2em;
        background-color: ${offWhite};
      }
      .invest-fields p{
        font-size: 0.8em;
      }
      .invest-fields h2{
        color: ${darkGray};
        text-align: left;
      }
      @media only screen and (min-width: 768px) {
        .main {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .main-subtitle {
          max-width: 26em;
          padding: 2em 2em 0 2em;
        }
        .main-title {
          max-width: 24em;
          text-align: right;
          margin-top: -5em;
          z-index: 2;
          position: relative
        }
        .main-title h1 {
          font-size: 2.5em;
        }
        .values {
          flex-direction: row;
          padding: 2em 4em;
          margin-top: 4em;
        }
        .right {
          border-left: 1px solid ${offWhite}
        }
        .models-content {
          margin-top: 4em;
        }
        .models {
          flex-direction: row;
          justify-content: center;
        }
        .models > * {
          width: 25vw;
          margin: 2em;
        }
        .models > * > p {
          font-size: 0.8em;
        }
        .invest-content {
          padding: 4em;
        }
        .invest-form {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .invest-fields {
          padding-left: 10em;
          margin-left: -8em;
          max-width: 40vw;
        }
        .invest-img {
          max-width: 20vw;
          margin: 2em 0;
          z-index: 1;
        }
      }
    `}</style>
  </>

export default compose(
)(Invest)
