
/*
  Query to get Checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'
import withCustomerAccessToken from './withCustomerAccessToken'

const customer = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      email
      phone
      defaultAddress {
        firstName
        lastName
        address1
        address2
        city
        provinceCode
        zip
        country
      }
      createdAt
      acceptsMarketing
      orders(first: 1, reverse: true) {
        edges {
          node {
            id
            name
            orderNumber
            statusUrl
            totalPrice
            customerUrl
          }
        }
      }
    }
  }
`

export default compose(
  withCustomerAcessToken,
  graphql(customer, {
    alias: 'withCustomerAccessToken',

    options (props) {
      return {
        variables: {
          id: props.customerAccessToken
        }
      }
    },

    props ({ data: { customer } }) {
      return { customer }
    }
  })
)
