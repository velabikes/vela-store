import PropTypes from "prop-types";
import Price from "components/Price";
import InstallmentPrice from "components/store/InstallmentPrice";

/* eslint-disable */
const CartPrice = ({ checkout }) => (
  <div className="CartPrice">
    {console.log(checkout)}
    <table>
      <tbody>
        <tr className="total">
          <td>
            <label>Total:</label>
          </td>
          <td className="price-container">
            <Price value={checkout.totalPrice} />
          </td>
        </tr>
      </tbody>
      <tr>
        <td></td>
        <td className="installment">
          <InstallmentPrice count={12} value={checkout.totalPrice} />
        </td>
      </tr>
    </table>
    <style jsx>{`
      td:last-child {
        text-align: left;
      }
      tr.total td {
        font-size: 1.25em;
        font-weight: 500;
      }
      .installment {
        text-align: right !important;
        display: flex;
        justify-content: flex-end;
      }
      .price-container {
        text-align: right !important;
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </div>
);
/* eslint-enable */

CartPrice.propTypes = {
  checkout: PropTypes.object,
};

export default CartPrice;
