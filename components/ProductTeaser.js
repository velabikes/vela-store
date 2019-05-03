import PropTypes from 'prop-types'
import Link from 'next/link'

const ProductTeaser = ({ product }) =>
  <Link href={'/store/product?handle=' + product.handle}><a>
    <img src={product.images[0].src} />
    <h2>
      {product.title}
    </h2>
    <div>{product.price}</div>
  </a></Link>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

// Header.defaultProps = {
//  product: {}
// }

export default ProductTeaser
