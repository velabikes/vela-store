import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withCheckout from '../containers/withCheckout'
import CartPrice from '../components/CartPrice'
import CartItem from '../components/CartItem'
import PaddedView from '../components/PaddedView'
import { velaGreen, velaBlue, lightGray } from '../style/colors'
import CartContent from '../components/CartContent'

const Cart = ({ checkout, isCheckoutLoading }) =>
  <PaddedView className='Cart'>
    <h2>Carrinho</h2>
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
