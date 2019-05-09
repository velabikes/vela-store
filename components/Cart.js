import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Price from '../components/Price'
import Image from '../components/Image'
import PaddedView from '../components/PaddedView'

const Cart = ({ checkout, isCheckoutIdLoading, visible }) =>
  <PaddedView className='Cart'>
    <h2>Carrinho</h2>
    <div className='cart-content'>
      {checkout && !checkout.lineItems.edges.length && <small>Nao ha itens no seu carrinho</small>}
      <table className='items'>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item =>
            <tr key={item.node.title}>
              <td><Image src={item.node.variant && item.node.variant.image.src} alt='' /></td>
              <td>{item.node.quantity}</td>
              <td><b>{item.node.title}</b></td>
              <td><Price value={parseInt(item.node.variant && item.node.variant.price)} /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    {checkout && !!checkout.lineItems.edges.length && <div className='cart-footer'>
      <div><h4>Total: {checkout && checkout.totalPrice}</h4></div>
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
      .items tr td:first-child {
        width: 30%;
        padding-right: 1em;
      }
      .items tr td:last-child {
        text-align: right;
        padding-left: 1em;
      }
      .cart-footer {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </PaddedView>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(Cart)
