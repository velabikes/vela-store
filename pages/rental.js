import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import Head from "next/head";
import Accordion from "../components/Accordion";
import { offBlack, offWhite, velaGreen, white } from "../style/colors";
import RentImage from "../components/rent/RentImage";
import QuoteImage from "../components/rent/QuoteImage";
import PaddedView from "../components/PaddedView";
import Button from "../components/Button";
import FooterImage from "../components/rent/FooterImage";

const Rental = () => {
  return (
    <div className="rental">
      <Head>
        <title>Alugue a Vela 2 - Vela Bikes</title>
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://velabikes.com.br/aluguel"
        />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="application-name" content="Vela Bikes Store" />
        <meta
          name="description"
          content="Pacotes de aluguel para você experimentar a Vela 2! A primeira smartbike do Brasil com condições exclusivas para chamar de sua."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Alugue a Vela 2 - Vela Bikes" />
        <meta
          name="twitter:description"
          content="Pacotes de aluguel para você experimentar a Vela 2! A primeira smartbike do Brasil com condições exclusivas para chamar de sua."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAlugue-Vela-2-Bain.jpg?alt=media&token=0f92939b-a51b-4d01-afc1-5acff3b41605"
        />
        <meta property="og:url" content="https://velabikes.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alugue a Vela 2 - Vela Bikes" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Pacotes de aluguel para você experimentar a Vela 2! A primeira smartbike do Brasil com condições exclusivas para chamar de sua."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAlugue-Vela-2-Bain.jpg?alt=media&token=0f92939b-a51b-4d01-afc1-5acff3b41605"
        />
      </Head>
      <div className="cover">
        <RentImage />
      </div>
      <div className="howitworks">
        <h2>Como funciona?</h2>
        <div className="steps">
          <div className="step">
            <img src="/static/step1.png"></img>
            <h4>Monte sua Vela</h4>
            <h5>
              Escolha a geometria do quadro e o período de locação
            </h5>
            <p>
              Você receberá uma Vela 2 da nossa frota revisada e entregue na sua casa.
            </p>
          </div>
          <div className="step">
            <img src="/static/step2.png"></img>
            <h4>Alugue a Vela 2...</h4>
            <h5>
              Parcele o pacote do período desejado, pague em até 12x sem juros!
            </h5>
            <p>
              Planos de um ano ou seis meses, pensados para sua rotina na cidade.
            </p>
          </div>
          <div className="step">
            <img src="/static/step3.png"></img>
            <h4>Aproveite!</h4>
            <h5>
              Conte com rastreamento GPS e proteção contra roubo e furto
              inclusos
            </h5>
            <p>
              O melhor preço e o maior tempo de parcelamento, vamos velejar?
            </p>
          </div>
        </div>
        <div className='actions'>
            <center><a href='/'>
                <Button disabled>Alugar</Button>
            </a></center>
          </div>
      </div>
      <div className='cover'>
          <FooterImage />
          <div className='cta-bottom'>
              <div className='slogan'>
                <h2>A partir de R$ 14,90 por dia no plano anual!</h2>
                <h3>Alugue uma smartbike: o meio de transporte mais econômico e saudável para o seu dia a dia.</h3>
              </div>
          </div>
      </div>
      <PaddedView>
        <div className="section">
          <div className="right">
            <div className="right-content">
              <h2>O aluguel feito para você</h2>
              <h4>
                Os pacotes de 6 ou 12 meses da Vela se encaixam na sua
                rotina.
              </h4>
              <p>
                Conte com <i>manutenções/revisões</i>*, <i>rastreamento GPS</i>{" "}
                + <i>proteção contra roubo e furto</i> inclusos.
              </p>
              <small>
                <p>* Válido apenas em São Paulo.</p>
              </small>
            </div>
            <a href="/vela2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FAluguel-Bike-Eletrica.jpg?alt=media&token=2c22bfaf-bbd9-4457-a33a-5e213620ee4a"
                alt="Aluguel de Bike Elétrica"
              /> 
            </a>
          </div>
          <div className="left">  
            <a href="/vela2"> 
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FBike-Com-App-Aluguel.jpg?alt=media&token=612613fc-aa49-471b-9365-3453093f9857"
                alt="Bicicleta com App"
              />
            </a>
            <div className="left-content">
              <h2>A única smartbike do Brasil</h2>
              <h4>
                Agora com as melhores condições de aluguel. Prepare-se para pedalar smart.
              </h4>
              <p>
                Após o período de aluguel, você pode renovar o plano ou receber
                desconto na compra da sua Vela 2.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <h2>Planos em até 12x sem juros</h2>
              <h4>
                Aproveite para descobrir uma nova forma de se deslocar pela
                cidade.
              </h4>
              <p>
                Com nossa assinatura, você se concentra no que realmente importa: aproveitar o caminho.
              </p>
              <div className='actions'>
            <a href='/'>
                <Button disabled>Alugar</Button>
            </a>
          </div>
            </div>
            <a href="/vela2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Frent%2FSmartbike-Aluguel-Vela-Bikes.jpg?alt=media&token=13661daa-c0ef-4abc-a662-5f7c916f8ef7"
                alt="Smartbike Aluguel Vela Bikes"
              />
            </a>
          </div>
        </div>
      </PaddedView>
      <div className="protection">
        <QuoteImage />
        <div className="cta-protect">
          <h3>“Ir ao trabalho de Vela é o ‘novo normal’ para mim.</h3>
          <h3>
            Estou orgulhosa por ter feito uma escolha ecológica, que prioriza
            minha qualidade de vida, saúde e segurança.
          </h3>
          <h3>O ‘novo normal’ é isso, né? Nossas novas escolhas...”</h3>
          <h4>- Clara, Velejadora</h4>
          <div className='actions'>
            <a href='/vela'>
                <Button primary>Conheça a bike</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="questions">
        <PaddedView>
        <h2>Possui dúvidas?</h2>
        <Accordion
          color={offBlack}
          hoverColor={velaGreen}
          textColor={white}
          title="1. Qual o período que as condições estarão ativas?"
          content="Com quantidade limitada, o aluguel da Vela 2 estará aberto enquanto houverem vagas disponíveis."
        />
        <Accordion
          color={offBlack}
          hoverColor={velaGreen}
          textColor={white}
          title="2. Reservando agora, quando recebo a minha Vela 2?"
          content="As primeiras entregas dos planos de aluguel serão realizadas em agosto de 2021 na ordem dos pedidos. O prazo esperado é de 4 até 8 semanas para sua unidade ser entregue."
        />
        <Accordion
          color={offBlack}
          hoverColor={velaGreen}
          textColor={white}
          title="3. O que está incluso no pacote de aluguel?"
          content="12 ou 6 meses de uma unidade da Vela 2, na geometria da sua preferência. A cor será confirmada com você antes da entrega, informaremos as opções disponíveis para escolha. Todas as unidades serão entregues com o Plano Vela+ Simples ativo, que engloba a proteção contra roubo e furto, GPS, atualizações exclusivas e muito mais. Os serviços de revisão, manutenção e substituição de peças consumíveis não serão cobrados durante o período de locação, desde que realizados pela Vela na cidade de São Paulo."
        />
        <Accordion
          color={offBlack}
          hoverColor={velaGreen}
          textColor={white}
          title="4. O período de locação acabou, e agora?"
          content="Você pode renovar o aluguel ou comprar a Vela 2 com desconto! Nossa equipe irá entrar em contato 30 dias antes do fim do período para confirmar sua preferência. Caso você deseje finalizar o contrato, você deve enviar a bike de volta para nós."
        />
        <Accordion
          color={offBlack}
          hoverColor={velaGreen}
          textColor={white}
          title="5. Não moro em São Paulo, ainda posso participar?"
          content="Claro! As condições são válidas para todo o Brasil, porém será cobrada uma taxa de R$ 245,00 por cada trecho de transporte, como: entrega inicial, manutenções e devoluções."
        />
        </PaddedView>
      </div>
      <div className="legal">
        <PaddedView>
          <div className="legal-container">
            <div className="infos">
              <h3>Informações Legais</h3>
              <p>
                Esta página é um resumo da assinatura de locação, consulte o contrato e as
                condições gerais para obter todos os detalhes da sua cobertura.
              </p>
              <p>
                O presente contrato é celebrado pelo período de escolha no momento do pedido e, se
                desejado, deve ser renovado tacitamente por períodos
                consecutivos após um ano.
              </p>
              <p>
                Os Termos de Aluguel e os Termos de Serviço estão sujeitos à
                lei brasileira e ao Código de Defesa do Consumidor.
              </p>
            </div>
            <div className="docs">
              <h3>Documentos</h3>
              <p>
                <a href="/legal">Termos do Pacote de Aluguel</a>
              </p>
              <p>
                <a href="/legal">Termos de Serviço</a>
              </p>
              <p>
                <a href="/legal">Política de Privacidade</a>
              </p>
              <div className="action">
                <a
                  href="https://velabikes.freshdesk.com/support/home"
                  target="_blank"
                >
                  <Button primary>Todas as FAQs</Button>
                </a>
              </div>
            </div>
          </div>
        </PaddedView>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 320px) {
          h2 {
              font-size: 1.2em;
          }
        }
        .section {
          display: flex;
          flex-direction: column;
          padding-top: 1em;
        }
        .section h2 {
          color: ${offBlack};
        }
        .section img {
          min-width: 100%;
          min-height: 35vh;
          max-height: 35vh;
          object-fit: cover;
        }
        .actions :global(button) {
          margin-top: 1em;
          margin-bottom: 0;
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
          align-self: flex-start;
        }
        .right-content {
          padding: 2em 2em 1em 2em;
          text-align: center;
        }
        .questions {
          padding: 2em 0em 0em 0em;
          background-color: ${offBlack};    
        }
        .cta h2, .cta h1, .cta h4 {
          color: ${offWhite}
        }
        .questions h2 {
          color: ${offWhite};
          margin-bottom: 1em;
        }
        .cover {
          position: relative;
        }
        .cta {
          text-align: center;
          padding: 2em;
          background-color: ${offBlack};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cta h4 {
          width: 16em;
        }
        .cta h2 {
          width: 12em;
        }
        .cta-bottom {
          text-align: center;
          background-color: ${offBlack};
          padding: 2rem 3rem 2rem 3rem;
        }
        .cta-bottom h2 {
          color: ${offWhite};
        }
        .howitworks {
          padding: 0em 2em 3em 2em;
        }
        .howitworks h2{
          color: ${offBlack};
        }
        .steps {
          display: flex;
          flex-direction: column;
        }
        .step {
          padding: 2em 1em;
        }
        .step h4 {
          font-size: 1.2em;
        }
        .step img {
          max-width: 12em;
          margin-bottom: 1em;
        }
        .tagline {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          padding: 2em 4em 1em 4em;
          background-color:  ${offWhite};
        }
        .tagline h3 {
          color: ${offBlack};
          font-style: italic;
        }
        .tagline h4 {
          color: ${offBlack};
        }

        .legal-container {
          display: flex;
          flex-direction: column;
          padding: 2em 0 1em 0;
        }
        .legal h3 {
          color: ${offBlack};
        }
        .docs h3 {
          color: ${offBlack};
          margin-bottom: 1em;
          margin-top: 1em;
        }
        .protection {
          z-index: 3;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: ${offBlack};
        }
        .protection .cta-protect {
          width: 20em;
          text-align: center;
          padding: 2em 2em;
        }
        .protection .cta-protect h3, .protection .cta-protect h4 {
          color: ${offWhite};
        }
        .protection .cta-protect p {
          color: ${offWhite};
          font-weight: 600;
        }
        .slogan h3 {
          color: ${offWhite};
          font-weight: 500;
        }
        @media only screen and (min-width: 768px) {
          .cta {
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            text-align: center;
            padding: 2em;
            background-color: transparent;
          }
          .cta h2, .cta h1, .cta h4 {
            color: ${offWhite}
          }
          .cta h4, .cta h2 {
            width: 100%;
          }
          .protection .cta-protect h3, .protection .cta-protect h4 {
            color: ${offBlack};
          }
          .protection .cta-protect p {
            color: ${offBlack};
            font-weight: 600;
          }
          .protection {
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            background-color: ${offBlack};
          }
          .protection .cta-protect {
            width: 22em;
            text-align: left;
            padding: 3em;
            position: absolute;
            z-index: 4;
            right: 8em;
            top: 6em;
            background-color: ${white}
          }
          .questions {
            padding: 3em 4em 0em 4em;
          }
          .howitworks {
            padding: 3em 3em 3em 3em;
          }
          .howitworks h2 {
            padding-left: 1em;
          }
          .steps {
            display: flex;
            flex-direction: row;
          }
          .step {
            padding: 2em 3em;
            max-width: 33%;
          }
          .section {
            flex-direction: column;
            align-items: stretch;
          }
          .left {
            flex-direction: row-reverse;
            margin-bottom: 2em;
          }
          .section img {
            max-width: 35em;
            min-width: 28em;
            max-height: 25em;
            min-height: 25em;
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
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
          }
          .right-content {
            padding: 3em 2em 2em 4em;
            text-align: left;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          .cta-bottom {
            position: absolute;
            justify-content: center;
            left: 4em;
            top: 4em;
            text-align: left;
            background-color: transparent;
            margin-top: 0rem;
            padding: 2em;
            width: 25vw;
            background-color: ${offBlack}
          }
          .tagline {
            justify-content: flex-start;
            align-items: flex-start;
            top: 2em;
            right: 4em;
            text-align: left;
            position: absolute;
            max-width: 24em;
            background-color: transparent;
          }
          .tagline h3{
            color: ${offWhite};
            font-style: italic;
          }
          .tagline h4{
            color: ${offWhite};
          }
          .image-cut {
            position: relative;
          }
          .legal {
            padding: 3em 3em 1em 3em;
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
        }
        @media only screen and (min-width: 768px) and (max-width: 1200px) {
          .protection .cta-protect {
            bottom: 2em;
            top: auto;
            left: 2em;
            right: auto;
          }
          .section {
            align-items: center;
          }
          .right {
            align-self: center;
          }
          .section img {
            max-width: 22em;
            min-width: 22em;
            max-height: 22em;
            min-height: 22em;
            object-fit: cover;
          }
        }
        @media only screen and (min-width: 1600px) {
          .cta-bottom {
            width: 16vw;
            top: 6em;
            left: 6em;
          }
        }
      `}</style>
    </div>
  );
};

export default compose()(Rental);
