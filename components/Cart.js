import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Link from '../components/Link'

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
