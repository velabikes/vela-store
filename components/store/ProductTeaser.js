import PropTypes from "prop-types";
import Link from "next/link";
import ProductPrice from "components/store/ProductPrice";
import ProductImage from "./ProductImage";

const ProductTeaser = ({ product }) => (
  <div className="ProductTeaser">
    <Link
      href={"/store/product?handle=" + product.handle}
      as={"/loja/produto/" + product.handle}
    >
      <a>
        <ProductImage
          src={product.images && product.images.edges[0].node.src}
        />
        {!product.variants.edges[0].node.availableForSale && (
          <img src="/product/images/vendida.png" className="sold" />
        )}
        <h3>{product.title}</h3>
        <ProductPrice
          product={product}
          variant={
            product.variants.edges.length === 1 && product.variants.edges[0]
          }
        />
      </a>
    </Link>
    <style jsx>{`
      h3 {
        color: #173d2e;
        margin: 0.5rem 0 0;
        font-size: 1.25rem;
      }
      .sold {
        margin-top: -100%;
        z-index: 1;
        position: relative;
        top: -15px;
      }
    `}</style>
  </div>
);

ProductTeaser.propTypes = {
  product: PropTypes.object,
};

export default ProductTeaser;
