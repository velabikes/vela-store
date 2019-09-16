import { compose } from 'recompose'
import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import Main from 'components/Main'
import ProductInfo from '../../components/store/ProductInfo'
import withProduct from '../../containers/withProduct'
import PaddedView from '../../components/PaddedView'

const ProductPage = ({
  product,
  isProductLoading
}) =>
  <PaddedView>
    <Head>
      <title>{product.title} - Vela Bikes</title>
    </Head>
    <Main>
      { !isProductLoading && <ProductInfo product={product} /> }
    </Main>
  </PaddedView>

ProductPage.propTypes = {
  product: PropTypes.object,
  isProductLoading: PropTypes.bool
}

export default compose(
  withRouter,
  withProduct(({ router }) => router.query.handle)
)(ProductPage)
