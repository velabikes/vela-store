import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Loading from '../components/Loading'
import ProductTeaser from '../components/ProductTeaser'
import withProductList from '../containers/withProductList'
import Image from '../components/Image'

const ProductListLoading = () =>
  <>
    <ProductTeaser product={{}} />
    <ProductTeaser product={{}} />
    <ProductTeaser product={{}} />
  </>

const ProductList = ({ products, loading }) =>
  <div className='ProductList'>
    { !products && <ProductListLoading />}
    { products && products.map(product => <ProductTeaser product={product} key={product.id} />) }
    <style jsx>{`
      div {
      }
      @media only screen and (min-width: 768px) {
        div {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
        }
      }
      @media only screen and (min-width: 1200px) {
        div {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>

ProductList.propTypes = {
  products: PropTypes.array
}

export default compose(
  withProductList
)(ProductList)
