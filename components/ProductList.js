import PropTypes from 'prop-types'

const ProductList = ({ products }) =>
  <div>{JSON.stringify(products)}</div>

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList
