import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { compose } from 'recompose'
import ProductList from '../components/store/ProductList'
import PaddedView from '../components/PaddedView'
import withCollectionByHandle from '../containers/withCollectionByHandle'

const Store = ({
  collection, isCollectionLoading
}) =>
  <PaddedView>
    <h1>{collection && collection.title}</h1>
    <ProductList products={collection && collection.products} loading={isCollectionLoading} />
  </PaddedView>

export default compose(
  withRouter,
  withCollectionByHandle(({ router }) => router.query.handle || 'acessorios')
)(Store)

Store.propTypes = {
  collection: PropTypes.object,
  isCollectionLoading: PropTypes.bool
}
