import { graphql } from "react-apollo";
import gql from "graphql-tag";

const collectionByHandle = gql`
  query collectionByHandleQuery($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      descriptionHtml
      image {
        url
      }
      products(first: 100) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
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
                  priceV2 {
                    amount
                  }
                  compareAtPriceV2 {
                    amount
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
`;

const filter = (collection) => {
  const filteredEdges = collection.products.edges.filter(
    (product) => product.node.variants.edges[0].node.availableForSale
  );

  return Object.assign({}, collection, { products: { edges: filteredEdges } });
};

export default (handle, { filterUnavailable }) =>
  graphql(collectionByHandle, {
    alias: "withCollectionByHandle",

    props: ({ data: { collectionByHandle, loading, error }, loading }) => {
      const collection = !collectionByHandle
        ? {}
        : filterUnavailable
        ? filter(collectionByHandle)
        : collectionByHandle;

      return {
        collection: collection,
        isCollectionLoading: loading,
        collectionError: error,
      };
    },

    options(props) {
      return {
        variables: {
          handle: handle instanceof Function ? handle(props) : handle,
        },
      };
    },
  });
