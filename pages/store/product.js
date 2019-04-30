import { compose } from 'recompose'
import { withRouter } from 'next/router'
import Page from '../../components/Page'
import ProductInfo from '../../components/ProductInfo'
import withShopify from '../../lib/shopify'
import withProduct from '../../containers/withProduct'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'

const ProductPage = ({ isProductLoading, product, ...props }) =>
  <Page>
    { isProductLoading ? 'carregando...' : <ProductInfo product={product} /> }
  </Page>

export default compose(
  withRouter,
  withCheckoutLineItemsAdd,
  withProduct(({ router }) => router.query.handle)
)(ProductPage)
