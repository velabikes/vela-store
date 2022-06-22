import { compose } from "recompose";
import Head from "next/head";
import PaddedView from "../components/PaddedView";
import InvestImage from "../components/invest/InvestImage";
import { offBlack, white, offWhite, darkGray } from "../style/colors";
import InvestForm from "../components/invest/InvestForm";

const Invest = () => (
  <>
    <Head>
      <title>Investir - Vela Bikes</title>
      <meta httpEquiv='content-language' content='pt-br' />
      <link rel='alternate' hrefLang='pt-br' href='https://velabikes.com.br/investir' />
      <meta name='application-name' content='Vela Bikes Store' />
      <meta name='description' content='Vamos mudar o desenvolvimento da mobilidade urbana no Brasil!' />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" /> 
      <meta name="twitter:title" content="Investir - Vela  Bikes" />
      <meta name="twitter:description" content="UVamos mudar o desenvolvimento da mobilidade urbana no Brasil!" />
      <meta name="twitter:image" content="https://drive.google.com/file/d/1LJNPq3lytOXrv77Gqk_3ZQ4G3Oj6NvOs/view?usp=sharing" />
      <meta property='og:url' content='https://velabikes.com.br/investir' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Investir - Vela Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Vamos mudar o desenvolvimento da mobilidade urbana no Brasil!' />
      <meta property='og:image' content='https://drive.google.com/file/d/1LJNPq3lytOXrv77Gqk_3ZQ4G3Oj6NvOs/view?usp=sharing' />
    </Head>
    <InvestImage />
    <PaddedView style={{ background: `${white}` }}>
      <div className="main">
        <div className="main-title">
          <h1>Pedale para o futuro com a Vela</h1>
          <h4>Vamos mudar o desenvolvimento da mobilidade urbana no Brasil!</h4>
        </div>
        <div className="main-subtitle">
          <p>
            Nascemos de um financiamento coletivo em 2014, do qual alguns
            apoiadores vieram a se tornar sócios e credores. Hoje abrimos espaço
            à todos que se identificam com o propósito de contribuir para
            cidades mais saudáveis. O coletivo está no DNA da Vela.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img
            src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/dae5968e-1ec7-457a-86f7-ae082ca4c460.jpg"
            alt="Inovação Vela"
          />
          <div className="left-content">
            <h2>Inovação</h2>
            <h4>
              Crescemos no ambiente digital e somos verticalmente integrados
            </h4>
            <p>
              A Vela vive em constante evolução, desde o desenvolvimento dos
              produtos até a experiência de uso para os clientes.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <h2>Transparência</h2>
            <h4>
              Temos como base uma comunicação empática, transparente e que
              respeita a privacidade
            </h4>
            <p>
              Acreditamos em um espaço urbano mais colaborativo, que aproxima as
              pessoas e fortalece relações.
            </p>
          </div>
          <img
            src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/53cd5397-c076-4ab5-9145-0294c31873da.jpg"
            alt="Transparência Vela"
          />
        </div>
      </div>
    </PaddedView>
    <div className="models-content">
      <div className="models">
        <div className="m1">
          <h3>Seja acionista</h3>
          <p>
            Invista em ações com percentual definido e participe da nossa
            jornada pela transformação da mobilidade urbana.
          </p>
          <p className="profile">
            <b>Perfil arrojado:</b> aceita assumir um risco maior, atrelado ao
            maior potencial de retorno do investimento.
          </p>
        </div>
        <div className="m2">
          <h3>Seja credor</h3>
          <p>
            Contribua com a nutrição para o nosso desenvolvimento e tenha um
            retorno mensal acima da média do mercado.
          </p>
          <p className="profile">
            <b>Perfil cauteloso:</b> se tratando de investimentos, prefere
            mitigar riscos e escolher um retorno seguro.{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="invest-content">
      <PaddedView>
        <div className="invest-form">
          <div className="invest-img">
            <img
              src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/20fc6f70-6068-4c12-81ab-f94456de2ea5.png"
              alt="Mulher andando de bicicleta em quadra azul"
            />
          </div>
          <div className="invest-fields">
            <h2>Investir</h2>
            <p>
              Como você deseja se envolver na rodada de investimentos da Vela?
              Deixe sua mensagem para seguirmos contato:
            </p>
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
      .section {
        display: flex;
        flex-direction: column;
        padding-top: 1em;
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
        margin: 1em 0;
        display: flex;
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
        .models-content {
          margin: 0 auto; 
          padding: 2em;
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
        .section {
          flex-direction: column;
          align-items: center;
          padding: 0;
        }
        .left {
          flex-direction: row-reverse;
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .section img {
          width: 22em;
          height: 22em;
          object-fit: cover;
        }
        .section p, .section h4 {
          width: 16em;
        }
        .right {
          flex-direction: row-reverse;
        }
        .left-content {
          padding: 3em 4em 2em 2em;
          text-align: right;
          display: flex; 
          flex-direction: column;
          align-items: flex-end;
        }
        .right-content {
          padding: 3em 2em 2em 4em;
          text-align: left;
        }
      }
      @media only screen and (min-width: 1200px) {
        .section {
          padding-top: 2em;
          align-items: stretch;
        }
        .right {
          align-self: start;
        }
        .section img {
          width: 32em;
          height: 25em;
          object-fit: cover;
        }
      }
      }  
    }
    `}</style>
  </>
);

export default compose()(Invest);
