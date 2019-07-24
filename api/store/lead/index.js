const Shopify = require('./shopify-api-node')

const shopify = new Shopify({
  shopName: 'vela-bikes-store',
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_PASS
})

module.exports = async (req, res) => {
  const inv = await shopify.productVariant.get('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDAyMjk2Mzc1NzExMQ==')
  res.end(JSON.stringify(inv))
}
