import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Page from '../components/Page'
import ProductList from '../components/ProductList'
import PaddedView from '../components/PaddedView'
import withProductList from '../containers/withProductList'
import withShopify from '../lib/shopify'
import Cart from '../components/Cart'

const Store = ({ products, loading }) =>
  <Page>
    <PaddedView>
      <Cart />
      <div>{ loading ? <div>'carregando...'</div> : products && <ProductList products={products} /> }</div>
    </PaddedView>
  </Page>

Store.propTypes = {
  products: PropTypes.array
}

export default compose(
  withShopify,
  withProductList
)(Store)
