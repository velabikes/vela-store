import gql from "graphql-tag";

export default gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax {
      amount
    }
    subtotalPrice {
      amount
    }
    totalPrice {
      amount
    }
    createdAt
    completedAt
    ready
    paymentDue {
      amount
    }
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
      subtotalPrice {
        amount
      }
      totalShippingPrice {
        amount
      }
      totalTax {
        amount
      }
      totalPrice {
        amount
      }
      currencyCode
      totalRefunded {
        amount
      }
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
            price {
              amount
            }
          }
          quantity
        }
      }
    }
  }
`;
