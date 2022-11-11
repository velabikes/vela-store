import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import Price from "components/Price";

const InstallmentPrice = ({ count, installmentValue }) => (
  <span>
    em {count}x de <Price value={installmentValue} /> sem juros.
  </span>
);

InstallmentPrice.propTypes = {
  count: PropTypes.number,
  installmentValue: PropTypes.number,
};

export default compose(
  withProps(({ count, value }) => ({ installmentValue: value / count }))
)(InstallmentPrice);
