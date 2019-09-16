import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import Price from 'components/Price'
import withCheckoutId from 'containers/withCheckoutId'
import withCheckoutLineItemsUpdate from 'containers/withCheckoutLineItemsUpdate'
import { velaBlue } from 'style/colors'
import ProductImage from 'components/store/ProductImage'

const CartItem = ({ item, handleMoreClick, handleLessClick }) =>
  <tr key={item.node.title}>
    <td>
      <ProductImage src={item.node.variant && item.node.variant.image.src} alt='' />
      <span>{item.node.quantity}</span>
    </td>
    <td className='quantity'>
      <a onClick={() => handleMoreClick(item)}>+</a>
      <a onClick={() => handleLessClick(item)}>-</a>
    </td>
    <td className='name'>
      <div>{item.node.title}</div>
      <small>{item.node.variant && item.node.variant.title !== 'Default Title' && item.node.variant.title.replace(/\s*\[.*?\]/g, '')}</small>
    </td>
    <td><Price value={item.node.variant && item.node.variant.price} /></td>
    <style jsx>{`
      td:first-child {
        width: 15%;
        padding-left: 0;
        position: relative;
        min-width: 64px;
      }
      td:first-child span {
        position: absolute;
        top: -.7em;
        right: -.7em;
        background: ${velaBlue};
        border-radius: 1em;
        width: 1.8em;
        height: 1.8em;
        line-height: 1.8em;
        text-align: center;
        font-size: .8em;
        font-weight: 600;
        color: white;
      }
      td.name {
        //white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 1rem;
        font-weight: 600;
      }
      td.quantity {
        min-width: 1.5em;
        font-weight: bold;
      }
      td.quantity a {
        display: block;
        text-align: center;
      }
      td:last-child {
        text-align: right;
        padding-right: 0;
      }
    `}</style>
  </tr>

CartItem.propTypes = {
  item: PropTypes.object,
  handleMoreClick: PropTypes.func,
  handleLessClick: PropTypes.func
}

export default compose(
  withCheckoutId,
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
)(CartItem)
