import gql from 'graphql-tag'

export default gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    completedAt
    ready
    paymentDue
    requiresShipping
    order {
      id
      processedAt
      orderNumber
      subtotalPrice
      totalShippingPrice
      totalTax
      totalPrice
      currencyCode
      totalRefunded
      customerUrl
    }
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image(maxWidth: 350) {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }
`
