import PropTypes from 'prop-types'

const ProductTeaser = ({ product }) =>
  <div>
    {JSON.stringify(product)}
  </div>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

// Header.defaultProps = {
//  product: {}
// }

export default ProductTeaser
