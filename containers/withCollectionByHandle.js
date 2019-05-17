import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const collectionByHandle = gql`
query collectionByHandleQuery($handle: String!) {
  shop {
    collectionByHandle(handle: $handle) {
      title
      products(first: 20) {
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
                  price
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

export default handle => graphql(collectionByHandle, {
  alias: 'withCollectionByHandle',

  props: ({ data: { shop }, loading }) => ({
    collection: shop ? shop.collectionByHandle : {},
    isCollectionLoading: loading
  }),

  options (props) {
    return {
      variables: {
        handle: handle instanceof Function ? handle(props) : handle
      }
    }
  }
})
