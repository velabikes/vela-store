import gql from "graphql-tag";

export default gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    createdAt
    completedAt
    ready
    paymentDue
    requiresShipping
    shippingAddress {
      address1
      address2
      city
      provinceCode
      zip
    }
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
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              url
            }
            price
          }
          quantity
        }
      }
    }
  }
`;
