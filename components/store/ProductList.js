import PropTypes from 'prop-types'
import ProductTeaser from './ProductTeaser'
import Grid from 'components/Grid'

const ProductListLoading = () =>
  <>
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
  </>

const ProductList = ({ products, loading }) =>
  <Grid className='ProductList' template={ !loading && products && products.edges.length === 2 ? '1fr 1fr' : '1fr 1fr 1fr 1fr'} >
    { loading && <ProductListLoading /> }
    { !loading && products && products.edges && products.edges.map(product => <ProductTeaser product={product.node} key={product.node.id} />) }
  </Grid>

ProductList.propTypes = {
  products: PropTypes.object,
  loading: PropTypes.bool
}

export default ProductList
