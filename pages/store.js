import PropTypes from 'prop-types'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { compose } from 'recompose'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import ProductList from '../components/store/ProductList'
import PaddedView from '../components/PaddedView'
import withCollectionByHandle from '../containers/withCollectionByHandle'

const Store = ({
  collection,
  isCollectionLoading
}) =>
  <PaddedView>
    <Main>
      <Head>
        <title>{collection && collection.title} - Vela Bikes</title>
      </Head>
      <div className="title">
      <MainHeader
        title={collection && collection.title}
      />
      <h2>{collection && collection.descriptionHtml}</h2>
      {collection.title === "Acessórios" && <p><a href="/loja/pecas" target="_blank">Ver peças</a></p>}
      </div>
      <br />
      <ProductList products={collection && collection.products} loading={isCollectionLoading} />
    </Main>
    <style jsx>{`
      .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .title p {
        margin-top: 0.8em;
      }
    `}
    </style> 
  </PaddedView>

export default compose(
  withRouter,
  withCollectionByHandle(({ router }) => router.query.handle || 'acessorios', { filterUnavailable: true })
)(Store)

Store.propTypes = {
  collection: PropTypes.object,
  isCollectionLoading: PropTypes.bool
}
