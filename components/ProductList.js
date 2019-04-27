import PropTypes from 'prop-types'
import ProductTeaser from '../components/ProductTeaser'

const ProductList = ({ products }) =>
  <div>
    { products.map(product => <ProductTeaser product={product} key={product.id} />) }
    <style jsx>{`
      div {
        //display: grid;
        //grid-template-columns: 1fr 1fr;
        //grid-template-rows: 50vh 50vh;
      }
    `}</style>
  </div>

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList
