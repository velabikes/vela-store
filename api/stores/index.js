const googleMapsClient = require('@google/maps')

module.exports = (req, res) => {
  const googleMapsClient.createClient({
    key: process.env.GOOGLE_MAPS_SERVER_KEY
  })

  googleMapsClient.findPlace({ input: 'Vela Bikes Sao Paulo', inputtype: 'textquery' }, (err, response) => {
    console.log(response)
    if (!err) return res.end(JSON.stringify(response))
    return res.end(JSON.stringify(err))
  })
}
