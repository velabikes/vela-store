export default (req, res) => {
  const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_SERVER_KEY
  })

  googleMapsClient.findPlace({ input: 'Vela Bikes', inputtype: 'textquery' }, (err, response) => {
    if (!err) return res.end(JSON.stringify(response))
    return res.end(JSON.stringify(err))
  })
}
