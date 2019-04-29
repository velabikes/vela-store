import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import withShopify from '../lib/shopify'

const Cart = ({ checkout, checkoutId, isCheckoutIdLoading }) =>
  <div>
    <div>{checkout && checkout.lineItems.edges.length}</div>
    <div>{checkoutId}</div>
    <div>{JSON.stringify(isCheckoutIdLoading)}</div>
  </div>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
//  withShopify,
  withCheckout
)(Cart)
