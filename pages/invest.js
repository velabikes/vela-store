import { compose } from 'recompose'
import Head from 'next/head'
import PaddedView from '../components/PaddedView'
import InvestImage from '../components/invest/InvestImage'
import { offBlack, white, offWhite, darkGray } from '../style/colors'
import InvestForm from '../components/invest/InvestForm'

const Invest = () =>
  <>
    <Head >
      <title>Investir</title>
    </Head>
    <InvestImage />
    <PaddedView style={{ background: `${offWhite}` }}>
      <div className='main'>
        <div className='main-title'>
          <h1>Pedale para o futuro com a Vela</h1>
          <p>Vamos juntos mudar o desenvolvimento da mobilidade urbana no Brasil!</p>
        </div>
        <div className='main-subtitle'>
          <p>Nascemos de um financiamento coletivo em 2014, em que alguns apoiadores vieram a se tornar sócios e credores. Hoje abrimos espaço à todos que se identificam com o propósito de contribuir para cidades mais saudáveis. O coletivo está no DNA da Vela.</p>
        </div>
      </div>
      <div className='values'>
        <div className='left'>
          <h3>Inovação</h3>
          <p>Crescemos no ambiente digital e somos verticalmente integrados. A Vela vive em constante evolução, desde o desenvolvimento dos produtos até a experiência de uso para os clientes.</p>
        </div>
        <div className='right'>
          <h3>Transparência</h3>
          <p>Temos como base uma comunicação empática, transparente e que respeita a privacidade. Acreditamos em um espaço urbano mais colaborativo, que aproxima as pessoas e fortalece relações.</p>
        </div>
      </div>
      <div className='models-content'>
        <h2>Modelos de aporte</h2>
        <div className='models'>
          <div className='m1'>
            <h3>Seja sócio</h3>
            <p>Invista em ações com percentual definido e participe ativamente da nossa jornada de transformação da mobilidade.</p>
            <p><b>Perfil arrojado:</b> aceita assumir um risco maior, atrelado ao maior potencial de retorno do investimento.</p>
          </div>
          <div className='m2'>
            <h3>Seja credor</h3>
            <p>Contribua com a nutrição para o nosso desenvolvimento e tenha um retorno mensal acima da média do mercado.</p>
            <p><b>Perfil cauteloso:</b> se tratando de investimentos, prefere mitigar riscos e escolher um retorno seguro. </p>
          </div>
        </div>
      </div>
    </PaddedView>
    <div className='invest-content'>
      <PaddedView>
        <div className='invest-form'>
          <div className='invest-img'>
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/20fc6f70-6068-4c12-81ab-f94456de2ea5.png' alt='Mulher andando de bicicleta em quadra azul' />
          </div>
          <div className='invest-fields'>
            <h2>Investir</h2>
            <p>Como você quer se envolver com a rodada de investimentos da Vela? Entre em contato para entendermos juntos e seguirmos pedalando:</p>
            <InvestForm />
          </div>
        </div>
      </PaddedView>
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
        color: ${white};
        padding: 2em;
        text-align: center;
        margin-top: -5em;
        z-index: 2;
        position: relative;
      }
      .main-title h1 {
        color: ${white};
      }
      .main-subtitle {
        padding: 2em;
      }
      .values {
        display: flex;
        flex-direction: column;
      }
      .left {
        padding: 1em 1em 0 2em;
        border-left: 1px solid ${darkGray};
      }
      .right {
        text-align: right;
        padding: 1em 2em 0 1em;
        margin: 2em 0;
        border-right: 1px solid ${darkGray};
      }
      .models-content {
        padding: 1em;
      }
      .models {
        display: flex;
        flex-direction: column;
      }
      .models > * {
        margin: 2em 0;
        padding: 2em;
        background-color: ${white};
        box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
      }
      .invest-content {
        background-color: ${offBlack};
        display: flex;
        flex-direction: column;
        padding: 1em 0;
      }
      .invest-fields {
        padding: 2em;
        background-color: ${white};
      }
      .invest-fields p{
        font-size: 1em;
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
          max-width: 28em;
          padding: 2em 0 0 2em;
        }
        .main-title {
          max-width: 24em;
          text-align: right;
        }
        .main-title h1 {
          font-size: 2.5em;
        }
        .values {
          flex-direction: row;
          padding: 2em;
          margin-top: 1em;
        }
        .right {
          margin: 0;
        }
        .models {
          flex-direction: row;
          justify-content: center;
        }
        .models > * {
          width: 35vw;
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
          padding-left: 12em;
          margin-left: -10em;
          max-width: 64vw;
        }
        .invest-fields p{
          font-size: 0.8em;
        }
        .invest-img {
          max-width: 38vw;
          margin-top: 9em;
          z-index: 1;
        }
        @media only screen and (min-width: 1200px) {
          .main-subtitle {
            max-width: 36em;
            padding: 2em 0 0 2em;
          }
          .main-title {
            max-width: 24em;
            text-align: right;
          }
          .models > * {
            width: 35vw;
            padding: 3em;
          }
          .invest-fields {
            padding-left: 10em;
            margin-left: -8em;
            max-width: 48vw;
          }
          .invest-fields p{
            font-size: 0.8em;
          }
          .invest-img {
            max-width: 34vw;
            margin-top: 2em;
            z-index: 1;
          }
        }
      }
    `}</style>
  </>

export default compose(
)(Invest)
