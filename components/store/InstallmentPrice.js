import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import Price from "components/Price";

const InstallmentPrice = ({ count, installmentValue }) => (
  <span>
    ou {count}x de <Price value={installmentValue} /> sem juros.
  </span>
);

InstallmentPrice.propTypes = {
  count: PropTypes.string,
  installmentValue: PropTypes.string,
};

export default compose(
  withProps(({ count, value }) => ({ installmentValue: value / count }))
)(InstallmentPrice);
