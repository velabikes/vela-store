import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://vela-bikes-store.myshopify.com/api/graphql',
    headers: {
      'X-Shopify-Storefront-Access-Token': '952655b7618da7c0ea8472837ccc5076'
    }
  })
}

export default withData(config)
