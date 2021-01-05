import Head from 'next/head'
import Link from 'next/link'
import LandingImage from 'components/vela/LandingImage'
import Button from '../components/Button'
import PaddedView from '../components/PaddedView'
import { offWhite, darkGray, offBlack, white, lightGray } from '../style/colors'
import { Assist, Boost } from '../components/Icons'

const Vela = () =>
  <div className='HomePage'>
    <Head>
      <title>Smartbike Vela 2 - Vela Bikes</title>
      <meta httpEquiv='content-language' content='pt-br' />
      <link rel='alternate' hrefLang='pt-br' href='https://velabikes.com.br/vela' />
      <meta name='application-name' content='Vela Bikes Store' />
      <meta name='description' content='Conheça a geração smart de bikes elétricas da Vela. Conectada com as ruas, com seu celular e com você.' />
      <meta property='og:url' content='https://velabikes.com.br/vela' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Smartbike Vela 2 - Vela Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Conheça a geração smart de bikes elétricas da Vela. Conectada com as ruas, com seu celular e com você.' />
      <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbike.jpg?alt=media&token=db783cf6-c08e-49ae-98d8-3816c3d06ddf' />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" /> 
      <meta name="twitter:title" content="Smartbike Vela 2 - Vela Bikes" />
      <meta name="twitter:description" content="Conheça a geração smart de bikes elétricas da Vela. Conectada com as ruas, com seu celular e com você." />
      <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FSmartbike.jpg?alt=media&token=db783cf6-c08e-49ae-98d8-3816c3d06ddf" />
    </Head>
    <div className='cover'>
      <LandingImage />
      <div className='cta'>
        <div className='slogan'>
          <h1>V2</h1>
          <h3>Conectada com as ruas, com seu celular e com você.</h3>
          <h4>Conheça a geração smart de bikes elétricas da Vela!</h4>
        </div>
        <div className='actions'>
          <Link href='/vela2'>
            <Button primary>Monte a sua</Button>
          </Link>
        </div>
      </div>
    </div>
    <PaddedView>
      <div className='section'>
        <div className='right'>
          <div className='right-content'>
            <h2>Maior precisão</h2>
            <h4>Sensores de pedal com alta percepção de movimento, para você pedalar com agilidade e confiança</h4>
            <p>Ao iniciar seu trajeto, com o assistente de partida da Vela 2, a resposta do motor é ainda mais rápida e intensa.</p>
          </div>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/a142d80a-87e5-47b5-90ce-c76978dbd3a0.jpg' alt='Sensor de pedal bike elétrica' />
          </a>
        </div>
        <div className='left'>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/e2f0d9af-8587-429c-956c-1aa6c902b398.jpg' alt='Bateria impermeável bicicleta elétrica' />
          </a>
          <div className='left-content'>
            <h2>Removível e impermeável</h2>
            <h4>Conecte o carregador diretamente na bike ou retire a bateria para carregar onde e quando precisar</h4>
            <p>A bateria possui formato cilíndrico, feita com células de lítio e acabamento impermeabilizado. É projetada para encaixar no tubo do selim e ficar protegida no quadro.</p>
          </div>
        </div>
        <div className='right'>
          <div className='right-content'>
            <h2>Freio regenerativo</h2>
            <h4>Recupera energia para a bateria nas descidas, com até <b>60km</b> de autonomia em trajetos</h4>
            <p>Tenha toda a assistência necessária para pedalar sem qualquer esforço, mesmo nas maiores inclinações.</p>
            <div className='actions'>
              <Link href='/vela2'>
                <Button primary>Monte a sua</Button>
              </Link>
            </div>
          </div>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/c9f6a1b6-4dba-4bfb-a8de-129a47036d9b.jpg' alt='Freio regenerativo bike' />
          </a>
        </div>
      </div>
    </PaddedView>
    <div className='image-cut'>
      <a href="/vela2">
        <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FTecnologiaVela2.jpg?alt=media&token=c8699709-d160-42bc-bc1c-c2c6a9310838' alt='Vela Bikes' />
      </a>
      <div className='tagline'>
        <h2>Tecnologia e design nunca estiveram tão próximos</h2>
        <h4>O design minimalista da Vela é a prova de que bikes elétricas podem reunir tecnologia de ponta, usabilidade e beleza. </h4>
        <div className='actions'>
          <Link href='/vela2'>
            <Button primary>Monte a sua</Button>
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
              <p>Utilize o bloqueio eletromagnético, receba notificações de atividades suspeitas e consulte o mapa para se deslocar pela cidade com o melhor que uma bicicleta elétrica tem a oferecer: eficiência.</p>
            </div>
          </div>
        </div>
        <div className='app-img'>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/55068f24-1c81-4bdc-bec3-3f9d0e586a79.png' alt='App Vela 2' />
          </a>
        </div>
        <div className='app-bottom'>
          <div className='section'>
            <div className='left'>
              <div className='left-content'>
                <h2>Rastreamento GPS</h2>
                <h4>Observe sua Vela de qualquer distância, em qualquer lugar.</h4>
                <p>Sua smartbike sempre visível e ao seu alcance. Cuidamos da sua segurança, para um deslocamento sem preocupações.</p>
              </div>
            </div>
          </div>
        </div>
      </PaddedView>
    </div>
    <PaddedView>
      <div className='section'>
        <div className='right'>
          <div className='right-content'>
            <h2>Elétrica & smart</h2>
            <h4>A smartbike conectada com as ruas, com seu celular e com você</h4>
            <p>O aplicativo da Vela te acompanha pelo caminho, mostrando em tempo real as informações essenciais para velejar com tranquilidade.</p>
          </div>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/7130ce6f-5e4c-4472-bfc8-9855e17f0a92.jpg' alt='Smartbike Vela 2' />
          </a>
        </div>
      </div>
      <div className='bfunction-content'>
        <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/38f776ca-ba8a-41c8-9452-fe132d492fa0.png' alt='Botão multifunções smartbike' />
        <h2>Botão multifunções</h2>
        <h4>Integrado ao guidão da Vela 2, o acionador em aço inox é totalmente à prova d'água e resistente a impactos</h4>
        <div className='bfunctions'>
          <div className='bleft'>
            <Assist />
            <h3>Assist</h3>
            <p>Segure para sair sem fazer qualquer esforço no pedal.</p>
          </div>
          <div className='bcenter'>
            <Boost />
            <h3>Boost</h3>
            <p>Aperte 2x para obter o impulso máximo na potência.</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='left'>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/d72b6886-6e78-40ff-a8d9-0e2d12fe5974.jpg' alt='Design urbano bike elétrica' />
          </a>
          <div className='left-content'>
            <h2>Design atemporal</h2>
            <h4>Cada detalhe é pensado para oferecer muito conforto, com acabamento artesanal e uma paleta de cores exclusivas</h4>
            <p>Escolher a Vela é adotar uma nova forma de transporte, agilizar o tempo no trânsito e se aventurar por melhores experiências na cidade.</p>
          </div>
        </div>
        <div className='right'>
          <div className='right-content'>
            <h2>Clássica & Urbana</h2>
            <h4>Equipada com todos os acessórios essenciais para o dia a dia</h4>
            <p>A tranquilidade de pedalar com faróis automáticos integrados, conjunto completo de paralamas, manoplas ergonômicas e mudflaps.</p>
            <div className='actions'>
              <Link href='/vela2'>
                <Button primary>Monte a sua</Button>
              </Link>
            </div>
          </div>
          <a href="/vela2">
            <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/9492947f-35ff-4f66-a9a2-4e6f8e8ea776.jpg' alt='Bike clássica elétrica' />
          </a>
        </div>
      </div>
    </PaddedView>
    <div className='plans'>
      <PaddedView>
        <h2>Plano Vela+</h2>
        <h4>Obtenha a assinatura mensal da Vela para uma experiência ainda mais segura e completa.</h4>
        <div className='plans-content'>
          <div className='free'>
            <h3>Livre</h3>
            <br />
            <p>
              Primeira revisão gratuita*<br />
              Acesso à rede de recarga rápida**<br />
              Aplicativo companheiro<br />
              Bloqueio Bluetooth<br />
              Atualizações básicas<br />
            </p>
            <br />
            <div className='plans-price'>
              <h3>Grátis</h3>
            </div>
          </div>
          <div className='basic'>
            <h3>Simples</h3>
            <br />
            <p>
              Primeira revisão gratuita*<br />
              Acesso à rede de recarga rápida**<br />
              Aplicativo companheiro<br />
              Bloqueio remoto<br />
              Atualizações exclusivas<br />
              Proteção contra roubo e furto<br />
              Rastreamento GPS<br />
              Vela reserva*<br />
            </p>
            <br />
            <div className='plans-price'>
              <h3>R$ 49,90/mês</h3>
            </div>
          </div>
          <div className='full'>
            <h3>Completo</h3>
            <br />
            <p>
              Primeira revisão gratuita*<br />
              Acesso à rede de recarga rápida**<br />
              Aplicativo companheiro<br />
              Bloqueio remoto<br />
              Atualizações exclusivas<br />
              Proteção contra roubo e furto<br />
              Rastreamento GPS<br />
              Vela reserva*<br />
              Peças consumíveis e de reposição<br />
            </p>
            <br />
            <div className='plans-price'>
              <h3>R$ 89,90/mês</h3>
            </div>
          </div>
        </div>
        <p><small><br/>* Condições válidas apenas nas lojas oficiais da Vela, em São Paulo e Curitiba. Confira os <a href='https://velabikes.com.br/legal'>Termos de Serviço do Plano Vela+</a>.<br/>
        ** Condições válidas apenas para cidades em que a infraestrutura está disponível. Consulte nosso <a href='https://velabikes.com.br/rede/mapa'>mapa</a>.</small></p>
      </PaddedView>
      <div className='specs'>
        <img src='https://mcusercontent.com/68a0cce7cc109d78a8b44d7a0/images/4bb2a891-d7dd-4934-8625-259d8c2c1df2.jpg' alt='Especificações técnicas bike' />
        <div className='specs-content'>
          <h2>Especificações</h2>
          <table className='table-specs'>
            <tbody>
              <tr className='tr-specs'>
                <td className='td-specs'>Quadro</td>
                <td className='td-specs'>Aço liga 4130 CrMo - Chromoly - Total de 5 geometrias diferentes.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Pintura</td>
                <td className='td-specs'>Eletrostática, verniz fosco ou brilhante. 5 cores exclusivas da Vela 2.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Tamanhos (quadro reto)</td>
                <td className='td-specs'>51-26": 1,58 à 1,72 | 55-700C: 1,73 à 1,82 | 59-700C: 1,83 à 2,00</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Tamanhos (quadro baixo)</td>
                <td className='td-specs'>49-26": 1,50 à 1,70 | 49-700C: 1,71 à 1,90</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Peso</td>
                <td className='td-specs'>19-23kg</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Aros</td>
                <td className='td-specs'>Parede dupla de alumínio. Alex Rims.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Pneus</td>
                <td className='td-specs'>Perfil 50mm (2''), urbanos com proteção antifuro.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Luzes</td>
                <td className='td-specs'>Conjunto integrado em LED, acionamento automático.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Relação</td>
                <td className='td-specs'>Single speed: 46x18.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Freios</td>
                <td className='td-specs'>V-brake + Regenerativo do motor.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Manoplas</td>
                <td className='td-specs'>Ergonômicas, com trava e costuradas em couro sintético.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Corrente</td>
                <td className='td-specs'>KMC, inoxidável com powerlink.</td>
              </tr>
              <tr className='tr-specs'>
                <td className='td-specs'>Selim</td>
                <td className='td-specs'>Ergonômico, couro sintético com molas cromadas.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='specs-tech-content'>
          <h2>Tecnologia</h2>
          <table>
            <tbody>
              <tr>
                <td>Velocidade máxima</td>
                <td>25 km/h no modo Boost.</td>
              </tr>
              <tr>
                <td>Autonomia</td>
                <td>Até 60 km no modo Econômico. Média de 25km no modo Boost.</td>
              </tr>
              <tr>
                <td>Bateria</td>
                <td>Integrada de lítio e removível | 378Wh de capacidade | Tensão nominal 36V.</td>
              </tr>
              <tr>
                <td>Carregador</td>
                <td>126W | Recarga completa em até 3h | Compatível com recarga rápida.</td>
              </tr>
              <tr>
                <td>Conectividade</td>
                <td>Bluetooth 4.2, WiFi, GPS e GSM</td>
              </tr>
              <tr>
                <td>Segurança</td>
                <td>Alarme com sensor de movimento | Bloqueio eletromagnético | Notificações no app | Rastreamento GPS.</td>
              </tr>
              <tr>
                <td>Aplicativo</td>
                <td>Vela 2: iOS 14 + Android 10 | Configuração da Vela, mapa, modos de condução e atualizações de performance.</td>
              </tr>
              <tr>
                <td>Motor</td>
                <td>350W traseiro com frenagem regenerativa | Bafang </td>
              </tr>
              <tr>
                <td>Garantia</td>
                <td>Acessórios: 1 ano | Bateria: 2 anos | Quadro: 3 anos | Legal: 90 dias de acordo com o Código de Defesa do Consumidor (lei 8078/1990).  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
      }
      .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      .slogan h1 {
        font-size: 6em;
        font-weight: 900;
        color: ${offBlack};
        line-height: 1em;
        margin-left: -0.1em;
      }
      .slogan h3 {
        color: ${offBlack};
      }
      .slogan {
        max-width: 14em;
        text-align: center
      }
      .slogan h4 {
        color: ${offBlack};
        padding-bottom: 0em;
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
      .image-cut {
        width: 100%;
        overflow: hidden;
      }
      .image-cut img {
        height: 25em;
        object-fit: cover;
        max-width: 100%;
        object-position: 50% 50%;
      }
      .tagline {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 2em 4em 3em 4em;
      }
      .tagline h2 {
        margin-bottom: 1em;
        color: ${darkGray};          
      }
      .app-content{
        background-color: ${offWhite};
      }
      .app-content .section {
        padding: 0em;
      }
      .app-content .section .right .right-content{
        padding: 1em 2em;
        margin: 0;
      }
      .app-features {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .bfunction-content {
        background-color: ${offWhite};
        max-width: 45em;
        padding: 3em 0 0 0;
        margin: 1em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bfunction-content h4{
        max-width: 15em;
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
        max-width: 15em;
      }
      .plans {
        background-color: ${offWhite};
        display: flex;
        padding: 3em 0em 0em 0em;
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }
      .plans h4 {
        max-width: 16em;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
      }
      .plans-content {
        display: flex;
        flex-direction: column;
      }
      .basic {
        padding: 2em;
        background-color: ${white};
        display: flex;
        flex-direction: column;
      }
      .free {
        padding: 2em;
        background-color: ${lightGray};
        display: flex;
        flex-direction: column;
      }
      .full {
        padding: 2em;
        background-color: ${offBlack};
        display: flex;
        flex-direction: column;
      }
      .plans-price {
        margin-top: auto;
      }
      .basic h3, .free h3 {
        color: ${offBlack};
      }
      .full h3, .full p {
        color: ${offWhite};
      }
      .specs {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .specs-tech-content h2 {
        color: ${offWhite}
      }
      .specs img {
        max-width: 100%;
      }
      .specs-content {
        background-color: ${white};
        padding: 2em 2em 0 2em;
        text-align: left;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .specs-tech-content {
        background-color: ${offBlack};
        padding: 2em 2em 0 2em;
        text-align: left;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .table-specs {
        border-collapse: collapse;
        margin: 2em 0;
        font-size: 1em;
      }
    
      .th-specs {
        background: ${lightGray};
        text-align: left;
        color: ${offBlack};
      }
    
      .th-specs, .td-specs {
        padding: 1em;
        font-size: 1em;
        color: ${offBlack};
      }
    
      .tr-specs:nth-child(even) {
        background: ${lightGray};
      }
    
      .tr-specs:hover {
        background: ${lightGray};
      }
    
      table {
        border-collapse: collapse;
        margin: 2em 0;
        font-size: 1em;
      }
    
      th {
        background: ${darkGray};
        text-align: left;
        color: ${offWhite};
      }
      table tr td:last-child {
        text-align: left;
      }
      th, td {
        padding: 1em;
        font-size: 1em;
        color: ${offWhite};
        text-align: left;
      }
    
      tr:nth-child(even) {
        background: ${darkGray};
      }
    
      tr:hover {
        background: ${darkGray};
      }
      .actions :global(button) {
        margin: 1em 0 0 0;
      }
      @media only screen and (min-width: 768px) {
        .slogan h1 {
          font-size: 8em;
          font-weight: 900;
        }
        .cta {
          position: absolute;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          right: 2em;
          top: 2em;
          padding: 1em 2em 2em 1em;
          background-color: ${white};
        }
        .cta .actions {
          margin-top: 0em;
          align-self: flex-end;
         }
        .slogan {
          background-color: transparent;
          padding: 0;
          max-width: 12em;
          text-align: right;
        }
        .cta .slogan h4 {
          padding: 0;
        }
        .section {
          padding: 2em;
          flex-direction: column;
          align-items: stretch;
        }
        .left {
          flex-direction: row-reverse;
          margin-bottom: 2em;
        }
        .section img {
          max-width: 32em;
          max-height: 25em;
          object-fit: contain;
        }
        .section p, .section h4 {
          width: 16em;
        }
        .right {
          flex-direction: row-reverse;
          align-self: start;
        }
        .left-content {
          padding: 3em 4em 2em 2em;
          text-align: right;
        }
        .right-content {
          padding: 3em 2em 2em 4em;
          text-align: left;
        }
        .image-cut img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
        .image-cut {
          position: relative;
        }
        .tagline {
          justify-content: flex-end;
          align-items: flex-end;
          top: 1em;
          right: 0;
          text-align: right;
          position: absolute;
          max-width: 28em;
          background-color: transparent;
        }
        .app-img {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
        }
        .app-content img {
          max-width: 50%;
          right: 25%;
          top: -20em;
          position: absolute;
        }
        .app-bottom {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .app-features {
          flex-direction: column;
        }
        .app-content .section .right .right-content{
          padding: 2em;
          margin: 0;
        }
        .app-content .section .left .left-content{
          padding: 2em 2em 0 2em; 
          margin: 0;
        }
        .bfunctions {
          flex-direction: row;
          padding: 2em
          justify-content: space-between;
          margin-top: 2em;
        }
        .plans {
          padding: 3em 4em 4em 4em;
        }
        .plans-content {
          flex-direction: column;
          margin-top: 2em;
        }
        .basic, .free, .full {
          padding: 4em;
        }
        .specs {
          margin: 0 auto 0 auto;
        }
        .specs-content, .specs-tech-content {
          width: 100%
        }
        .specs-tech-content td {
          min-width: 275px;
        }
        @media only screen and (min-width: 1200px) {
          .plans-content{
            flex-direction: row;
            justify-content: space-between;
          }
          .basic {
            margin: 0 2em;
            padding: 2em;
          }
          .full, .free {
            padding: 2em;
          }
        }
      }
    `}</style>
  </div>

export default Vela
