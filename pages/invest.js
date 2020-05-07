import { compose } from 'recompose'
import Head from 'next/head'
import PaddedView from '../components/PaddedView'
import InvestImage from '../components/invest/InvestImage'
import { offBlack, white, offWhite, darkGray, midGray } from '../style/colors'
import InvestForm from '../components/invest/InvestForm'

const Invest = () =>
  <>
    <Head >
      <title>Investir - Vela Bikes</title>
    </Head>
    <InvestImage />
    <PaddedView style={{ background: `${white}` }}>
      <div className='main'>
        <div className='main-title'>
          <h1>Pedale para o futuro com a Vela</h1>
          <h4>Vamos mudar o desenvolvimento da mobilidade urbana no Brasil!</h4>
        </div>
        <div className='main-subtitle'>
          <p>Nascemos de um financiamento coletivo em 2014, do qual alguns apoiadores vieram a se tornar sócios e credores. Hoje abrimos espaço à todos que se identificam com o propósito de contribuir para cidades mais saudáveis. O coletivo está no DNA da Vela.</p>
        </div>
      </div>
      <div className='values'>
        <div className='left'>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/04b8d52c-77bd-4f8f-9db1-a3ac0cb7cb77.jpg' />
          <div className='left-content'>
            <h2>Inovação</h2>
            <h4>Crescemos no ambiente digital e somos verticalmente integrados</h4>
            <p>A Vela vive em constante evolução, desde o desenvolvimento dos produtos até a experiência de uso para os clientes.</p>
          </div>
        </div>
        <div className='right'>
          <div className='right-content'>
            <h2>Transparência</h2>
            <h4>Temos como base uma comunicação empática, transparente e que respeita a privacidade</h4>
            <p>Acreditamos em um espaço urbano mais colaborativo, que aproxima as pessoas e fortalece relações.</p>
          </div>
          <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/0ccd4acd-f17c-453c-8048-522b76642b39.jpg' />
        </div>
      </div>
    </PaddedView>
    <div className='models-content'>
        <div className='models'>
          <div className='m1'>
            <h3>Seja acionista</h3>
            <p>Invista em ações com percentual definido e participe da nossa jornada pela transformação da mobilidade urbana.</p>
            <p className='profile'><b>Perfil arrojado:</b> aceita assumir um risco maior, atrelado ao maior potencial de retorno do investimento.</p>
          </div>
          <div className='m2'>
            <h3>Seja credor</h3>
            <p>Contribua com a nutrição para o nosso desenvolvimento e tenha um retorno mensal acima da média do mercado.</p>
            <p className='profile'><b>Perfil cauteloso:</b> se tratando de investimentos, prefere mitigar riscos e escolher um retorno seguro. </p>
          </div>
        </div>
      </div>
    <div className='invest-content'>
      <PaddedView>
        <div className='invest-form'>
          <div className='invest-img'>
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/20fc6f70-6068-4c12-81ab-f94456de2ea5.png' alt='Mulher andando de bicicleta em quadra azul' />
          </div>
          <div className='invest-fields'>
            <h2>Investir</h2>
            <p>Como você deseja se envolver na rodada de investimentos da Vela? Deixe sua mensagem para seguirmos contato:</p>
            <InvestForm />
          </div>
        </div>
      </PaddedView>
    </div>
    <style jsx>{`
      p {
        position: relative;
        padding-bottom: 1em;
      }
      h3 {
        color: ${darkGray};
      }
      .main-title {
        background-color: ${offBlack};
        color: ${offWhite};
        padding: 2em 2em 1.5em 2em;
        text-align: center;
        margin-top: -5em;
        z-index: 2;
        position: relative;
      }
      .main-title h1 {
        color: ${offWhite};
      }
      .main-title h4 {
        color: ${offWhite};
      }
      .main-title p {
        padding-bottom: 0;
      }
      .main-subtitle {
        text-align: center;
        padding: 2em 1em;
      }
      .values {
        display: flex;
        flex-direction: column;
      }
      .left {
        display: flex;
        flex-direction: column;
        margin: 1em 0;
      }
      .left-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .right {
        display: flex;
        margin: 1em 0;
        flex-direction: column-reverse;
      }
      .right-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .models-content {
        padding: 2em;
        background-color: ${offWhite};
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
      .models > * > .profile {
        padding-bottom: 0;
      }
      .invest-content {
        display: flex;
        flex-direction: column;
        background-color: ${offWhite};
      }
      .invest-fields {
        padding: 2em;
        background-color: ${offWhite};
      }
      .invest-fields p{
        text-align: center;
      }
      .invest-fields h2{
        color: ${darkGray};
        text-align: center;
      }
      @media only screen and (min-width: 768px) {
        .main {
          display: flex;
          flex-direction: row;
        }
        .main-subtitle {
          padding: 2em 0 0 2em;
          text-align: left;
          flex: 1 1 65%;
        }
        .main-title {
          flex: 1 1 45%;
          max-width: 20em;
        }
        .values {
          flex-direction: column;
          padding-top: 2em;
          padding-bottom: 2em;
          align-items: stretch;
        }
        .left {
          flex-direction: row-reverse;
          margin-bottom: 2em;
        }
        .values img {
          max-width: 32em;
          min-width: 10em;
          object-fit: cover;
        }
        .values p, .values h4 {
          width: 16em;
        }
        .right {
          flex-direction: row-reverse;
          align-self: start;
        }
        .left img {
          max-width: 100%;
        }
        .right img {
          max-width: 100%;
        }
        .left-content {
          padding: 4em;
          text-align: right;
        }
        .right-content {
          padding: 4em;
          text-align: left;
        }
        .models-content {
          margin: 0 auto; 
          padding: 2em;
          background-color: 
        }
        .models {
          flex-direction: row;
          justify-content: center;
        }
        .models > * {
          width: 21em;
          margin: 2em;
        }
        .models > * > .profile {
          font-size: 0.8em;
        }
        .invest-content {
          padding: 4em;
          background-color: ${offBlack};
        }
        .invest-form {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .invest-fields {
          padding-left: 8em;
          margin-left: -5em;
          max-width: 45em;
          min-width: 35em;
          text-align: left;
        }
        .invest-fields h2{
          text-align: left;
        }
        .invest-fields p {
          text-align: left;
        }
        .invest-img {
          max-width: 30em;
          min-width: 15em;
          margin-top: 2em;
          z-index: 1;
        }
      }  
    }
    `}</style>
  </>

export default compose(
)(Invest)
