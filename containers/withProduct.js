import { graphql } from "react-apollo";
import gql from "graphql-tag";

const product = gql`
  query productQuery($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      descriptionHtml
      options {
        id
        name
        values
      }
      images(first: 40) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 250) {
        edges {
          node {
            id
            availableForSale
            priceV2 {
              amount
            }
            compareAtPriceV2 {
              amount
            }
            selectedOptions {
              name
              value
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export default (handleFn) =>
  graphql(product, {
    alias: "withProduct",

    options(props) {
      return {
        variables: {
          handle: handleFn(props),
        },
      };
    },

    props: ({ data }) => ({
      product: data.productByHandle || {},
      isProductLoading: data.loading,
      productError: data.error,
    }),
  });
