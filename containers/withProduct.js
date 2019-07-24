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
      options {
        id
        name
        values
      }
      images(first: 40, maxWidth: 1600) {
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
            selectedOptions {
              name
              value
            }
            image(maxWidth: 1600) {
              src
            }
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
