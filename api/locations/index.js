const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY
  })

  const placeIdArray = [
    'ChIJq6obEqBXzpQROBi2WivMFh8',
    'ChIJzZtKMWg7WpMRrWtOjWWtH2M',
    'ChIJb00g-rHVmwARzTLLKX3i-lU',
    'ChIJC94Ll0vl3JQRwtMIVjOnAf8'
  ]

  const fetchPlace = placeid =>
    new Promise((resolve, reject) =>
      googleMapsClient.place({ placeid, language: 'pt-BR' }, (err, result) => {
        if (!err) return resolve(result.json.result)
      })
    )

  const placeArray = await Promise.all(placeIdArray.map(fetchPlace))
  res.setHeader('Content-Type', 'application/json')

  return res.end(JSON.stringify({ stores: placeArray }))
}
