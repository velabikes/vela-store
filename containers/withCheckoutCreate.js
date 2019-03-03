/*
  Mutation query HoC that creates a new checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CheckoutFragment from './inc/CheckoutFragment'

export const checkoutCreate = gql`
  mutation checkoutCreate ($input: CheckoutCreateInput!){
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`

export default graphql(checkoutCreate, {name: 'checkoutCreate', alias: 'withCheckoutCreate'})