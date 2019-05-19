import PropTypes from 'prop-types'
import ProductTeaser from './ProductTeaser'

const ProductListLoading = () =>
  <>
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
  </>

const ProductList = ({ products, loading }) =>
  <div className='ProductList'>
    { !products && loading && <ProductListLoading /> }
    { products && products.edges.map(product => <ProductTeaser product={product.node} key={product.node.id} />) }
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
  products: PropTypes.object,
  loading: PropTypes.bool
}

export default ProductList
