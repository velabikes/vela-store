import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withShop from '../containers/withShop'
import PaddedView from '../components/PaddedView'

const LegalPage = ({
  shop
}) =>
  <PaddedView>
    <h1>Informações Legais</h1>
    <h2>Politica de privacidade</h2>
    {shop && <div dangerouslySetInnerHTML={{ __html: shop.privacyPolicy.body }} />}
    <h2>Politica de devolução</h2>
    {shop && <div dangerouslySetInnerHTML={{ __html: shop.refundPolicy.body }} />}
  </PaddedView>

LegalPage.propTypes = {
  shop: PropTypes.object
}

export default compose(
  withShop
)(LegalPage)
