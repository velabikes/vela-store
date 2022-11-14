import PropTypes from 'prop-types'
import Grid from 'components/Grid'
import ProductTeaser from './ProductTeaser'

const ProductListLoading = () =>
  <>
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
    <ProductTeaser product={{}} key={1} />
  </>

const ProductList = ({ products, loading }) =>{
  console.log(products)
  return(
    <Grid className='ProductList' template={'repeat(auto-fit, minmax(220px, 1fr))'} >
    { loading && <ProductListLoading /> }
    { !loading && products && products.edges && products.edges.map(product => <ProductTeaser product={product.node} key={product.node.id} />) }
  </Grid>
  )
}

ProductList.propTypes = {
  products: PropTypes.object,
  loading: PropTypes.bool
}

export default ProductList
