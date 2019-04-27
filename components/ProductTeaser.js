import PropTypes from 'prop-types'
import Link from '../components/Link'

const ProductTeaser = ({ product }) =>
  <div>
    <img src={product.images[0].src} />
    <h2>
      <Link href={'/store/product?handle=' + product.handle}>{product.title}</Link>
    </h2>
    <div>{product.price}</div>
    {/* JSON.stringify(product) */}
  </div>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

// Header.defaultProps = {
//  product: {}
// }

export default ProductTeaser
