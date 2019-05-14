import Price from '../components/Price'
import { lightGray } from '../style/colors'

const CartPrice = ({ checkout }) =>
  <div className='CartPrice'>
    <table>
      <tbody>
        { checkout.availableShippingRates && checkout.availableShippingRates.shippingRates && checkout.availableShippingRates.shippingRates.length && <tr>
          <td>Envio para <small>{checkout.shippingAddress.zip}</small>:</td>
          <td>
            <Price value={checkout.availableShippingRates.shippingRates[0].priceV2.amount} />
          </td>
        </tr>}
        <tr>
          <td>Impostos (?):</td>
          <td><Price value={checkout.totalTax} /></td>
        </tr>
        <tr>
          <td>Total:</td>
          <td><Price value={checkout.totalPrice} /></td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      td:last-child {
        text-align: right;
      }
      tr:last-child td {
        font-size: 1.25em;
      }
    `}</style>
  </div>

export default CartPrice
