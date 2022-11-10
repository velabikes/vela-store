import { compose } from "recompose"
import Head from "next/head"
import { offWhite, darkGray } from "../style/colors"
import PaddedView from "../components/PaddedView"

const Contact = () => (
  <div className="contact">
    <Head>
      <title>Contato - Vela Bikes</title>
      <link rel='alternate' hrefLang='pt-br' href='https://velabikes.com.br/contato' />
      <meta httpEquiv='content-language' content='pt-br' />
      <meta name='application-name' content='Vela Bikes Store' />
      <meta name='description' content='Entre em contato com nosso atendimento, estamos sempre felizes em ajudar!' />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" /> 
      <meta name="twitter:title" content="Contato - Vela Bikes" />
      <meta name="twitter:description" content="Entre em contato com nosso atendimento, estamos sempre felizes em ajudar!" />
      <meta name="twitter:image" content="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/b5d58fc8-ad62-4d65-89b8-1e59f4473d0b.jpg" />
      <meta property='og:url' content='https://velabikes.com.br/contato' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Contato - Vela Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Entre em contato com nosso atendimento, estamos sempre felizes em ajudar!' />
      <meta property='og:image' content='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/b5d58fc8-ad62-4d65-89b8-1e59f4473d0b.jpg' />
    </Head>
    <div className="main">
      <img
        src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/b5d58fc8-ad62-4d65-89b8-1e59f4473d0b.jpg"
        alt="Contato"
      />
      <div className="content">
        <h1>Contato</h1>
        <p>
          Confira os canais de atendimento oficiais da Vela e entre em contato com sua solicitação.
        </p>
        <br />
        <h3>Horário:</h3>
        <h4>Seg - Sex: 10h às 18h</h4>
        <br />
        <h3>E-mail:</h3>
        <h4>
          <a href="mailto:contato@velabikes.com.br">contato@velabikes.com.br</a>
          <br />Iremos responder sua solicitação em até <b>48 horas</b>.
        </h4>
        <br />
        <h3>WhatsApp:</h3>
        <h4>
          <a href="https://api.whatsapp.com/send?phone=5511963934737">((11) 9.6393-4737</a>
          <br />Fuciona dentro do horário comercial e é a forma mais ágil de comunicação.
        </h4>
        <br />
        <h3>Chat:</h3>
        <h4>
          Para suporte imediato, dúvidas e feedbacks, envie uma mensagem no chat (localizado à
          direita da tela).
        </h4>
      </div>
      <div className="alert">
        <p>
          <b>Precisa de ajuda?</b>
          <br /> Fale com nosso suporte ao cliente, estamos sempre felizes em
          ajudar!
        </p>
        <p>
          <b>Precisa de serviços nas nossas oficinas?</b>
          <br /> Pedimos para realizar o agendamento antes pelos canais, para
          garantir uma experiência completa e eficiente.
        </p>
        <p>
          <b>Problemas com o pedido?</b>
          <br /> Avise-nos imediatamente para entendermos e avaliarmos o
          ocorrido.
        </p>
      </div>
    </div>
    <PaddedView>
      <div className="section">
        <div className="left">
          <img
            src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/e28953c8-5547-4bf1-8acf-521f38934af8.png"
            alt="Perguntas Frequentes"
          />
          {/* <div className="left-content">
            <h2>FAQ</h2>
            <h4>Confira as perguntas frequentes para uma resposta imediata</h4>
            <p>
              Muitas vezes, sua dúvida é similar a de outros Velejadores que já
              visitaram nosso site. Veja quais são os{" "}
              <a href="https://velabikes.freshdesk.com/support/home">tópicos</a>{" "}
              mais comentados.
            </p>
          </div> */}
        </div>
        <div className="right">
          <div className="right-content">
            <h2>Parcerias</h2>
            <h4>
              Conhece alguma bicicletaria de confiança? Um café bike-friendly
              que pode ser um ponto de recarga?
            </h4>
            <p>
              Conte pra nós! Estamos sempre à procura de novas parcerias e
              confiamos na sua{" "}
              <a href="https://forms.gle/ak7SmCqumKLRQiyr5">indicação</a>.
            </p>
          </div>
          <img
            src="https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/c28856bb-d9b0-4ca8-88c8-c54fbe711803.png"
            alt="Parcerias"
          />
        </div>
      </div>
    </PaddedView>
    <style jsx>{`
      h3 {
        color: ${darkGray};
      }
      .content {
        padding: 2em;
        text-align: center;
      }
      .content img {
        max-height: 60vh;
        object-fit: cover;
      }
      .alert {
        background-color: ${offWhite};
        padding: 2em;
        margin: 0 auto;
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
      @media only screen and (min-width: 768px) {
        .main img {
          max-width: 40%;
          min-width: 2em;
          max-height: calc(100vh - 3.5em);
          object-fit: cover;
          object-position: 80% 50%;
        }
        .content {
          text-align: left;
          padding: 2.5em 4em;
          min-width: 30em;
        }
        .alert {
          padding-top: 4em;
          max-height: 100%;
          min-width: 16em;
          max-width: 16em;
        }
        .main {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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

    `}</style>
  </div>
);
export default compose()(Contact)
