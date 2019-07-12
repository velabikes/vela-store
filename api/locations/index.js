const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY
  })

  const locations = [
    {
      googlePlace: 'ChIJL-xzGGFXzpQR_X4Kin8W9lQ',
      type: 'store'
    }
//    'ChIJzZtKMWg7WpMRrWtOjWWtH2M',
//    'ChIJb00g-rHVmwARzTLLKX3i-lU',
//    'ChIJC94Ll0vl3JQRwtMIVjOnAf8'
  ]

  const fetchLocationData = location =>
    new Promise((resolve, reject) =>
      googleMapsClient.place({ placeid: location.googlePlace, language: 'pt-BR' }, (err, result) => {
        if (!err) return resolve({
          ...normalizePlace(result.json.result),
          ...location
        })
        return reject(err)
      })
    )

  const normalizeOpeningText = day => day.split(/:(.+)/).filter((_,i) => i !== 2)

  const normalizePlace = ({name, formatted_address, formatted_phone_number, opening_hours, geometry}) => ({
    name: name,
    address: formatted_address,
    phone: formatted_phone_number,
    open: opening_hours.open_now,
    hours: opening_hours.weekday_text.map(normalizeOpeningText),
    pos: geometry.location
  })

  try {
    const placeArray = await Promise.all(locations.map(fetchLocationData))
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify(placeArray))
  } catch (err) {
    console.log(err)
    res.statusCode = 500
    return res.end()
  }
}
