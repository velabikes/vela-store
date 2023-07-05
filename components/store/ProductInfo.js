import PropTypes from "prop-types";
import { compose, withState, withProps } from "recompose";
import ProductPrice from "components/store/ProductPrice";
import { HideOnDesktop, HideOnMobile } from "../HideOn";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm";
import { offBlack } from "../../style/colors";

const ProductVariantImage = ({ variant }) => (
  <ProductImage src={variant.node && variant.node.image.src} />
);

ProductVariantImage.propTypes = {
  variant: PropTypes.object,
};

const ProductImageGallery = ({ product }) => (
  <div className="ProductImageGallery">
    {product.images &&
      product.images.edges.map(
        (image, i) =>
          !product.variants.edges.find(
            (variant) => image.node.url === variant.node.image.src
          ) && <ProductImage src={image.node.url} key={i} />
      )}
    <style jsx>{`
      .ProductImageGallery :global(.ProductImage) {
        margin-bottom: 2em;
      }
    `}</style>
  </div>
);

ProductImageGallery.propTypes = {
  product: PropTypes.object,
};

const ProductInfo = ({
  product,
  setAvailableVariants,
  availableVariants,
  selectedVariant,
}) => {
  const isSelected = !!selectedVariant;
  const isAvailable = selectedVariant?.node?.availableForSale;
  return (
    <div className="ProductInfo">
      <div>
        {product.variants && (
          <>
            <ProductVariantImage
              variant={
                availableVariants
                  ? availableVariants.edges[0]
                  : product.variants.edges[0]
              }
            />
            {isSelected && !isAvailable && (
              <img src="/images/vendida.png" className="sold" />
            )}
          </>
        )}
        <HideOnMobile>
          <ProductImageGallery product={product} />
        </HideOnMobile>
      </div>
      <div>
        <h1>{product.title}</h1>
        <div className="price">
          <ProductPrice
            product={product}
            variant={selectedVariant}
            showInstallment
          />
        </div>
        <hr />
        <ProductForm
          product={product}
          selectedVariant={availableVariants}
          sVariant={selectedVariant}
          availableVariants={availableVariants}
          onVariantSelect={setAvailableVariants}
        />
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <br />
        <HideOnDesktop>
          <ProductImageGallery product={product} />
        </HideOnDesktop>
      </div>
      <style jsx>{`
        .price {
          font-size: 1.3em;
        }
        .sold {
          margin-top: -100%;
          position: relative;
          z-index: 1;
          top: -28px;
        }
        h1 {
          color: ${offBlack};
        }
        h3 {
          color: ${offBlack};
        }

        @media only screen and (min-width: 768px) {
          .ProductInfo {
            display: flex;
          }
          .ProductInfo > div {
            flex: 1;
          }
          .ProductInfo > div:first-child {
            flex: 1.61;
            padding-right: 2em;
          }
          .ProductInfo :global(.ProductImage) {
            margin: 1em auto;
          }
        }
      `}</style>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
  setAvailableVariants: PropTypes.any,
  availableVariants: PropTypes.any,
  selectedVariant: PropTypes.any,
};

export default compose(
  withState(
    "availableVariants",
    "setAvailableVariants",
    ({ product }) => product.variants
  ),
  withProps(({ product, availableVariants }) => ({
    selectedVariant:
      product.variants && product.variants.edges.length === 1
        ? product.variants.edges[0]
        : availableVariants &&
          availableVariants.edges.length === 1 &&
          availableVariants.edges[0],
  }))
)(ProductInfo);
