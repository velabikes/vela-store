import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import Price from "components/Price";

const InstallmentPrice = ({ count, installmentValue, value }) => {
  const avista = (value * 0.9).toFixed(2);
  return (
    <span>
      em {count}x de <Price value={installmentValue} /> <br></br>
      <br></br>
      <h4>
        <b>
          <Price value={avista} /> à vista.*
        </b>
      </h4>
    </span>
  );
};

InstallmentPrice.propTypes = {
  count: PropTypes.number,
  installmentValue: PropTypes.number,
};

export default compose(
  withProps(({ count, value }) => ({ installmentValue: value / count }))
)(InstallmentPrice);
