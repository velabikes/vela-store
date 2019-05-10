import PropTypes from 'prop-types'
import { compose, lifecycle, withHandlers } from 'recompose'
import withCheckout from '../containers/withCheckout'
import Price from '../components/Price'
import Image from '../components/Image'
import PaddedView from '../components/PaddedView'
import withCheckoutLineItemsUpdate from '../containers/withCheckoutLineItemsUpdate'
import { velaGreen, velaBlue, velaRed } from '../style/colors'

const Cart = ({ checkout, isCheckoutIdLoading, handleMoreClick, handleLessClick, handleCheckoutCreation }) =>
  <PaddedView className='Cart'>
    <h2>Carrinho</h2>
    <div className='cart-content'>
      {checkout && !checkout.lineItems.edges.length && <small>Nao ha itens no seu carrinho</small>}
      <table className='items'>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item =>
            <tr key={item.node.title}>
              <td><Image src={item.node.variant && item.node.variant.image.src} alt='' /><span>{item.node.quantity}</span></td>
              <td className='quantity'>
                <a onClick={() => handleMoreClick(item)}>mais</a>
                <a onClick={() => handleLessClick(item)}>menos</a>
              </td>
              <td className='name'><b>{item.node.title}</b></td>
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
      .items {
        border-spacing: 0 10px;
      }
      .items  td {
        padding: 0em 1em;
      }
      .items td:first-child {
        width: 20%;
        padding-left: 0;
        padding-right: 0;
        position: relative;
      }
      .items td:first-child span {
        position: absolute;
        top: -.9em;
        right: -.9em;
        background: ${velaBlue};
        border-radius: 1em;
        width: 1.8em;
        height: 1.8em;
        line-height: 1.8em;
        text-align: center;
        font-size: .8em;
        font-weight: 700;
        color: white;
      }
      .items td.name {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .items td.quantity a {
        display: block;
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${velaGreen};
        font-size: 0;
        margin: 10px 0;
      }
      .items td.quantity a:last-child {
        transform: rotate(180deg)
      }
      .items td:last-child {
        text-align: right;
        padding-right: 0;
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
  withCheckout,
  withCheckoutLineItemsUpdate,
  withHandlers({
    handleMoreClick: ({ checkoutLineItemsUpdate, checkoutId }) => async item => {
      await checkoutLineItemsUpdate({
        variables: {
          checkoutId: checkoutId,
          lineItems: [{ quantity: parseInt(item.node.quantity + 1, 10), id: item.node.id }]
        }
      })
    },
    handleLessClick: ({ checkoutLineItemsUpdate, checkoutId }) => async item => {
      await checkoutLineItemsUpdate({
        variables: {
          checkoutId: checkoutId,
          lineItems: [{ quantity: parseInt(item.node.quantity - 1, 10), id: item.node.id }]
        }
      })
    }
  })
)(Cart)
