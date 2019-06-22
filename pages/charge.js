import Head from 'next/head'
import { compose } from 'recompose'
import PaddedView from '../components/PaddedView'
import Button from '../components/Button'
import { offBlack, darkGray, velaGreen, offWhite } from '../style/colors'

const Banner = () => 
  <div className='banner'>
    <img src='static/video.png' style={{ opacity: 0.2 }} />

    <div className='card'>
      <p>Aproveite</p>
      <p>Cada minuto</p>
      <p>na cidade</p>
    </div>

    <div className='card-description'>
      <div className='card-description-text'>
        <p>Conheça a Rede de</p>
        <p>Recarga Rápida</p>
        <p>da Vela.</p>
      </div>
    </div>

    <style jsx>{`
      .banner {
        display: grid;
        position: relative;
        grid-template-columns: 3fr 0 1fr;
      }
      .card {
        position: relative;
        padding: 2.5rem 2rem;
        top: 12rem;
        right: 16rem;
        height: fit-content;
        width: fit-content;
        background-color: ${offBlack};
      }
      .card p {
        font-size: 4.7rem;
        font-weight: bold;
        font-style: italic;
        text-transform: uppercase;
        text-align: right;
        line-height: 1.2;
        color: ${offWhite};
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }
      .card-description {
        position: relative;
        height: 100%;
      }
      .card-description-text {
        position: absolute;
        bottom: 0;
        margin: 2rem 3rem;
      }
      .card-description-text p {
        font-size: 2rem;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>

const VelaPoint = () =>
  <div className='vela-point'>
    <div className='vela-point-description'>
      <h1>Ponto Vela</h1>
      <p>A primeira Rede de Recarga Rápida para bicicletas elétricas, desenvolvida pela Vela, chegou em São Paulo.</p>
      <p>Os pontos são distribuídos em estabelecimentos parceiros para todos os Velejadores aproveitarem.</p>
      <Button big>Seja um parceiro</Button>
    </div>

    <img className='vela-point-image' src='static/point.png' />
    <style jsx>{`
      .vela-point {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: ${offBlack};
      }
      .vela-point h1 {
        color: ${offWhite};
        font-size: 4rem;
      }
      .vela-point p {
        font-size: 1.8rem;
      }
      .vela-point-description :global(button) {
        margin-top: 3rem;
      }
      .vela-point-description {
        position: relative;
        color: ${offWhite};
        // text-align: center;
        // top: 10%;
        margin: 0 7rem;
        // margin-right: 7rem;
        // display: inline-block;
        // vertical-align: middle;
        // top: 25%;
        height: fit-content;

        top: 50%;
        transform: translateY(-50%)
      }
      .vela-point-image {
        position: relative;
        right: 0;
        // height: 100%;
        width: auto;
      } 
    `}</style>
  </div>

const HowWorks = () =>
  <PaddedView className='how-works'>
    <h1>Como funciona?</h1>

    <div className='cards'>
      <div className='card'>
        <img src='static/vela.png' />
        <div className='card-description'>
          <h2>Ficou sem bateria?</h2>
          <p>Você pode oferecer testes para amigos e indicações nosas.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/test-ride.png' />
        <div className='card-description'>
          <h2>Procure um ponto Vela</h2>
          <p>A partir deles, você ajuda a expandir a comunidade Vela pelo Brasil.</p>
        </div>
      </div>

      <div className='card'>
        <img src='static/credit.png' />
        <div className='card-description'>
          <h2>Espere 15 minutos</h2>
          <p>Com os teste e vendas realizados, você acumula benefícios com a gente.</p>
        </div>
      </div>
    </div>

    <style>{`
      .how-works h1 {
        font-size: 4rem;
        margin-top: 8rem;
        margin-bottom: 6rem;
      }
      .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .card {
        text-align: center;
      }
      .card h2 {
        font-size: 2rem;
      }
      .card p {
        font-size: 1.5rem;
      }
      .card-description {
        margin: 0 4rem;
      }
    `}</style>
  </PaddedView>

const About = () =>
  <div className='about'>
    <div className='station'>
    </div>

    <div>
      <img src='static/clock.png' />
      <p>10 Minutos carregando</p>

      <img src='static/plus-ten.png' />
      <p>Quilômetros para rodar</p>

      <img src='static/bateries.png' />
      <p>Carregador para até três baterias simultâneas</p>
    </div>

    <style jsx>{`
      .about {
        display: grid;
        grid-template-columns: 2fr 1fr;
      }
      .station {
        background-color: #e7e8e8;
        width: auto;
        height: auto;
      }
    `}</style>
  </div>

const ChargePage = () =>
  <div>
    <Head>
      <title>Vela: Rede de recarga rápida.</title>
    </Head>

    <h1 className='title'>Rede de recarga rápida</h1>
    <Banner />
    <VelaPoint />
    <HowWorks />
    <About />

    <PaddedView>
      <hr/>
      <div className='statistics'>
        <h2>1.5K</h2>
        <p>Velas circulando em São Paulo</p>

        <h2>500</h2>
        <p>Ciclistas elétricos diários no mapa</p>

        <h2>R$0,05</h2>
        <p>Por dez minutos de recarga</p>
      </div>

      <div className='heat-map'>
        <h1>Mapa de calor</h1>
        <p>Para entender melhor o trajeto diário dos Velejadores Urbanos, a Vela realizou uma pesquisa origem-destino, até chegar nas regiões com mais fluxo.</p>
        <p>Seu estabelecimento está no nosso mapa de calor?</p>
        <Button>Seja um parceiro</Button>
      </div>

      <div>
        <p>Rota de ciclistas</p>
        <p>Clientes potenciais</p>
        <p>Divulgação no site</p>
      </div>
    </PaddedView>

    <style jsx>{`
      .title {
        margin: 4rem;
      }

    `}</style>
  </div>

export default compose(
)(ChargePage)
