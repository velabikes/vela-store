import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import PaddedView from '../PaddedView'
import withCheckout from '../../containers/withCheckout'
import { velaGreen, velaBlue, lightGray } from '../../style/colors'
import CartPrice from './CartPrice'
import CartItem from './CartItem'
import CartContent from './CartContent'

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
