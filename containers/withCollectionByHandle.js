import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const collectionByHandle = gql`
query collectionByHandleQuery($handle: String!) {
  shop {
    collectionByHandle(handle: $handle) {
      title
      products(first: 32) {
        edges {
          node {
            id
            title
            handle
            images(first: 1, maxWidth: 800) {
              edges {
                node {
                  src
                }
              }
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  priceV2 {
                    amount
                  }
                  compareAtPriceV2 {
                    amount
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const filter = collection => {
  const filteredEdges = collection.products.edges.filter(product => product.node.variants.edges[0].node.availableForSale)

  return Object.assign({}, collection, { products: { edges: filteredEdges } })
}

export default (handle, { filterUnavailable }) => graphql(collectionByHandle, {
  alias: 'withCollectionByHandle',

  props: ({ data: { shop }, loading }) => {
    const collection = !shop ? {}
      : filterUnavailable
        ? filter(shop.collectionByHandle)
        : shop.collectionByHandle

    return {
      collection: collection,
      isCollectionLoading: loading
    }
  },

  options (props) {
    return {
      variables: {
        handle: handle instanceof Function ? handle(props) : handle
      }
    }
  }
})
