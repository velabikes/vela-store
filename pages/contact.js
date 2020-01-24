import { compose } from 'recompose'
import Head from 'next/head'
import Main from 'components/Main'
import PaddedView from '../components/PaddedView'

const Contact = () =>
  <Main className='contact'>
    <Head>
      <title>Contato</title>
    </Head>
    <PaddedView>
      <h1>Contato</h1>
      <p>Precisa de ajuda? Fale com nosso suporte ao cliente, estamos sempre felizes em ajudar!</p>
      <h3>Horário de atendimento:</h3>
      <p>Seg - Sex: 10h às 18h</p>
      <h3>Telefone:</h3>
      <p>(11) 4200-4950</p>
      <h3>E-mail:</h3>
      <p><a href='mailto:queroinvestir@velabikes.com.br'>contato@velabikes.com.br</a></p>
      <h3>Chat:</h3>
      <p>Para dúvidas e feedbacks, envie uma mensagem no chat.</p>
      <br />
      <p>Precisa de serviços nas nossas oficinas? Pedimos para realizar o agendamento antes, através dos canais mencionados, para garantir uma experiência completa e eficiente.</p>
      <h2>FAQ</h2>
      <p>Muitas vezes, sua dúvida é similar a de outros clientes que já visitaram nosso site. Consulte nossas perguntas frequentes para uma resposta imediata!</p>
      <h2>Investimentos</h2>
      <p>Você acredita no desenvolvimento da mobilidade urbana no Brasil? Nossa principal missão é promover cidades mais saudáveis. Ajude-nos a conquistar novos caminhos e invista na Vela: <a href='mailto:queroinvestir@velabikes.com.br'>queroinvestir@velabikes.com.br</a></p>
    </PaddedView>

    <style jsx>{`
      h2 {
        padding-top: 1.5em;
      }
      h3 {
        text-transform: none;
        font-style: normal;
        font-weight: 600;
        padding-top: 1em;
      }
    `}</style>
  </Main>

export default compose(
)(Contact)
