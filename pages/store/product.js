import { compose } from 'recompose'
import { withRouter } from 'next/router'
import ProductInfo from '../../components/ProductInfo'
import withProduct from '../../containers/withProduct'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'

const ProductPage = ({ isProductLoading, product, ...props }) =>
  isProductLoading ? 'carregando...' : <ProductInfo product={product} />

export default compose(
  withRouter,
  withCheckoutLineItemsAdd,
  withProduct(({ router }) => router.query.handle)
)(ProductPage)
