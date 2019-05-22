import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withShop from '../containers/withShop'
import PaddedView from '../components/PaddedView'

const LegalPage = ({
  shop, isShopLoading
}) =>
  <PaddedView>
    <h1>Informações Legais</h1>
    <h2>Politica de privacidade</h2>
    {shop && shop.privacyPolicy.body.split('\n').map(paragraph => <p>{paragraph}</p>)}
    <h2>Politica de devolução</h2>
    {shop && shop.refundPolicy.body.split('\n').map(paragraph => <p>{paragraph}</p>)}
  </PaddedView>

export default compose(
  withShop
)(LegalPage)
