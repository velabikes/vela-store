import { graphql } from "react-apollo";
import gql from "graphql-tag";

const productList = gql`
  {
    shop {
      collectionByHandle(handle: "frontpage") {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              images(first: 1, maxWidth: 800) {
                edges {
                  node {
                    src
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const normalizeImage = ({ node: { src } }) => ({ src });

const normalizeProduct = ({ node: { images, variants, ...node } }) => ({
  ...node,
  price: variants.edges[0].node.price,
  variants: variants.edges,
  images: images.edges.map(normalizeImage),
});

const normalizeProps = ({
  data: {
    loading,
    shop: {
      collectionByHandle: { products },
    },
  },
}) => ({
  loading,
  products: products.edges.map(normalizeProduct),
});

export default graphql(productList, {
  alias: "withProductList",
  props: (props) => (props.data.shop ? normalizeProps(props) : props),
});
