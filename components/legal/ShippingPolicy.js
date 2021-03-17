import PaddedView from "../PaddedView";
import Section from "../Section";

const ShippingPolicy = () => (
  <div>
    <br />
    <h2>Política de Frete</h2>
    <Section>
      <p>
        O preço do frete e o prazo de entrega são calculados diretamente na
        Vela. Selecione os produtos desejados, clique em “finalizar a compra”,
        e, em seguida, inclua seus dados e CEP. Nosso site irá calcular
        automaticamente o valor do frete.
      </p>
      <h3>SEÇÃO 1 - FRETE GRÁTIS</h3>
      <p>
        A Vela contempla Frete Grátis para algumas regiões do Brasil. Confira
        abaixo se o seu estado está entre as localidades:
      </p>
      <ul>
        <li>
          1.1 Estados com frete grátis para compras a partir de R$ 4.500,00:{" "}
          <b>Grande São Paulo</b>
        </li>
        <li>
          1.2 Outras localidades: Outras localidades não são elegíveis ao frete
          grátis. Consultar as taxas diretamente na finalização do pedido, ao
          inserir o endereço de entrega.
        </li>
      </ul>
      <h3>SEÇÃO 2 - PRAZO DE ENTREGA</h3>
      <p>
        O prazo de entrega de todas as compras é estimado de acordo com o prazo
        de produção (atualmente 120 dias corridos) ou estoque disponível, no
        caso de acessórios, somado ao prazo da transportadora e pode sofrer
        alterações. Comprometemo-nos a fazer o máximo dentro de nossos poderes
        para respeitar os compromissos assumidos com nossos velejadores(as).
      </p>
      <h3>SEÇÃO 3 - RESPONSABILIDADE DA ENTREGA</h3>
      <p>
        A Vela se compromete a entregar o produto dentro do prazo estipulado,
        mas para isso é muito importante que o endereço esteja correto e
        completo, e este é de inteira responsabilidade do(a) velejador(a), e que
        tenha alguém munido de documento para recebimento em horário comercial.
        Não fazemos entregas para Caixa Postal ou localidades fora do território
        brasileiro.
      </p>
      <h3>
        SEÇÃO 4 - RESPONSABILIDADE PELO PAGAMENTO DO FRETE EM CASO DE TROCA OU
        DEVOLUÇÃO
      </h3>
      <p>
        Em caso de devolução do produto por arrependimento, feita dentro do
        prazo de 7 dias corridos ou troca/devolução de produto com vício ou
        defeito de fabricação, o valor do frete de retorno do produto para a
        Vela será pago por nós. Para isso, o(a) velejador(a) deve entrar em
        contato conosco via telefone, chat ou e-mail e solicitar a autorização
        de troca ou devolução.
      </p>
      <small>Revisado e atualizado em 11 de março de 2021.</small>
    </Section>
  </div>
);

export default ShippingPolicy;
