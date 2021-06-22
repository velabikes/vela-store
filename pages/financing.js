import React from "react";
import Link from "next/link";
import Head from "next/head";
import Accordion from "../components/Accordion";
import PaddedView from "../components/PaddedView";
import { offBlack, offWhite, white } from "../style/colors";
import Button from "../components/Button";
import MainImage from "../components/financing/MainImage";
import FinanceImage from "../components/financing/FinanceImage";

const Financing = () => {
  return (
    <div className="velaplus">
      <Head>
        <title>Financiamento -  Vela Bikes</title>
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://velabikes.com.br/financiamento"
        />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="application-name" content="Vela Bikes Store" />
        <meta
          name="description"
          content="A Vela cada vez mais próxima de você. Financie a primeira smartbike do Brasil, pague a entrada e parcele o valor restante em até 18x sem juros!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Financiamento - Vela Bikes" />
        <meta
          name="twitter:description"
          content="A Vela cada vez mais próxima de você. Financie a primeira smartbike do Brasil, pague a entrada e parcele o valor restante em até 18x sem juros!"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Vela-2.jpg?alt=media&token=7080fcca-237d-4650-b2f9-665114ea2161"
        />
        <meta property="og:url" content="https://velabikes.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Financiamento - Vela Bikes" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="A Vela cada vez mais próxima de você. Financie a primeira smartbike do Brasil, pague a entrada e parcele o valor restante em até 18x sem juros!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Vela-2.jpg?alt=media&token=7080fcca-237d-4650-b2f9-665114ea2161"
        />
      </Head>
      <div className="cover">
        <FinanceImage />
        <div className="cta">
          <h1>Financie a primeira smartbike do Brasil</h1>
          <h4>Uma vantagem exclusiva para o seu dia a dia - Válida em todo o país</h4>
        </div>
      </div>
      <div className="protection">
        <MainImage />
        <div className="cta">
          <h2>
            Chegou a melhor chance de adquirir a sua Vela 2!
          </h2>
          <h4>Financie a primeira smartbike do Brasil, pague a entrada e parcele o valor restante em até 18x sem juros!</h4>
          <p>Condições exclusivas com juros negativos para os técnicos autorizados Vela</p>
          <div className="action">
            <Link href="/vela2"><Button primary>Monte a sua</Button></Link>
          </div>
        </div>
      </div>
      <div className="models-content">
        <div className="models">
          <div className="m1">
          <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFInanciamento-Monte-sua-Vela.png?alt=media&token=f5139330-0745-4c0c-b569-59f1ea8e9668" />
            <h3>Monte sua Vela 2 e pague o valor de entrada</h3>
            <p>
              São R$ 2.999,00 à vista no cartão de crédito, para a montagem e entrega da sua smartbike
            </p>
          </div>
          <div className="m2">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Parcele-Bike-Eletrica.png?alt=media&token=8112472e-3d1e-438b-938f-f1a7e342eb4d" />
            <h3>Escolha as parcelas que cabem no seu bolso!</h3>
            <p>
              O valor restante pode ser dividido em até 18x sem juros, com parcelas de apenas R$ 299,00 ao mês
            </p>
          </div>
          <div className="m3">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Exclusivo-Bike-Eletrica.png?alt=media&token=0a375017-c69b-4527-806f-65e406e49037" />
            <h3>Exclusivo para os técnicos autorizados</h3>
            <p>
              Financiamento com juros negativo exclusivo para o curso Vela, utilize o cupom <b>PARCELEJA</b> ao finalizar
            </p>
          </div>
        </div>
        <div className="action">
          <Link href="/vela2"><Button primary>Monte a sua</Button></Link>
        </div>
      </div>
      <div className="questions">
        <PaddedView>
          <h2>Possui dúvidas?</h2>
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="1. Qual o passo a passo para o financiamento?"
            content="O primeiro passo é enviar um email para a nossa equipe de atendimento (contato@velabikes.com.br) com as suas informações de pedido, nome, contato, data, hora juntamente com uma cópia do boletim de ocorrência. Nossa equipe vai dar início ao bloqueio da conta, bloqueio da bike e à busca da sua Vela. Caso não seja recuperada num prazo de 30 dias corridos (“período de busca”), seguiremos com as etapas para a produção e substituição por uma nova bike."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="2. Qual o prazo de entrega da bike?"
            content="O prazo esperado para a produção de uma nova unidade da Vela 2 é de 30 dias (“período de produção”) após o término do “período de busca”. A Vela não se responsabiliza por custos que envolvem o deslocamento do cliente durante o “período de busca” e o “período de produção”."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="3. Existe a incidência de juros no financiamento?"
            content="Dada a aprovação da restituição de uma nova unidade da Vela 2, o cliente terá um desconto para a compra de uma nova unidade da Vela 2. O pedido da bike de restituição deverá acontecer exclusivamente através do site oficial da marca (www.velabikes.com.br)  e o desconto para essa nova aquisição será de 80% no caso de roubo e 70% no caso de furto. O valor deverá ser pago por meio de um cartão de crédito podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="4. Posso parcelar em até quantas vezes?"
            content="Como o plano inclui uma proteção contra roubo/furto e a Vela possui contratos de ativação do sinal e segurança durante o prazo de 12 meses, o cancelamento da assinatura poderá ser solicitado durante o período contratado mediante ao pagamento de uma taxa equivalente a 50% com base na proporção do período que permanecerá em aberto."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="5. Quais as condições para ser apto ao financiamento?"
            content="A proteção não cobre acidentes, peças de reposição, peças consumíveis, revisões e outros custos envolvidos no uso regular da Vela."
          />
        </PaddedView>
      </div>
      <div className="legal">
        <PaddedView>
        <div className="legal-container">
          <div className="infos">
            <h3>Informações Legais</h3>
            <p>Esta página é um resumo do financiamento, consulte as condições gerais para obter todos os detalhes da oferta.</p>
            <p>Os Termos de Serviço de Financiamento, a Política de Privacidade e os Termos de Serviço Gerais da Vela estão sujeitos à lei brasileira e ao Código de Defesa do Consumidor.</p>
          </div>
          <div className="docs">
            <h3>Documentos</h3>
            <p><a href="/legal">Termos de Serviço</a></p>
            <p><a href="/legal">Política de Privacidade</a></p>
            <div className="action">
              <a href="https://velabikes.freshdesk.com/support/home" target="_blank">
                <Button primary>Todas as FAQs</Button>
              </a>
            </div>
          </div>
        </div>
        </PaddedView>
      </div>
      <style jsx>
        {`
        .cover {
            position: relative;
            z-index: 2;
          }
        .cover .cta {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2em;
            background-color: ${offBlack};
        }
        .cover .cta h1 {
          font-size: 2em;
          color: ${offWhite};
        }

        .cover .cta h4 {
          color: ${offWhite};
        }
        .protection {
          z-index: 3;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          background-color: ${offBlack};
        }
        .protection .cta {
          text-align: center;
          padding: 2em 3em;
        }
        .protection .cta h4 {
          color: ${offWhite};
        }
        .protection .cta p {
          color: ${offWhite};
          font-weight: 600;
        }
        .action {
          margin-top: 2em;
          margin-bottom: 1em;
        }
        .models-content {
          padding: 1em 2em 2em 2em;
          background-color: ${offWhite};
        }
        .models {
          display: flex;
          flex-direction: column;
        }
        .models > * {
          margin: 2em 0;
          padding: 1em 2em 2em 2em;
          background-color: ${white};
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
          padding-bottom: 1em;
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
          background-color: ${offWhite};
          padding: 2em 0 2em 0;
        }
        .legal-container {
          display: flex;
          flex-direction: column;
        }
        .legal h3 {
          color: ${offBlack};
        }
        .docs h3 {
          color: ${offBlack};
          margin-bottom: 1em;
          margin-top: 1em;
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
          .cover .cta {
            margin-top: -8em;
            background-color: transparent;
          }
          .protection {
            align-items: center;
            justify-content: center;
            flex-direction: row-reverse;
            width: 100%;
            background-color: ${white};
            padding-bottom: 4em;
          }
          .protection .cta {
            text-align: right;
            padding: 4em;
            max-width: 28em;
            margin-left: 4em;
            z-index: 4;
          }
          .protection .cta h4 {
            color: ${offBlack};
          }
          .protection .cta p {
            color: ${offBlack};
            font-weight: 600;
          }
          .questions {
            padding: 3em 2em 0 2em; 
          }
          .legal {
            padding: 3em 1em 0em 1em;
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
          .bfunctions {
            flex-direction: row;
            padding: 2em
            justify-content: space-between;
            margin-top: 2em;
          }
        }
        @media only screen and (min-width: 770px) {
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
            padding: 1em 2em 2em 2em;
          }
          .models > * > .profile {
            font-size: 0.8em;
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

export default Financing
