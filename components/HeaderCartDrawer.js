import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Link from '../components/Link'

const CartDrawer = ({ checkout, isCheckoutIdLoading, visible }) =>
  <div className='root'>
    <h2>Cart</h2>
    <table className='items'>
      <tbody>
        {checkout && checkout.lineItems.edges.map(item =>
          <tr key={item.node.id}>
            <td><img src={item.node.variant.image.src} alt='' /></td>
            <td>{item.node.quantity}</td>
            <td>{item.node.title}</td>
            <td>{item.node.variant.price}</td>
          </tr>
        )}
      </tbody>
    </table>
    <div className='prices'>
      <div><span>Total:</span><span>{checkout && checkout.totalPrice}</span></div>
    </div>
    <form>
      <button type='button' onClick={() => window.location.replace(checkout.webUrl)}>Continuar →</button>
    </form>
    <style jsx>{`
      .root {
        position: absolute;
        left: 0;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: 1s all;
        top: 0;
        bottom: 0;
        width: 600px;
        background-color: #fcfcfc;
        z-index: 0;
        margin-left: 96px;
        padding: 1em;
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
      .prices, form {
        text-align: right;
      }
    `}</style>
  </div>

CartDrawer.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(CartDrawer)
