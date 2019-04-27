import { compose, withProps } from 'recompose'
import { withRouter } from 'next/router'
import Page from '../../components/Page'
import ProductInfo from '../../components/ProductInfo'
import withShopify from '../../lib/shopify'
import withProduct from '../../containers/withProduct'

const ProductPage = ({ loading, product, router }) =>
  <Page>
    { loading ? 'carregando...' : <ProductInfo product={product} /> }
  </Page>

export default compose(
  withShopify,
  withRouter,
  withProps(({ router }) => ({ handle: router.query.handle })),
  withProduct
)(ProductPage)
