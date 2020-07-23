import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withShop from '../containers/withShop'
import PaddedView from '../components/PaddedView'
import Main from '../components/Main'
import Head from '../components/Head'
import Section from '../components/Section'

const LegalPage = ({
  shop
}) =>
  <>
    <Head>
      <title>Informações Legais - Vela Bikes</title>
    </Head>
    <Main className='legal'>
      <PaddedView>
        <h1>Informações Legais</h1>
        <Section>
          <h2>Politica de Privacidade</h2>
          {shop && <div dangerouslySetInnerHTML={{ __html: shop.privacyPolicy.body }} />}
        </Section>
        <Section>
          <h2>Politica de Frete</h2>
          <p>O preço do frete e o prazo de entrega são calculados diretamente na Vela. Selecione os produtos desejados, clique em “finalizar a compra”, e, em seguida, inclua seus dados e CEP. Nosso site irá calcular automaticamente o valor do frete.</p>
          <p><b>1. Frete Grátis</b></p>
          <p>A Vela contempla Frete Grátis para algumas regiões do Brasil. Confira abaixo se o seu estado está entre as localidades:</p>
          <p>1.1 Estados com frete grátis para compras a partir de R$ 4.500,00: <b>Grande São Paulo</b></p>
          <p>1.2 Outras localidades:</p>
          <p>Outras localidades não são elegíveis ao frete grátis. Consultar as taxas diretamente na finalização do pedido, ao inserir o endereço de entrega.</p>
          <p><b>2. Prazo de Entrega</b></p>
          <p>O prazo de entrega de todas as compras é estimado de acordo com o prazo de produção (atualmente 30 dias corridos) ou estoque disponível, no caso de acessórios, somado ao prazo da transportadora e pode sofrer alterações. Comprometemo-nos a fazer o máximo dentro de nossos poderes para respeitar os compromissos assumidos com nossos velejadores(as). </p>
          <p><b>3. Responsabilidade da Entrega</b></p>
          <p>A Vela se compromete a entregar o produto dentro do prazo estipulado, mas para isso é muito importante que o endereço esteja correto e completo, e este é de inteira responsabilidade do(a) velejador(a), e que tenha alguém munido de documento para recebimento em horário comercial. Não fazemos entregas para Caixa Postal ou localidades fora do território brasileiro.</p>
          <p><b>4. Responsabilidade pelo Pagamento do Frete em caso de Troca ou Devolução</b></p>
          <p>Em caso de devolução do produto por arrependimento, feita dentro do prazo de 7 dias corridos ou troca/devolução de produto com vício ou defeito de fabricação, o valor do frete de retorno do produto para a Vela será pago por nós. Para isso, o(a) velejador(a) deve entrar em contato conosco via telefone, chat ou e-mail e solicitar a autorização de troca ou devolução.</p>
        </Section>
        <Section>
          <h2>Politica de Devolução</h2>
          {shop && <div dangerouslySetInnerHTML={{ __html: shop.refundPolicy.body }} />}
        </Section>
        <Section>
          <h2>Termos de Serviço</h2>
          {shop && <div dangerouslySetInnerHTML={{ __html: shop.termsOfService.body }} />}
        </Section>
      </PaddedView>
    </Main>
  </>

LegalPage.propTypes = {
  shop: PropTypes.object
}

export default compose(
  withShop
)(LegalPage)
