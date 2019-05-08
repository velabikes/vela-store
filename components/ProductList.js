import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Loading from '../components/Loading'
import ProductTeaser from '../components/ProductTeaser'
import withProductList from '../containers/withProductList'

const ProductList = ({ products, loading }) =>
  <div>
    { !products && <Loading />}
    { products && products.map(product => <ProductTeaser product={product} key={product.id} />) }
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
      }
    `}</style>
  </div>

ProductList.propTypes = {
  products: PropTypes.array
}

export default compose(
  withProductList
)(ProductList)
