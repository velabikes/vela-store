import PlusImage from "components/velaplus/PlusImage";
import React from "react";
import Head from "next/head";
import { compose } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckout from '../containers/withCheckout'
import Accordion from "../components/Accordion";
import PaddedView from "../components/PaddedView";
import { offBlack, offWhite, velaGreen, white } from "../style/colors";
import { AddIcon, BadgePlus } from "../components/Icons";
import Button from "../components/Button";

const VelaPlus = ({checkout, checkoutLineItemsAdd, handleCheckoutCreation}) => {
  const handleVelaPlusCta = async () => {
    const checkoutId = await handleCheckoutCreation();
    await checkoutLineItemsAdd({
      variables: {
        checkoutId,
        lineItems: {
          variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI1Mjc5MjIxMzU1OQ==',
          quantity: 1,
        }
      }
    })
    window.location.replace(checkout.webUrl)
  };

  return (
    <div className="velaplus">
      <Head>
        <title>Plano Vela+ - Vela Bikes</title>
        <link
          rel="alternate"
          hrefLang="pt-br"
          href="https://velabikes.com.br/blackfriday"
        />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="application-name" content="Vela Bikes Store" />
        <meta
          name="description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Plano Vela+ - Vela Bikes" />
        <meta
          name="twitter:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVela2020.jpg?alt=media&token=c94e0d3f-5f5d-47eb-9b15-94d75bde074d"
        />
        <meta property="og:url" content="https://velabikes.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plano Vela+ - Vela Bikes" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Você e a Vela: um relacionamento sério. Assine nosso plano com rastreamento GPS, proteção contra roubo e furto e muitos mais para sua bike elétrica!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVela2020.jpg?alt=media&token=c94e0d3f-5f5d-47eb-9b15-94d75bde074d"
        />
      </Head>
      <PlusImage />
      <div className="cover">
        <div className="cta">
          <h1>
            Vela<span style={{ display: "none" }}>Mais</span>
          </h1>
          <BadgePlus />
        </div>
      </div>
      <div className="call">
        <div className="add">
          <h2>R$ 69,90/mês</h2>
          <h5>
            Pacote anual cobrado em até 12x sem juros no cartão de crédito.
          </h5>
          <hr />
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Proteção contra roubo e furto
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Notificações remotas
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Rastreamento GPS
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Descontos em produtos e serviços
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Funções e atualizações exclusivas
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Desconto em novas baterias
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Benefícios com parceiros
          </p>
          <div className="action">
            <Button primary onClick={handleVelaPlusCta}>Assinar</Button>
          </div>
        </div>
        <div className="description">
          <h2>Você e a Vela: um relacionamento sério</h2>
          <h4>
            Muito mais do que proteção contra roubo e furto, o plano oferece uma
            série de vantagens exclusivas para você e para sua Vela.
          </h4>
          <p>
            A assinatura pode ser feita ao comprar sua Vela 2 ou diretamente
            nessa página em apenas 3 clicks. Simples e rápido, como nossa
            smartbike.
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
              <h2>Sua Vela + segura</h2>
              <h4>
                Com rastreamento GPS integrado e desconto em produtos, peças e
                serviços. Você não precisa se preocupar, apenas Velejar!
              </h4>
            </div>
          </div>
          <div className="callcenter">
            <div className="cimg">
              <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeEletricaSegura.png?alt=media&token=b48d1a38-99bb-436f-b32e-d8cd4809a543" />
            </div>
            <div className="cdescript">
              <h2>Você + conectado</h2>
              <h4>
                Funções exclusivas no Vela App, atendimento exclusivo em até 24
                horas e todo o suporte que você precisa para sua bike.
              </h4>
            </div>
          </div>
        </PaddedView>
      </div>
      <div className="models-content">
        <div className="models">
          <div className="m1">
            <h3>10% de desconto no site Vela</h3>
            <p>
              Em qualquer produto ou serviço da Vela. Acessórios lindos, peças
              de manutenção e revisões para os assinantes. Inclusive na compra
              de uma nova bike!
            </p>
          </div>
          <div className="m2">
            <h3>Desconto em novas baterias</h3>
            <p>
              Sabemos da importância da bateria para a nossa relação e, por
              isso, oferecemos 30% de desconto na compra de uma nova. Sempre bom
              ter uma reserva, né?
            </p>
          </div>
          <div className="m3">
            <h3>Benefícios com parceiros</h3>
            <p>
              Nossos Velejadores terão benefícios com todos os nossos parceiros
              atuais e que estão por vir. Descontos, brindes e outras vantagens
              para o cliente Vela+.
            </p>
          </div>
        </div>
      </div>
      <div className="questions">
        <PaddedView>
          <h2>Possui dúvidas?</h2>
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="1. Quais os passos caso eu tenha a minha Vela roubada ou furtada?"
            content="O primeiro passo é enviar um email para a nossa equipe de atendimento (contato@velabikes.com.br) com as suas informações de pedido, nome, contato, data, hora juntamente com uma cópia do boletim de ocorrência. Nossa equipe vai dar início ao bloqueio da conta, bloqueio da bike e à busca da sua Vela. Caso não seja recuperada num prazo de 30 dias corridos (“período de busca”), seguiremos com as etapas para a produção e substituição por uma nova bike."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="2. Qual o prazo de entrega da nova bike de substituição da roubada/furtada?"
            content="O prazo esperado para a produção de uma nova unidade da Vela 2 é de 30 dias (“período de produção”) após o término do “período de busca”. A Vela não se responsabiliza por custos que envolvem o deslocamento do cliente durante o “período de busca” e o “período de produção”."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="3. Existe algum custo fixo que devo pagar, caso minha Vela seja roubada/furtada, para ter direito a uma nova bike?"
            content="Dada a aprovação da restituição de uma nova unidade da Vela 2, o cliente terá um desconto para a compra de uma nova unidade da Vela 2. O pedido da bike de restituição deverá acontecer exclusivamente através do site oficial da marca (www.velabikes.com.br)  e o desconto para essa nova aquisição será de 60% no caso de roubo e 40% no caso de furto. O valor deverá ser pago por meio de um cartão de crédito podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="4. Posso cancelar antes do término dos 12 meses?"
            content="Como o plano inclui uma proteção contra roubo/furto e a Vela possui contratos de ativação do sinal e segurança durante o prazo de 12 meses, o cancelamento da assinatura poderá ser solicitado durante o período contratado mediante ao pagamento de uma taxa equivalente a 50% com base na proporção do período que permanecerá em aberto."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="5. A proteção cobre acidentes?"
            content="A proteção não cobre acidentes, peças de reposição, peças consumíveis, revisões e outros custos envolvidos no uso regular da Vela."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="6. A proteção cobre os custos dos acessórios, se estiverem instalados na bike?"
            content="A proteção está atrelada exclusivamente à bicicleta em questão e a Vela não se responsabiliza ou cobre custos envolvidos com acessórios instalados na bike, sejam de terceiros, adquiridos na Vela ou qualquer outro item ou produto do cliente que possa ter sido roubado ou furtado na ocasião."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="7. A cobertura do plano é nacional ou apenas em São Paulo?"
            content="Os itens diretamente relacionados com a operação da Vela terão validade para todo o território nacional (proteção contra roubo/furto, notificações remotas, rastreamento GPS, desconto nos produtos e serviços, funções e atualizações exclusivas), mas os benefícios com parceiros podem variar de acordo com a infraestrutura Vela em sua cidade."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="8. Como garantir que não vou perder o benefício da proteção contra roubo e furto? Quais as principais condições para ser validada?"
            content="Para ter acesso ao período de busca e, possivelmente, à bicicleta de reposição, o cliente deve seguir as indicações da Vela para manter seu plano ativo. Os principais pontos são: boletim de ocorrência, estar com a Vela com a trava eletromagnética ativada no momento do acontecimento e estar utilizando qualquer cadeado do modelo U-lock em casos de furto."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="9. Como funciona o pagamento do plano?"
            content="O pagamento do pacote do plano anual de assinatura do Vela+ deverá ser realizado através do site da Vela, sendo cobrado no cartão de crédito e podendo ser parcelado em até 12x sem juros."
          />
          <Accordion
            color={white}
            hoverColor={offWhite}
            textColor={offBlack}
            title="10. O que está incluso nessa parte de “funções e atualizações exclusivas”?"
            content="A Vela tem como política manter a performance e funcionamento da bicicleta (produto físico) equivalente para todos os clientes, com ou sem a assinatura do plano Vela+, mas temos funcionalidades dentro do aplicativo exclusivas para os assinantes do plano, como as notificações de segurança e o rastreamento GPS."
          />
        </PaddedView>
      </div>
      <style jsx>
        {`
        .cover {
              position: relative;
              z-index: 2;
          }
        .cta {
            width: 100%;
            text-align: center;
            margin-top: -2em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }
        .cta h1 {
          font-size: 6em;
          color: ${offBlack};
        }
        .call {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        .add h3 {
          color: ${offBlack};
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
        }
        .models-content {
          padding: 2em;
          background-color: ${offWhite};
        }
        .models {
          display: flex;
          flex-direction: column;
        }
        .models > * {
          margin: 2em 0;
          padding: 2em;
          background-color: ${white};
          box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
        }
        .models > * > .profile {
          padding-bottom: 0;
        }
        .service {
          background-color: #DCF5EB;
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
          padding: 2em 2em 0 2em;
          background-color: ${white};    
        }
        .questions h2 {
            color: ${offBlack};
            margin-bottom: 1em;
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
          .description {
            max-width: 25em;
            padding: 4em;
            text-align: left;
          }
          .cta {
            margin-top: -6em;
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
            margin: -0 0 -4em 0;
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
            padding: 2.5em;
          }
          .models > * > .profile {
            font-size: 0.8em;
          }
        }
        }
      }`}
      </style>
    </div>
  );
};

export default compose(
  withCheckout,
  withCheckoutLineItemsAdd
)(VelaPlus)
