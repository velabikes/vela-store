import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const shop = gql`
  query shopQuery {
    shop {
      moneyFormat
      privacyPolicy {
        body
        title
        url
      }
      refundPolicy {
        body
        title
        url
      }
      termsOfService {
        body
        title
        url
      }
    }
  }
`

export default graphql(shop, {
  alias: 'withShop',

  props: ({ data: { shop }, loading }) => ({
    shop,
    isShopLoading: loading
  })

})
