import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import Price from "components/Price";
import InstallmentPrice from "components/store/InstallmentPrice";
import { velaRed, offBlack } from "style/colors";
import { darkGray } from "../../style/colors";

const ProductPrice = ({ baseValue, maxValue, compareAt, showInstallment }) => (
  <div className="ProductPrice">
    {compareAt && (
      <span className="compare">
        <Price value={compareAt} />
      </span>
    )}
    <br />
    <span className="min">
      <Price value={baseValue} />
    </span>
    {maxValue && (
      <span className="max">
        {" - "} <Price value={maxValue} />
      </span>
    )}
    {showInstallment && (
      <div className="installment">
        <small>
          <InstallmentPrice count={12} value={baseValue} />
        </small>
      </div>
    )}
    <style jsx>{`
      .ProductPrice {
        color: ${darkGray};
      }
      .compare {
        text-decoration: line-through;
        margin-right: 0.5em;
      }
      .min,
      .max {
        color: ${compareAt ? velaRed : "inherit"};
        font-weight: 400;
      }
      .installment {
        text-align: left;
        font-size: 1em;
      }
    `}</style>
  </div>
);

ProductPrice.propTypes = {
  baseValue: PropTypes.number,
  maxValue: PropTypes.number,
  compareAt: PropTypes.bool,
  showInstallment: PropTypes.bool,
};

export default compose(
  withProps(({ product, variant }) => {
    const prices =
      product.variants &&
      product.variants.edges.map(
        ({
          node: {
            priceV2: { amount },
          },
        }) => amount
      );
    const comparePrices = product.variants?.edges
      .map(
        ({ node: { compareAtPriceV2 } }) =>
          compareAtPriceV2 && compareAtPriceV2.amount
      )
      .filter(Boolean);
    const minPrice = Math.min.apply(null, prices);
    const maxPrice = Math.max.apply(null, prices);
    const minCompare =
      !!comparePrices?.length && Math.min.apply(null, comparePrices);
    const selectedPrice = variant && variant.node.priceV2.amount;
    const selectedCompare =
      variant &&
      variant.node.compareAtPriceV2 &&
      variant.node.compareAtPriceV2.amount;

    return {
      baseValue: selectedPrice || minPrice,
      maxValue: minPrice !== maxPrice && !selectedPrice && maxPrice,
      compareAt: selectedCompare || minCompare,
    };
  })
)(ProductPrice);
