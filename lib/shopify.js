import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    uri: 'https://vela-bikes-store.myshopify.com/api/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      'X-Shopify-Storefront-Access-Token': '952655b7618da7c0ea8472837ccc5076'
    }
  })
))
