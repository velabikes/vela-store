/*
  Mutation query HoC that updates a checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CheckoutFragment from './inc/CheckoutFragment'

export const checkoutLineItemsUpdate = gql`
  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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

export default graphql(checkoutLineItemsUpdate, {
  name: 'checkoutLineItemsUpdate',
  alias: 'withCheckoutLineItemsUpdate'
})
