import Price from '../components/Price'
import { lightGray } from '../style/colors'

const CartPrice = ({ checkout }) =>
  <div className='CartPrice'>
    <table>
      <tbody>
        <tr>
          <td>Envio:</td>
          <td><Price value={checkout && checkout.availableShippingRates && checkout.availableShippingRates.shippingRates && checkout.availableShippingRates.shippingRates[0].ammout} /></td>
        </tr>
        <tr>
          <td>Total:</td>
          <td><Price value={checkout && checkout.totalPrice} /></td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      td {
        padding: 0.61rem 0;
      }
      td:last-child {
        text-align: right;
      }
      tr:last-child td {
        font-size: 1.25em;
        border-top: 1px solid ${lightGray};
      }
    `}</style>
  </div>

export default CartPrice
