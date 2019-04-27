import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const product = gql`
query productQuery($handle: String!) {
  shop {
    productByHandle(handle: $handle) {
      id
      title
      handle
      descriptionHtml
      images(first: 1, maxWidth: 600) {
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
            price
          }
        }
      }
    }
  }
}
`
// const normalizeImage = ({ node: { src } }) => ({ src })

// const normalizeProduct = ({
//   node: {
//     images,
//     variants,
//     ...node
//   }
// }) => ({
//   ...node,
//   price: variants.edges[0].node.price,
//   variants: variants.edges,
//   images: images.edges.map(normalizeImage)
// })

// const normalizeProps = ({
//   data: {
//     loading,
//     shop: { collectionByHandle: { products } }
//   }
// }) =>
//   ({
//     loading,
//     products: products.edges.map(normalizeProduct)
//  })

export default graphql(product, {
  alias: 'withProduct',

  options (props) {
    return {
      variables: {
        handle: props.handle
      }
    }
  },

  // props: ({data: {shop: { productByHandle }}}) => ({product: productByHandle})
  props: ({ data }) =>
    ({ product: data.shop ? data.shop.productByHandle : {}, loading: data.loading })

})
