import PropTypes from 'prop-types'
import Page from '../components/Page'
import ProductList from '../components/ProductList'
import PaddedView from '../components/PaddedView'
import withProductList from '../containers/withProductList'
import withShopify from '../lib/shopify'

const Store = ({ products }) =>
  <Page>
    <PaddedView>
      <ProductList products={products} />
    </PaddedView>
  </Page>

Store.propTypes = {
  products: PropTypes.object
}

export default withShopify(withProductList(Store))
