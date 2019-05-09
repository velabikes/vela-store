import { compose } from 'recompose'
import { withRouter } from 'next/router'
import ProductInfo from '../../components/ProductInfo'
import withProduct from '../../containers/withProduct'
import PaddedView from '../../components/PaddedView';

const ProductPage = ({ router }) =>
  <PaddedView>
    <ProductInfo handle={router.query.handle} />
  </PaddedView>

export default compose(
  withRouter
)(ProductPage)
