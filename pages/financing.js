import React from "react";
import Link from "next/link";
import Head from "next/head";
import Accordion from "../components/Accordion";
import PaddedView from "../components/PaddedView";
import { offBlack, offWhite, white } from "../style/colors";
import Button from "../components/Button";
import MainImage from "../components/financing/MainImage";
import FinanceImage from "../components/financing/FinanceImage";
import LastImage from "../components/financing/LastImage";

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
          <h1 className="main-title">FINANCIE</h1>
          <h2>Condições exclusivas para especialistas Vela</h2>
        </div>
      </div>
      <div className="protection">
        <MainImage />
        <div className="cta">
          <h2>
            Chegou a melhor chance de adquirir a sua Vela 2!
          </h2>
          <h4>Financie a primeira smartbike do Brasil, pague a entrada e parcele o valor restante em até 18x sem juros</h4>
          <p>Valor reduzido para o treinamento de especialistas no curso online da Vela.</p>
          <div className="action">
            <Link href="/vela2"><Button primary>Monte a sua</Button></Link>
          </div>
        </div>
      </div>
      <div className="models-content">
        <div className="models">
          <div className="m1">
          <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFInanciamento-Monte-sua-Vela.png?alt=media&token=f5139330-0745-4c0c-b569-59f1ea8e9668" />
            <h3>Monte a sua Vela 2 e selecione o meio de pagamento Pagseguro ao finalizar</h3>
            <p>
              Nessa opção será possível financiar em até 18x no cartão de crédito. Use o cupom <b>ESPECIALISTA</b> para ter acesso às parcelas de R$ 299.
            </p>
          </div>
          <div className="m2">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Parcele-Bike-Eletrica.png?alt=media&token=8112472e-3d1e-438b-938f-f1a7e342eb4d" />
            <h3>Confirme o pedido com o pagamento do valor de entrada: R$ 2.490</h3>
            <p>
              Nossa equipe vai entrar em contato para confirmar o pedido e receber o valor da entrada, dando seguimento à fabricação da bicicleta.
            </p>
          </div>
          <div className="m3">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFinanciamento-Vela-Bikes-Especialistas.png?alt=media&token=5de68efa-a1ef-41dc-be81-871f42b82356" />
            <h3>Assista os módulos de vídeoaulas enquanto aguarda sua Vela!</h3>
            <p>
              Aproveite o tempo de entrega para assistir os módulos de treinamento, torne-se um especialista e saiba tudo a respeito da Vela 2.
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
            content="Acesse a página www.velabikes.com.br/financiamento, clique no botão para montar a sua Vela 2, selecione a cor, modelo, tamanho, acessórios e siga em frente. Aplique o cupom ESPECIALISTA para ter acesso às parcelas de R$ 299 e siga para a página de pagamento. Siga com o pagamento através da plataforma Pagseguro para ter acesso ao financiamento em até 18x sem juros no cartão de crédito. Alguns cartões podem precisar de uma aprovação, caso tenha alguma dúvida, fale com o seu banco ou operadora do cartão. Após essa primeira etapa de solicitação do financiamento, caso aprovado, nossa equipe de atendimento irá entrar em contato contigo para realizar a confirmação do pedido e pagamento do valor da entrada de R$ 2.490. Esse valor poderá ser pago via PIX, transferência ou boleto bancário.Após a confirmação do seu pedido, nossa equipe vai dar entrada para separação do material e entrada da sua Vela na nossa fila de produção. Caso qualquer dúvida durante o processo de pedido ou enquanto aguarda a produção da sua Vela e faz os treinamentos, abra um chamado no chat do nosso site ou envie um email para escola@velabikes.com.br que responderemos em seguida."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="2. Qual o prazo de entrega da bike?"
            content="Hoje o prazo de entrega de uma nova unidade da Vela 2 fica entre 2 e 3 meses. Temos uma expectativa de entregar num prazo menor, mas temos uma fila de pedidos que aumentou nos últimos meses e uma capacidade produtiva que está evoluindo para atender com mais agilidade à todos os pedidos."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="3. Existe a incidência de juros no financiamento?"
            content="Não, na verdade pelo contrário! O valor de mercado de uma nova unidade da Vela 2 hoje é de R$ 8.890, valor esse que pode ser divido em até 12x sem juros para o cliente. Para as pessoas inscritas no treinamento, além de oferecer o financiamento exclusivo em 18x, não será cobrado qualquer valor com relação à incidência de juros e ainda todos inscritos terão acesso à um desconto, ou seja, o valor final pago, considerando a soma da entrada e todas as parcelas do financiamento, é inferior ao valor de mercado, apenas R$ 7.872, ou seja, na prática, além do financiamento especial, estamos oferecendo mais de R$ 1.000 de desconto aos parceiros."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="4. Posso parcelar em até quantas vezes?"
            content="Algumas operadoras podem limitar o financiamento em até 12x, mas o limite máximo no sistema é de 18x no cartão de crédito. Caso o parcelamento máximo não esteja disponível pra você, entre em contato com a sua operadora de cartão ou banco para buscar o aumento do limite de parcelas."
          />
          <Accordion
            color={white}
            hoverColor={'#DCF5EB'}
            textColor={offBlack}
            title="5. Quais as condições para ser apto ao financiamento?"
            content="Estar inscrito no programa de treinamento de técnico e especialistas, realizar o pagamento da entrada à vista no valor de R$ 2.490 e possuir limite no cartão de crédito para seguir com o financiamento em até 18x."
          />
        </PaddedView>
      </div>
      <div className="last-image">
        <div className="cta">
          <h2>Você e a Vela unidos por uma mobilidade mais sustentável</h2>
        </div>
        <LastImage />
      </div>
      <div className="last-call">
        <h3>Ainda possui dúvidas e quer saber mais sobre as condições de financiamento?</h3>
        <p>Envie uma mensagem no chat à direita da tela para conversar com nosso time de atendimento.</p>
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
          font-size: 3.5em;
          color: ${white};
        }
        .main-title {
          position: absolute;
          top: 0.7em;
        }
        .cover .cta h4, .cover .cta h2 {
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
        .last-call {
          padding: 2em;
          background-color: ${offBlack};
          text-align: center;
        }
        .last-call h3, .last-call p {
          color: ${offWhite}
        }
        .last-image .cta {
          padding: 2em;
          text-align: center;
          background-color: ${offWhite}
        }
        @media only screen and (min-width: 768px) {
          .cover .cta {
            position: absolute;
            top: 5em;
            max-width: 20em;
            right: 2em;
            text-align: right;
            justify-items: flex-end;
            align-items: flex-end;
            background-color: transparent;
          }
          .cover .cta h2 {
            color: ${white};
          }
          .main-title {
            top: -0.7em;
            margin-left: 0.3em;
          }
          .protection {
            padding-top: 4em;
            align-items: center;
            justify-content: center;
            flex-direction: row-reverse;
            width: 100%;
            background-color: ${offBlack};
            padding-bottom: 4em;
          }
          .protection .cta {
            text-align: right;
            padding: 4em 4em 4em 2em;
            max-width: 28em;
            z-index: 4;
          }
          .protection .cta h4 {
            color: ${offWhite};
          }
          .protection .cta p {
            color: ${offWhite};
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
          .last-image .cta {
            position: absolute;
            padding: 2em;
            z-index: 5;
            max-width: 15em;
            margin-top: 4em;
            right: 4em;
            background-color: ${offBlack};
            text-align: left;
          }
          .last-image .cta h2 {
            color: ${white};
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
          .last-call {
            padding: 3em 4em 2em 4em;
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
        @media only screen and (min-width: 1500px) {
          .cover .cta {
            top: 8em;
            right: 6em;
            max-width: 25em;
          }
          .cover .cta h1 {
            font-size: 4.5em;
          }
          .cover .cta h2 {
            font-size: 2em;
          }
          .last-image .cta {
            right: 8em;
            margin-top: 8em;
          }
        }
        }
      }`}
      </style>
    </div>
  );
};

export default Financing
