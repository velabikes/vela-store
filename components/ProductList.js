import PropTypes from 'prop-types'
import { compose } from 'recompose'
import ProductTeaser from '../components/ProductTeaser'
import withProductList from '../containers/withProductList'

const ProductList = ({ products, loading }) =>
  <div>
    { !products && <h1>Loading</h1>}
    { products && products.map(product => <ProductTeaser product={product} key={product.id} />) }
    <style jsx>{`
      div {
        //display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50vh 50vh 50vh;
      }
    `}</style>
  </div>

ProductList.propTypes = {
  products: PropTypes.array
}

export default compose(
  withProductList
)(ProductList)
