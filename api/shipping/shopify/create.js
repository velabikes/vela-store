const Shopify = require('shopify-api-node')

const shopify = Shopify({
  shopName: 'vela-bikes-store',
  apiKey: '',
  password: ''
})

// shopify.carrierService.create({
//   name: 'Test Shipping',
//   callback_url: 'https://velabikes.com.br/api/shipping/shopify',
//   service_discovery: true
// })
//   .then(
//     carrier => console.log('Service installed')
//   )
//   .catch(
//     err => console.error(err)
//   )

shopify.carrierService.list().then(console.log)

//shopify.carrierService.delete('15945662519').then(console.log)
