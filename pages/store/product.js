import { compose } from 'recompose'
import Head from 'next/head'
import { withRouter } from 'next/router'
import ProductInfo from '../../components/store/ProductInfo'
import withProduct from '../../containers/withProduct'
import PaddedView from '../../components/PaddedView'

const ProductPage = ({ router }) =>
  <PaddedView>
    <Head>
      <title>Produto - Vela Bikes</title>
    </Head>
    <ProductInfo handle={router.query.handle} />
  </PaddedView>

export default compose(
  withRouter
)(ProductPage)
