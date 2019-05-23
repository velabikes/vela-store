import { compose } from 'recompose'
import Head from 'next/head'
import { withRouter } from 'next/router'
import ProductInfo from '../../components/store/ProductInfo'
import withProduct from '../../containers/withProduct'
import PaddedView from '../../components/PaddedView'

const ProductPage = ({
  product
}) =>
  <PaddedView>
    <Head>
      <title>{product.title} - Vela Bikes</title>
    </Head>
    <ProductInfo product={product} />
  </PaddedView>

export default compose(
  withRouter,
  withProduct(({ router }) => router.query.handle)
)(ProductPage)
