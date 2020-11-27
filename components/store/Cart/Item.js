import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import Price from 'components/Price'
import withCheckoutId from 'containers/withCheckoutId'
import withCheckoutLineItemsUpdate from 'containers/withCheckoutLineItemsUpdate'
import { velaBlue } from 'style/colors'
import ProductImage from 'components/store/ProductImage'
import { Trash } from '../../Icons'

/* eslint-disable */
const CartItem = ({ item, handleLessClick }) =>
  <table>
    <tr key={item.node.title}>
      <td>
        <ProductImage src={item.node.variant && item.node.variant.image.src} alt='' />
        <span>{item.node.quantity}</span>
      </td>
      <td className='quantity'>
        <a onClick={() => handleLessClick(item)}><Trash /></a>
      </td>
      <td className='name'>
        <div>{item.node.title}</div>
        <small>{item.node.variant && item.node.variant.title !== 'Default Title' && item.node.variant.title.replace(/\s*\[.*?\]/g, '')}</small>
        <div><Price value={item.node.variant && item.node.variant.price} /></div>
      </td>
    </tr>
    <hr />
    <style jsx>{`
    td:first-child {
      width: 20%;
      padding-left: 0;
      position: relative;
      min-width: 86px;
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
      padding-left: 1rem;
      font-weight: 600;
    }
    td.quantity {
      min-width: 1.5em;
      max-width: 1.5em;
      padding-left: 0.5em;
    }
    td.quantity a {
      display: block;
      min-width: 1.5em;
      max-width: 1.5em;
      text-align: center;
    }
    `}</style>
  </table>
/* eslint-enable */

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
