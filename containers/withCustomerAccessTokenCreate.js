import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const customerAccessTokenCreate = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`

export default graphql(customerAccessTokenCreate, { name: 'customerAccessTokenCreate', alias: 'withcustomerAccessTokenCreate' })
