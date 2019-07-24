import { compose, withProps } from 'recompose'
import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import ProductInfo from '../../components/store/ProductInfo'
import withProduct from '../../containers/withProduct'
import PaddedView from '../../components/PaddedView'
import Main from 'components/Main'

const ProductPage = ({
  product
}) =>
  <PaddedView>
    <Head>
      <title>{product.title} - Vela Bikes</title>
    </Head>
    <Main>
      { product.variants && <ProductInfo product={product} /> }
    </Main>
  </PaddedView>

ProductPage.propTypes = {
  product: PropTypes.object
}

export default compose(
  withRouter,
  withProduct(({ router }) => router.query.handle)
)(ProductPage)
