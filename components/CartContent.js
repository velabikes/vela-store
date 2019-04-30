import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Link from '../components/Link'

const Cart = ({ checkout, isCheckoutIdLoading }) =>
  <div className='root'>
    <table className='items'>
      {checkout && checkout.lineItems.edges.map(item =>
        <tr>
          <td><img src={item.node.variant.image.src} alt='' /></td>
          <td>{item.node.quantity}</td>
          <td>{item.node.title}</td>
          <td>{item.node.variant.price}</td>
        </tr>
      )}
    </table>
    <div className='prices'>
      <div><span>Total:</span><span>{checkout && checkout.totalPrice}</span></div>
    </div>
    <form>
      <button type="button" onClick={() => alert('!')}>Continuar →</button>
    </form>
    <style jsx>{`
      .root {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 600px;
        background-color: #f5f5f5;
        z-index: 0;
        padding-left: 100px;
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

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
