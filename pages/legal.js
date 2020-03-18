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
  <Main className='legal'>
    <Head>
      <title>Informações Legais - Vela Bikes</title>
    </Head>
    <PaddedView>
      <h1>Informações Legais</h1>
      <Section>
        <h2>Politica de privacidade</h2>
        {shop && <div dangerouslySetInnerHTML={{ __html: shop.privacyPolicy.body }} />}
      </Section>
      <Section>
        <h2>Politica de devolução</h2>
        {shop && <div dangerouslySetInnerHTML={{ __html: shop.refundPolicy.body }} />}
      </Section>
      <Section>
        <h2>Termos de serviço</h2>
        {shop && <div dangerouslySetInnerHTML={{ __html: shop.termsOfService.body }} />}
      </Section>
    </PaddedView>
  </Main>

LegalPage.propTypes = {
  shop: PropTypes.object
}

export default compose(
  withShop
)(LegalPage)
