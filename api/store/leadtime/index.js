const { createClient } = require('@particular./shopify-request');

const shopify = new createClient({
  store_name: 'vela-bikes-store',
  client_key: process.env.SHOPIFY_API_KEY,
  client_pass: process.env.SHOPIFY_API_PASS
})

const variantUri = Buffer.from("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDAyMjk2MzMzMTEyNw==", 'base64').toString('ascii')
const variantId = variantUri.split('/').pop()

module.exports = async (req, res) => {
  const { variant } = await shopify.get(`/admin/variants/${variantId}.json`)
  const variantInventory = variant.inventory_quantity
  const leadTime = variantInventory > 0 ? 0 : 21
  res.end(JSON.stringify(variantInventory))
}
