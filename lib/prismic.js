import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { PrismicLink } from 'apollo-link-prismic'

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    link: PrismicLink({ uri: 'https://velabikes.prismic.io/graphql' }),
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      'X-Shopify-Storefront-Access-Token': '952655b7618da7c0ea8472837ccc5076'
    }
  })
))
