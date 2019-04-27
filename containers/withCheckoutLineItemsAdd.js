/*
  Mutation query HoC that creates a new checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CheckoutFragment from './inc/CheckoutFragment'

export const checkoutLineItemsAdd = gql`
  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
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

export default graphql(checkoutLineItemsAdd, {
  name: 'checkoutLineItemsAdd',
  alias: 'withCheckoutLineItemsAdd'
})
