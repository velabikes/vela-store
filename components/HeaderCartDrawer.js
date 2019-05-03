import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Price from '../components/Price'

const CartDrawer = ({ checkout, isCheckoutIdLoading, visible }) =>
  <div className='CartDrawer'>
    <h1>Carrinho</h1>
    <div className='cart-content'>
      <table className='items'>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item =>
            <tr key={item.node.id}>
              <td><img src={item.node.variant.image.src} alt='' /></td>
              <td>{item.node.quantity}</td>
              <td>{item.node.title}</td>
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
      .CartDrawer {
        position: fixed;
        left: 5em;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: 1s all;
        top: 0;
        bottom: 0;
        width: 400px;
        background-color: #fdfdfe;
        display: flex;
        flex-direction: column;
        padding: 1em;
        box-shadow: 0px 0px ${visible ? '12' : '0'}px 0px rgba(0,0,0,0.1);
      }
      .cart-content {
        flex: 1;
      }
      .items tr td:first-child {
        width: 30%;
      }
      .items tr td {
        text-align: center;
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

CartDrawer.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(CartDrawer)
