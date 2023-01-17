import React, { useEffect, useState } from "react";
import Head from "next/head";
import { compose } from "recompose";
import withCheckoutLineItemsAdd from "../containers/withCheckoutLineItemsAdd";
import withCheckout from "../containers/withCheckout";
import Accordion from "../components/Accordion";
import PaddedView from "../components/PaddedView";
import { offBlack, offWhite, velaGreen, velaRed, white } from "../style/colors";
import {
  AddIcon,
  BadgePlus,
  Chat,
  GPS,
  Notifications,
} from "../components/Icons";
import Button from "../components/Button";
import PlusImage from "components/velaplus/PlusImage";
import ProtectionImage from "components/velaplus/ProtectionImage";

const VelaPlus = ({
  checkout,
  checkoutLineItemsAdd,
  handleCheckoutCreation,
}) => {
  const [mustRedirect, setMustRedirect] = useState(false);
  useEffect(() => {
    if (mustRedirect) {
      window.location.replace(checkout.webUrl);
    }
  }, [mustRedirect, checkout]);
  const handleVelaPlusCta = async () => {
    const checkoutId = await handleCheckoutCreation();
    await checkoutLineItemsAdd({
      variables: {
        checkoutId,
        lineItems: {
          variantId:
            "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI3ODk3OTc0Mzc5OQ==",
          quantity: 1,
        },
      },
    });
    setMustRedirect(true);
  };

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
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Vela+ Plano Anual - Vela Bikes" />
        <meta
          name="twitter:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FPlanoVelaMais.png?alt=media&token=4a7061bc-bbc8-418c-af4b-ea0c8a3fc428"
        />
        <meta property="og:url" content="https://velabikes.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vela+ Plano Anual - Vela Bikes" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FPlanoVelaMais.png?alt=media&token=4a7061bc-bbc8-418c-af4b-ea0c8a3fc428"
        />
      </Head>
      <PlusImage />
      <div className="cover">
        <div className="cta">
          <h1>
            Novo Vela<span style={{ display: "none" }}>Mais</span>
          </h1>
          <BadgePlus />
        </div>
        <div className="cta">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Agora com AirTag e compatível também com a Vela 1 e Vela S</h3>
        </div>
      </div>
      <div className="call">
        <div className="add">
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Proteção contra roubo e furto;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Rastreamento AirTag integrado;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Compatível com iOS e Android;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            10% OFF em novas bikes;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            20% OFF em serviços e acessórios;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            30% OFF em cadeados e baterias;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Serviços Leva&Traz gratuitos*;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Promoções exclusivas;
          </p>
          <p>
            <AddIcon style={{ width: "1.1em" }} />
            Frete grátis no site Vela;
          </p>
          <hr />
          <h22>
            <b>R$ 99/mês</b>
          </h22>
          <h5>
            Pacote anual cobrado em até 12x sem juros no cartão de crédito.
          </h5>
          <div className="action">
            <Button primary onClick={handleVelaPlusCta}>
              Assinar Agora
            </Button>
          </div>
        </div>
        <div className="description">
          <h2>2023 com uma experiêcnia ainda mais completa</h2>
          <br></br>
          <br></br>
          <h4>
            Muito mais do que proteção contra roubo e furto, o plano oferece uma
            série de vantagens exclusivas para você e para sua Vela.
          </h4>
          <br></br>
          <br></br>
          <p>
            Compatível com todas as unidades da Vela já produzidas: Vela 1, Vela
            S, Vela 1.5 (upgrade) e Vela 2.
          </p>
        </div>
      </div>
      <div className="service">
        <PaddedView>
          <div className="security">
            <div className="simg">
              <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FAssistenciaTecnicaBikeEletrica.png?alt=media&token=65fde0d1-61d3-4e90-818a-f45b54c4f4ab" />
            </div>
            <div className="sdescript">
              <h2>Sua Vela+ Segura</h2>
              <h4>
                Com o rastreamento AirTag integrado de autonomia para até 15
                anos, a sua única preodupação vai ser aproveitar o vento no
                rosto.
                <br></br>
              </h4>
            </div>
          </div>
          <div className="callcenter">
            <div className="cimg">
              <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeEletricaSegura.png?alt=media&token=b48d1a38-99bb-436f-b32e-d8cd4809a543" />
            </div>
            <div className="cdescript">
              <br></br>
              <h2>Você+ Protegido</h2>
              <h4>
                Uma experiência completa com todos os novos benefícios de
                desconto para bikes, serviços, acessóris, baterias e cadeados.
                Além do Leva&Traz sem custo para toda a Grande São Paulo.
              </h4>
            </div>
          </div>
        </PaddedView>
      </div>
      <div className="protection">
        <ProtectionImage />
        <div className="cta">
          <h2>
            Proteção contra <br />
            roubo e furto
          </h2>
          <br></br>
          <h4>
            Segurança em primeiro lugar para você pedalar pela cidade sem medo!
          </h4>
          <br></br>
          <p>
            Assinando o Plano Vela+ você conta com mais segurança. Bloqueamos
            sua bike, ajudamos na busca, e, caso não seja possível resgatá-la,
            substituímos ela para você.
          </p>
        </div>
      </div>
      <div className="app">
        <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FFun%C3%A7oesAppBikeEletrica.png?alt=media&token=73ba9faa-e4ec-444f-9a91-82b656c058e0" />
        <div className="apptext">
          <h2>Funções e atualizações exclusivas</h2>
          <h5>
            Surpresas positivas são sempre bem vindas. Com as atualizações e
            funcionalidades exclusivas para os cliente Vela+, você tem total
            acesso a nossa tecnologia de ponta antes de todo mundo.
          </h5>
          <p>
            Já imaginou saber onde sua bike está? Pois é, essa função existe e
            mantém você super conectado com sua V2. Além disso, você receberá
            notificações, se houver qualquer movimentação suspeita, e acesso
            exclusivo a um canal de comunicação direto com nossa equipe.
          </p>
          <div className="bfunctions">
            <div className="bleft">
              <Chat />
              <h4>Chat exclusivo e dedicado</h4>
            </div>
            <div className="bcenter">
              <GPS />
              <h4>Rastreamento GPS integrado</h4>
            </div>
            <div className="bright">
              <Notifications />
              <h4>Notificações remotas</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="models-content">
        <div className="models">
          <div className="m1">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2F01.png?alt=media&token=8de570ad-5d83-43a6-8fd9-fa8c6621aed6" />
            <h3>Desconto em novas baterias</h3>
            <p>
              Sabemos da importância da bateria para a nossa relação e, por
              isso, oferecemos 30% de desconto na compra de uma nova. Sempre bom
              ter uma reserva, né?
            </p>
          </div>
          <div className="m2">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2F02.png?alt=media&token=0effc50e-94d0-4d4e-9b59-812a6a825a34" />
            <h3>10% de desconto no site Vela</h3>
            <p>
              Em qualquer produto ou serviço da Vela. Acessórios lindos, peças
              de manutenção e revisões para os assinantes. Inclusive na compra
              de uma nova bike!
            </p>
          </div>
          <div className="m3">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2F03.png?alt=media&token=adce9b28-be43-4884-b08a-f91a3bbdb2ca" />
            <h3>Benefícios com parceiros</h3>
            <p>
              Nossos Velejadores terão benefícios com todos os nossos parceiros
              atuais e que estão por vir. Descontos, brindes e outras vantagens
              exclusivas para quem assina.
            </p>
          </div>
        </div>
        <div className="action">
          <Button primary onClick={handleVelaPlusCta}>
            Assinar Agora
          </Button>
        </div>
      </div>
      <div className="questions">
        <PaddedView>
          <h2>Possui dúvidas?</h2>
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="1. Quais os passos caso eu tenha a minha Vela roubada ou furtada?"
            content="O primeiro passo é enviar um email para a nossa equipe de atendimento (contato@velabikes.com.br) com as suas informações de pedido, nome, contato, data, hora juntamente com uma cópia do boletim de ocorrência. Nossa equipe vai dar início ao bloqueio da conta, bloqueio da bike e à busca da sua Vela. Caso não seja recuperada num prazo de 30 dias corridos (“período de busca”), seguiremos com as etapas para a produção e substituição por uma nova bike."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="2. Qual o prazo de entrega da nova bike de substituição da roubada/furtada?"
            content="O prazo esperado para a produção de uma nova unidade da Vela 2 é de 30 dias (“período de produção”) após o término do “período de busca”. A Vela não se responsabiliza por custos que envolvem o deslocamento do cliente durante o “período de busca” e o “período de produção”."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="3. Existe algum custo fixo que devo pagar, caso minha Vela seja roubada/furtada, para ter direito a uma nova bike?"
            content="Dada a aprovação da restituição de uma nova unidade da Vela 2, o cliente terá um desconto para a compra de uma nova unidade da Vela 2. O pedido da bike de restituição deverá acontecer exclusivamente através do site oficial da marca (www.velabikes.com.br)  e o desconto para essa nova aquisição será de 80% no caso de roubo e 70% no caso de furto. O valor deverá ser pago por meio de um cartão de crédito podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="4. Posso cancelar antes do término dos 12 meses?"
            content="Como o plano inclui uma proteção contra roubo/furto e a Vela possui contratos de ativação do sinal e segurança durante o prazo de 12 meses, o cancelamento da assinatura poderá ser solicitado durante o período contratado mediante ao pagamento de uma taxa equivalente a 50% com base na proporção do período que permanecerá em aberto."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="5. A proteção cobre acidentes?"
            content="A proteção não cobre acidentes, peças de reposição, peças consumíveis, revisões e outros custos envolvidos no uso regular da Vela."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="6. A proteção cobre os custos dos acessórios, se estiverem instalados na bike?"
            content="A proteção está atrelada exclusivamente à bicicleta em questão e a Vela não se responsabiliza ou cobre custos envolvidos com acessórios instalados na bike, sejam de terceiros, adquiridos na Vela ou qualquer outro item ou produto do cliente que possa ter sido roubado ou furtado na ocasião."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="7. A cobertura do plano é nacional ou apenas em São Paulo?"
            content="Os itens diretamente relacionados com a operação da Vela terão validade para todo o território nacional (proteção contra roubo/furto, notificações remotas, rastreamento GPS, desconto nos produtos e serviços, funções e atualizações exclusivas), mas os benefícios com parceiros podem variar de acordo com a infraestrutura Vela em sua cidade."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="8. Como garantir que não vou perder o benefício da proteção contra roubo e furto? Quais as principais condições para ser validada?"
            content="Para ter acesso ao período de busca e, possivelmente, à bicicleta de reposição, o cliente deve seguir as indicações da Vela para manter seu plano ativo. Os principais pontos para furto são: boletim de ocorrência, estar com a Vela com a trava eletromagnética ativada no momento do acontecimento e estar utilizando qualquer cadeado do modelo U-lock. Já para roubo, requisitamos apenas o boletim de ocorrência."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="9. Como funciona o pagamento do plano?"
            content="O pagamento do pacote do plano anual de assinatura do Vela+ deverá ser realizado através do site da Vela, sendo cobrado no cartão de crédito e podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={"#DCF5EB"}
            textColor={offBlack}
            title="10. O que está incluso nessa parte de “funções e atualizações exclusivas”?"
            content="A Vela tem como política manter a performance e funcionamento da bicicleta (produto físico) equivalente para todos os clientes, com ou sem a assinatura do plano Vela+, mas temos funcionalidades dentro do aplicativo exclusivas para os assinantes do plano, como as notificações de segurança e o rastreamento GPS."
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
              <h3>Documentos</h3>
              <p>
                <a href="/legal">Termos de Serviço do Plano Vela+</a>
              </p>
              <p>
                <a href="https://drive.google.com/file/d/1OQfVi4WnUNVd-8xQhs6Hn7vFTDH5vGev/view?usp=sharing">
                  Modelo de Contrato do Plano Vela+
                </a>
              </p>
              <p>
                <a href="/legal">Política de Privacidade</a>
              </p>
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
        .cover {
            position: relative;
            z-index: 2;
          }
        .cover .cta {
            width: 100%;
            text-align: center;
            margin-top: -2em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }
        .cover .cta h1 {
          font-size: 6em;
          color: ${offBlack};
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
        }
        .add h3 {
          color: ${offBlack};
          font-weight: 500;
          
        }
         .add h22 {
          color: ${velaRed};
          font-size: 1.7em;
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
            padding-bottom: 2em;
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
            margin-top: -8em;
          }
          .protection {
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            background-color: ${offBlack};
          }
          .protection .cta {
            width: 22em;
            text-align: right;
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

export default compose(withCheckout, withCheckoutLineItemsAdd)(VelaPlus);
