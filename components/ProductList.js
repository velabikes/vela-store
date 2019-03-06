import PropTypes from 'prop-types'
import ProductTeaser from '../components/ProductTeaser'

const ProductList = ({ products }) =>
  products.map(product => <ProductTeaser product={product} />)

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList
