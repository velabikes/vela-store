const url = require('url')
const { createClient } = require('@particular./shopify-request');

const shopify = new createClient({
  store_name: 'vela-bikes-store',
  client_key: process.env.SHOPIFY_API_KEY,
  client_pass: process.env.SHOPIFY_API_PASS
})

module.exports = async (req, res) => {
  const { query } = await url.parse(req.url, true)
  const variantUri = Buffer.from(query.variantId, 'base64').toString('ascii')
  const variantId = variantUri.split('/').pop()
  const { variant } = await shopify.get(`/admin/variants/${variantId}.json`)
  if (variant.inventory_management === null) {
    res.end(JSON.stringify(0))
  }
  const variantInventory = variant.inventory_quantity
  const leadTime = variantInventory > 0 ? 0 : 21
  res.end(JSON.stringify(leadTime))
}
