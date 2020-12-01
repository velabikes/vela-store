import PropTypes from 'prop-types'
import Price from 'components/Price'
import InstallmentPrice from 'components/store/InstallmentPrice'

/* eslint-disable */
const CartPrice = ({ checkout }) =>
  <div className='CartPrice'>
    { console.log(checkout) }
    <table>
      <tbody>
        <tr className='total'>
          <td><label>Total:</label></td>
          <td><Price value={checkout.totalPrice} /></td>
        </tr>
        <tr>
         <td><InstallmentPrice count={12} value={checkout.totalPrice} /></td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      td:last-child {
        text-align: right;
      }
      tr.total td {
        font-size: 1.25em;
        font-weight: 600;
      }
    `}</style>
  </div>
/* eslint-enable */

CartPrice.propTypes = {
  checkout: PropTypes.object
}

export default CartPrice
