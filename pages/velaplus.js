import React from "react";
import Head from "next/head";
import Accordion from "../components/Accordion";
import PaddedView from "../components/PaddedView";
import {
  offBlack,
  offWhite,
  velaBlue,
  velaGreen,
  velaRed,
  white,
} from "../style/colors";
import Cover from "components/velaplus/Cover";
import Tracking from "components/velaplus/Tracking";
import Theft from "../components/velaplus/Theft";
import Security from "../components/velaplus/Security";
import Checkout from "../components/velaplus/Checkout";

const VelaPlus = () => {
  return (
    <div className="velaplus">
      <Head>
        <title>Vela+ Plano Anual - Vela Bikes</title>
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://velabikes.com.br/velamais"
        />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="application-name" content="Vela Bikes Store" />
        <meta
          name="description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento, proteção contra roubo e furto e muitos mais para sua Vela!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Vela+ Plano Anual - Vela Bikes" />
        <meta
          name="twitter:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento, proteção contra roubo e furto e muitos mais para sua Vela!"
        />
        <meta name="twitter:image" content="/plus/PlanoVelaMais.jpg" />
        <meta property="og:url" content="https://velabikes.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vela+ Plano Anual - Vela Bikes" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento, proteção contra roubo e furto e muitos mais para sua Vela!"
        />
        <meta property="og:image" content="/plus/PlanoVelaMais.jpg" />
      </Head>
      <Cover />
      <Tracking />
      <Theft />
      <Security />
      <Checkout />

      <div className="questions">
        <PaddedView>
          <h1>
            Dúvidas frequentes:
            <br></br> <br></br>{" "}
          </h1>
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="1. O que eu preciso para contratar a assinatura do plano?"
            content="Basta você ser um cliente Vela e possuir um dos modelos que já fabricamos: Vela 1, Vela S e Vela 2. Também vamos precisar de alguns documentos, como nota fiscal e comprovante de residência para análise e elaboração do contrato com os termos."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="2. A cobertura do plano é nacional?"
            content="Sim, os benefícios listados têm abrangência para todo o território nacional, mas algumas taxas de embalagens e transporte podem ser aplicadas caso necessário."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="3. Como funciona o pagamento do plano?"
            content="O pagamento do pacote do plano anual de assinatura do Vela+ deverá ser realizado através do site da Vela, sendo cobrado no cartão de crédito e podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="4. Posso cancelar antes do término dos 12 meses?"
            content="O cancelamento da assinatura poderá ser solicitado durante o período contratado mediante ao pagamento de uma taxa equivalente a 50% com base na proporção do período que permanecerá em aberto."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="5. Já sou assinante Vela+, como posso usufruir do Novo Plano Vela+?"
            content="Os benefícios acrescentados no Novo Plano Vela+ já estão disponíveis para os atuais assinantes, é só começar a usar. Para agendar a instalação do localizador AirTag ou SmartTag, basta fazer a renovação e adicionar mais um ano de benefícios."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="6. Minha Vela foi comprada de segunda mão. Posso contratar o Novo Plano Vela+?"
            content="Sim, é possível contratar o Novo Plano Vela+ desde que o assinante possua a nota fiscal da bicicleta."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="7. A proteção cobre acidentes?"
            content="O Novo Plano Vela+ garante desconto de 50% para o conserto da Vela em casos de acidente causados por terceiros, sendo obrigatório, a apresentação do boletim de ocorrência. O plano cobre apenas os danos causados na bike, não restituído nenhum valor para terceiros."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="8. Quais os passos caso eu tenha a minha Vela roubada ou furtada?"
            content="O primeiro passo é enviar um email para a nossa equipe de atendimento (contato@velabikes.com.br) com as suas informações de pedido, nome, contato, data e hora, juntamente com uma cópia do boletim de ocorrência. Nossa equipe vai dar início ao bloqueio da conta, bloqueio da bike e à busca pela sua Vela. Caso não seja recuperada num prazo de 45 dias corridos (“período de busca”), seguiremos com as etapas para a produção e substituição por uma nova bike."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="9. Qual o prazo de entrega da nova bike de substituição da roubada/furtada?"
            content="O prazo esperado para a produção de uma nova unidade da Vela é de 15 dias (“período de produção”) após o término do “período de busca”. Para sua comodidade, é possível solicitar o empréstimo de uma Vela da nossa frota para seu uso durante o “período de busca” e “período de produção”, basta solicitar através da nossa equipe de atendimento."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="10. Existe algum custo fixo que devo pagar, caso minha Vela seja roubada/furtada, para ter direito a uma nova bike?"
            content="Dada a aprovação da restituição de uma nova unidade da Vela, o cliente terá um desconto para a compra de uma nova Vela, mediante modelos disponíveis no site da marca. O pedido da bike de restituição deverá acontecer exclusivamente através do site oficial da marca (www.velabikes.com.br) e o desconto para essa nova aquisição será de 80% no caso de roubo e 70% no caso de furto. O valor deverá ser pago por meio de um cartão de crédito podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="11. Como garantir que não vou perder o benefício da proteção contra roubo e furto? Quais as principais condições para ser validada?"
            content="Para ter acesso ao período de busca e, possivelmente, à bicicleta de reposição, o cliente deve seguir as indicações da Vela para manter seu plano ativo. Os principais pontos para furto são: boletim de ocorrência e estar utilizando qualquer cadeado do modelo U-lock. Já para roubo, apenas o boletim de ocorrência é suficiente."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="12. A proteção cobre os custos dos acessórios, se estiverem instalados na bike?"
            content="A proteção está atrelada exclusivamente à bicicleta em questão e a Vela não se responsabiliza ou cobre custos envolvidos com acessórios instalados na bike, sejam de terceiros, adquiridos na Vela ou qualquer outro item ou produto do cliente que possa ter sido roubado ou furtado na ocasião."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="13. Quais são as condições para a gratuidade dos Serviços Leva&Traz?"
            content="A gratuidade atualmente é válida apenas para a Grande São Paulo e pode ser acionada para a realização de serviços exclusivamente com a Vela. Exemplo: a gratuidade vale para o transporte para a realização de uma revisão ou reparo na fábrica da Vela."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="14. Como funciona o rastreamento via AirTag ou SmartTag?"
            content="Os dois dispositivos funcionam de forma muito similar, um para cada tipo de sistema operacional. Basta sincronizar seu celular com o dispositivo e rastreá-lo através dos respectivos aplicativos.  A integração do AirTag/SmartTag com o sistema da Vela permite que esse dispositivo de rastreamento permaneça ativo por até 15 anos, mesmo sem a alimentação da bateria da bike. O dispositivo é instalado na parte interna do painel, não pode ser acessado sem que o painel/sistema seja violado/danificado e a instalação pode ser realizada em qualquer oficina autorizada da Vela. 
Para mais informações a respeito dos dispositivos AirTag, acesse o link: https://www.apple.com/br/airtag/ 
Para mais informações a respeito dos dispositivos SmartTag, acesse o link: https://www.samsung.com/br/mobile-accessories/galaxy-smarttag-black-ei-t5300bbegbr/  "
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="15. Como é feita a instalação da AirTag ou SmartTag?"
            content="Os dispositivos de rastreio podem ser instalados na nossa fábrica em São Paulo, em qualquer autorizada ou oficina de sua confiança. A instalação é simples e normalmente é feita em até 24h."
          />
        </PaddedView>
      </div>
      <div className="legal">
        <PaddedView>
          <div className="legal-container">
            <div className="infos">
              <h3>Informações Legais</h3>
              <p>
                Esta página é um resumo da assinatura, consulte o contrato e as
                condições gerais para obter todos os detalhes da sua cobertura.
              </p>
              <p>
                O presente contrato é celebrado pelo período de um ano e, se
                desejado, deve ser renovado tacitamente por períodos
                consecutivos após um ano.
              </p>
              <p>
                O contrato de assinatura e os Termos de Serviço estão sujeitos à
                lei brasileira e ao Código de Defesa do Consumidor.
              </p>
            </div>
            <div className="docs">
              <h3>Documentos e Termos</h3>
              <h2>
                <p>
                  <a href="/legal"> Informações Legais</a>
                </p>
                <p>
                  <a href="/plus/TermoNovoVelaMais.pdf">
                    Modelo de Termo do Plano Vela+
                  </a>
                </p>
              </h2>

              {/* <div className="action">
              <a href="https://velabikes.freshdesk.com/support/home" target="_blank">
                <Button primary>Todas as FAQs</Button>
              </a>
            </div> */}
            </div>
          </div>
        </PaddedView>
      </div>
      <style jsx>
        {`
    
        
.velaplus * {
  font-family: filson-pro;
}

        .AppBoxText1 {
position: absolute;
          z-index: 5;
          width: 50%;
          text-align: center;
          margin-top: 10%;
          margin-left: 60%;
          font-size: 16px;
          font-weight: 600;
          line-height: 120%;
        }

        .protection .cta {
          width: 20em;
          text-align: center;
          padding: 4em 2em;
        }
        .protection .cta h2, .protection .cta h4 {
          color: ${offWhite};
        }
        .protection .cta p {
          color: ${offWhite};
          font-weight: 500;
        }
        .call {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          margin: 2em;
        }
        .add h3 {
          color: ${offBlack};
          font-weight: 500;
          
        }
        .AppBoxBG {
          position: relative;
          z-index: 5;
          height: 400px;
          width: 410px;
          margin-left: 65%;
          margin-top: 15%;
        }
         .add h22 {
          color: ${velaRed};
          font-size: 1.2em;
          font-weight: 500;
        }

         .add h23 {
          color: ${velaRed};
          font-size: 1em;
          font-weight: 500;
        }

         .add h24 {
          color: ${offWhite};
          font-size: 1em;
          font-weight: 500;
        }

        .add {
          padding: 1.5em;
          border-radius: 10px;
          border: solid 2px ${velaGreen};
          width: 87%;
          margin-top: 2em;
          z-index: 2;
        }
        .add p {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .description {
          width: 100%;
          padding: 2em;
          margin-top: 1em;
          text-align: center;
          z-index: 2;
        }
        .description h2, .description h4 {
          color: ${offBlack};
        }
        .action {
          margin-top: 2em;
          margin-bottom: em;
          margin-left: 5.5em;
          margin-right: 5.1em;
        }
        .models-content {
          padding: 1em 2em 2em 2em;
        }
        .models {
          display: flex;
          flex-direction: column;
        }
        .models > * {
          margin: 2em 0;
          padding: 1em 2em 2em 2em;
          background-color: ${offWhite};
          box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
        .models-content .action {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .models > * > img {
          max-width: 10em;
          padding-bottom: 2em;
          padding-top: 2em;
        }
        .service {
          background-color: ${offWhite};
        }
        .security {
          margin: 2em;
          text-align: center;
        }
        .callcenter {
          margin: 4em 2em 2em 2em;
          text-align: center;
        }
        .simg, .cimg {
          max-width: 100%;
        }
        .sdescript, .cdescript {
          margin: 2em 0;
        }
        .questions {
          padding: 2em 0 0 0;
          background-color: ${white};    
        }
        .questions h2 {
          color: ${offBlack};
          margin-bottom: 1em;
        }
        .legal {
          background-color: #ebbd99;
          padding: 2em 0 2em 0;
        }
        .legal-container {
          display: flex;
          flex-direction: column;
        }
        .legal h3 {
          color: ${offBlack};
             font-size: 32px;
        }
        .docs h3 {
          color: ${offBlack};
          margin-bottom: 1em;
          margin-top: 1em;
          font-size: 32px;
        }

        .docs h2 {
          text-decoration: underline;
          font-style: italic;
          font-size: 16px;
          font-weight: 400;
          text-color: ${velaGreen}
        }
        .app {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .app img {
          max-width: 85%;
          margin-top: 2em;
        }
        .apptext {
          padding: 2em;
        }
        .bfunctions {
          display: flex;
          flex-direction: column;
          padding: 0em 2em 1em 2em;
          justify-content: center;
          align-items: center;
        }
        .bfunctions h3{
          color: ${offBlack};
        }
        .bleft, .bright, .bcenter {
          padding: 2em;
          text-align: center;
          max-width: 14em;
          min-width: 14em;
        }
        @media only screen and (min-width: 768px) {
          .call {
            flex-direction: row;
            padding-bottom: 3em;
          }
          .cover {
            position: relative;
            z-index: 5;
            margin-top: 10em;
            padding: 3em;
            padding-top: 8em;
            margin-bottom: 0em;
          }
          .cover .cta {
            width: 100%;
            text-align: center;
            margin-top: 2em;
            margin-left: 0em;
            margin-right: 5em;
            margin-bottom: -2em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1.5em;
                padding-left: 8em;
            padding-right: 8em;
          }
          .add {
            width: 22em;
            padding: 2em;
          }
          .add h3 {
            color: ${offBlack};
          }
          .description {
            max-width: 25em;
            padding: 4em;
            text-align: left;
          }
          .cover .cta {
            margin-top: -2em;
            margin-left: 1em;
            padding: -2em;
          }
          .protection {
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            background-color: ${velaRed};
          }
          .protection .cta {
            width: 27em;
            text-align: left;
            padding: 4em;
            position: absolute;
            z-index: 4;
          }
          .call {
            margin: 2em;
          }
          .service {
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 2em 0 1em 0;
          }
          .security {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: left;
            margin: 1em 0 -2em 0;
          }
          .callcenter {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            text-align: right;
            margin: -2em 0 0 0;
          }
          .sdescript {
            max-width: 18em;
            margin: 0em 2em;
          }
          .cdescript {
            max-width: 18em;
            text-align: right;
            margin: 0em 2em;
          }
          .simg, .cimg {
            max-width: 28%;
          }
          .questions {
            padding: 3em 2em 0 2em; 
          }
          .legal {
            padding: 3em 1em 1em 1em;
          }
          .docs h3 {
            margin-top: 0;
          }
          .legal-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .legal .infos {
            max-width: 45%;
          }
          .app {
            display: flex;
            flex-direction: column;
            margin: 2em;
          }
          .app img {
            margin-left: 2em;
            max-width: 50%;
          }
          .apptext {
            padding: 2em;
            max-width: 28em;
            text-align: left;
          }
          .bfunctions {
            flex-direction: row;
            padding: 2em
            justify-content: space-between;
            margin-top: 2em;
          }
        }
        
        @media only screen and (min-width: 770px) {
          .models-content2 {
            margin-bottom: -4em; 
            padding: 2em;
          }
           }
          .cover {
            margin-top: -15em;
            margin-left: 1em;
            padding: -5em;
          }
           .models-content {
            margin-bottom: 0em; 
            padding: 2em;
          }
          .models {
            flex-direction: row;
            justify-content: center;
          }
          .models > * {
            width: 22em;
            margin: 1em;
            padding: 0em 1em 1em 1em;
          }
          .models > * > .profile {
            font-size: 0.8em;
          }
          .app {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
          }
          .app img {
            margin-left: 2em;
            max-width: 42%;
          }
          .apptext {
            padding: 2em;
            max-width: 35em;
            text-align: left;
          }
          .bfunctions {
            flex-direction: row;
            padding: 2em
            justify-content: space-between;
            margin-top: 2em;
          }
          .bleft, .bright, .bcenter {
            max-width: 12em;
            min-width: 12em;
          }
        }
        }
      }`}
      </style>
    </div>
  );
};

export default VelaPlus;
