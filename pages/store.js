import PropTypes from 'prop-types'
import Page from '../components/Page'
import ProductList from '../components/ProductList'
import withProductList from '../containers/withProductList'
import withShopify from '../lib/shopify'

const Store = ({ productList }) =>
  <Page>
     asdfsdfasdf
    {JSON.stringify(productList)}asdf
    <ProductList products={productList} />
  </Page>

Store.propTypes = {
  productList: PropTypes.object
}

export default withShopify(withProductList(Store))
