import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withCheckout from '../containers/withCheckout'
import CartPrice from '../components/CartPrice'
import CartItem from '../components/CartItem'
import PaddedView from '../components/PaddedView'
import { velaGreen, velaBlue, lightGray } from '../style/colors'

const Cart = ({ checkout, isCheckoutIdLoading, handleMoreClick, handleLessClick, handleCheckoutCreation }) =>
  <PaddedView className='Cart'>
    <h2>Carrinho</h2>
    <div className='cart-content'>
      {checkout && !checkout.lineItems.edges.length && <small>Nao ha itens no seu carrinho</small>}
      <div className='items'>
        <table>
          <tbody>
            {checkout && checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
          </tbody>
        </table>
      </div>
      <div className='price'>
        <CartPrice checkout={checkout} />
      </div>
    </div>
    {checkout && !!checkout.lineItems.edges.length && <div className='cart-footer'>
      <small></small>
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
        display: flex;
        flex-direction: column;
      }
      .items {
        flex: 1;
      }
      .items table {
        border-spacing: 0 1em;
      }
      .cart-footer {
        padding-top: 1em;
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
