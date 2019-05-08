import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Price from '../components/Price'
import Image from '../components/Image'

const Cart = ({ checkout, isCheckoutIdLoading, visible }) =>
  <div className='Cart'>
    <h2>Carrinho</h2>
    <div className='cart-content'>
      <table className='items'>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item =>
            <tr key={item.node.id}>
              <td><Image src={item.node.variant.image.src} alt='' /></td>
              <td>{item.node.quantity}</td>
              <td><b>{item.node.title}</b></td>
              <td><Price value={parseInt(item.node.variant.price)} /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className='cart-footer'>
      <div><h4>Total: {checkout && checkout.totalPrice}</h4></div>
      <button type='button' onClick={() => window.location.replace(checkout.webUrl)}>Continuar →</button>
    </div>
    <style jsx>{`
      .Cart {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
      .cart-content {
        flex: 1;
      }
      .items tr td:first-child {
        width: 30%;
      }
      .items tr td:last-child {
        text-align: right;
      }
      .cart-footer {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
