import PropTypes from 'prop-types'
import { compose } from 'recompose'
import PaddedView from 'components/PaddedView'
import withCheckout from 'containers/withCheckout'
import CartContent from 'components/store/Cart/Content'

const Cart = ({ checkout, isCheckoutLoading }) =>
  <PaddedView className='Cart'>
    <CartContent checkout={checkout} loading={isCheckoutLoading} />
    <style jsx>{`
      :global(.Cart) {
        display: flex;
        height: 100%;
        flex-direction: column;
        padding: 0.5em 0;
      }
    `}</style>
  </PaddedView>

Cart.propTypes = {
  checkout: PropTypes.object,
  isCheckoutLoading: PropTypes.bool
}

export default compose(
  withCheckout
)(Cart)
