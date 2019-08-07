import PropTypes from 'prop-types'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { compose } from 'recompose'
import ProductList from '../components/store/ProductList'
import PaddedView from '../components/PaddedView'
import withCollectionByHandle from '../containers/withCollectionByHandle'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'

const Store = ({
  collection,
  isCollectionLoading
}) =>
  <PaddedView>
    <Main>
      <Head>
        <title>{collection && collection.title} - Vela Bikes</title>
      </Head>
      <img src={collection.image.transformedSrc} />
      <MainHeader
         title={collection && collection.title}
         tagline={<div dangerouslySetInnerHTML={{__html: collection.descriptionHtml}} />}
      />
      <ProductList products={collection && collection.products} loading={isCollectionLoading} />
    </Main>
  </PaddedView>

export default compose(
  withRouter,
  withCollectionByHandle(({ router }) => router.query.handle || 'acessorios', { filterUnavailable: true })
)(Store)

Store.propTypes = {
  collection: PropTypes.object,
  isCollectionLoading: PropTypes.bool
}
