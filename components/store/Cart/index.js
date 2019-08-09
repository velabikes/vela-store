import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import PaddedView from 'components/PaddedView'
import withCheckout from 'containers/withCheckout'
import { velaGreen, velaBlue, lightGray } from 'style/colors'
import CartPrice from 'components/store/Cart/Price'
import CartItem from 'components/store/Cart/Item'
import CartContent from 'components/store/Cart/Content'

const Cart = ({ checkout, isCheckoutLoading }) =>
  <PaddedView className='Cart'>
    <CartContent checkout={checkout} loading={isCheckoutLoading} />
    <style jsx>{`
      :global(.Cart) {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
    `}</style>
  </PaddedView>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
