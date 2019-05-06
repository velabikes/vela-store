import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const product = gql`
query productQuery($handle: String!) {
  shop {
    productByHandle(handle: $handle) {
      id
      title
      handle
      descriptionHtml
      images(first: 5, maxWidth: 600) {
        edges {
          node {
            src
          }
        }
      }
      variants(first: 1) {
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
`

export default handleFn => graphql(product, {
  alias: 'withProduct',

  options (props) {
    return {
      variables: {
        handle: handleFn(props)
      }
    }
  },

  props: ({ data }) =>
    ({
      product: data.shop ? data.shop.productByHandle : {},
      isProductLoading: data.loading
    })
})
