import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withCheckout from '../containers/withCheckout'
import CartItem from '../components/CartItem'
import Price from '../components/Price'
import PaddedView from '../components/PaddedView'
import { velaGreen, velaBlue, velaRed } from '../style/colors'

const Cart = ({ checkout, isCheckoutIdLoading, handleMoreClick, handleLessClick, handleCheckoutCreation }) =>
  <PaddedView className='Cart'>
    {console.log(checkout)}
    <h2>Carrinho</h2>
    <div className='cart-content'>
      {checkout && !checkout.lineItems.edges.length && <small>Nao ha itens no seu carrinho</small>}
      <table className='items'>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item => <CartItem item={item} />)}
        </tbody>
      </table>
    </div>
    {checkout && !!checkout.lineItems.edges.length && <div className='cart-footer'>
      <div><b>Total:</b> <Price value={checkout && checkout.totalPrice} /></div>
      <button type='button' onClick={() => window.location.replace(checkout.webUrl)}>Finalizar</button>
    </div>}
    <style jsx>{`
      :global(.Cart) {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
      .cart-content {
        flex: 1;
      }
      .items {
        border-spacing: 0 1em;
      }
      .cart-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </PaddedView>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
