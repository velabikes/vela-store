import { URL } from 'url'
import { createClient } from '@particular./shopify-request'

const shopify = new createClient({ // eslint-disable-line
  store_name: 'vela-bikes-store',
  client_key: process.env.SHOPIFY_API_KEY,
  client_pass: process.env.SHOPIFY_API_PASS
})

module.exports = async (req, res) => {
  const { searchParams } = new URL(req.url, 'https://velabikes.com.br')
  const variantBase = searchParams.get('variantId')
  const variantUri = Buffer.from(variantBase, 'base64').toString('ascii')
  const variantId = variantUri.split('/').pop()
  const { variant } = await shopify.get(`/admin/variants/${variantId}.json`)

  if (variant.inventory_management === null) {
    res.end(JSON.stringify(0))
  }

  const variantInventory = variant.inventory_quantity
  const leadTime = variantInventory > 0 ? 0 : 13
  res.end(JSON.stringify(leadTime))
}
