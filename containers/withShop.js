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
    }
  }
`

export default handle => graphql(collectionByHandle, {
  alias: 'withShop',

  props: ({ data: { shop }, loading }) => ({
    shop,
    isShopLoading: loading
  }),

})
