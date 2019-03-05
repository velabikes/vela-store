/*
  Query to get Checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CheckoutFragment from './inc/CheckoutFragment'

const checkout = gql`
  query checkoutQuery($id: ID!) {
    node(id:$id) {
      id
      ... on Checkout{
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`

export default graphql(checkout, {

  alias: 'withCheckout',

  options (props) {
    return {
      variables: {
        id: props.checkoutId
      }
    }
  },

  props ({ data: { node } }) {
    return { checkout: node }
  }
})
