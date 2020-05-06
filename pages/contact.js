import { compose } from 'recompose'
import Head from 'next/head'
import { offWhite, darkGray } from '../style/colors'

const Contact = () =>
  <div className='contact'>
    <Head>
      <title>Contato - Vela Bikes</title>
    </Head>
    <div className='main'>
      <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/26521735-4d77-450a-8133-8e390568d5cb.jpg' />
      <div className='content'>
        <h1>Contato</h1>
        <p>Confira os canais de atendimento oficiais da Vela e entre em contato com sua solicitação.</p>
        <br />
        <h3>Horário:</h3>
        <h4>Seg - Sex: 10h às 18h</h4>
        <br />
        <h3>Telefone:</h3>
        <h4>(11) 4200-4950</h4>
        <br />
        <h3>E-mail:</h3>
        <h4><a href='mailto:contato@velabikes.com.br'>contato@velabikes.com.br</a></h4>
        <br />
        <h3>Chat:</h3>
        <h4>Para dúvidas e feedbacks, envie uma mensagem no chat (localizado à direita da tela).</h4>
      </div>
      <div className='alert'>
        <p><b>Precisa de ajuda?</b><br /> Fale com nosso suporte ao cliente, estamos sempre felizes em ajudar!</p>
        <p><b>Precisa de serviços nas nossas oficinas?</b><br /> Pedimos para realizar o agendamento antes pelos canais, para garantir uma experiência completa e eficiente.</p>
        <p><b>Problemas com o pedido?</b><br /> Avise-nos imediatamente para entendermos e avaliarmos o ocorrido.</p>
      </div>
    </div>
    <style jsx>{`
      h3 {
        color: ${darkGray};
      }
      .content {
        padding: 2em;
        text-align: center;
      }
      img {
        max-height: 60vh;
        object-fit: cover;
      }
      .alert {
        background-color: ${offWhite};
        padding: 2em;
        margin: 0 auto;
      }
      @media only screen and (min-width: 768px) {
        img {
          max-width: 30em;
          min-width: 0em;
          max-height: 100%;
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
        }
      }
    `}</style>
</div>  
export default compose(
)(Contact)
