import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Link from 'next/link'
import withCheckout from '../containers/withCheckout'

const Cart = ({ checkout, isCheckoutIdLoading }) =>
  <div>
    cart{checkout && checkout.lineItems.edges.length}
  </div>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
