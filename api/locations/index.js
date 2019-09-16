const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY
  })

  const locations = [
    {
      googlePlace: 'ChIJL-xzGGFXzpQR_X4Kin8W9lQ',
      type: ['store', 'charger']
    },
    {
      googlePlace: 'ChIJazzL3K5ZzpQRD9IIOo6VVGo',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJM0wFcdxXzpQRo_-Wyy4K_qE',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ1aPPuV5ZzpQR4BIHucm4vGQ',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJbSxi-w9XzpQRxor0_L36Djs',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ-0Zi6PxZzpQR-b6maQjQjSA',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJe45oNJZXzpQRUXYN4bE42h8',
      type: ['charger']
    }, {
      googlePlace: 'ChIJpydZ5j5YzpQR1V_gNLyvHV4',
      type: ['charger']
    }, {
      googlePlace: 'ChIJlVqH9KVXzpQRgkyOBRW-Peo',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJeeiz-HFXzpQRGTOx8QZbpoQ',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJy9BBJORWzpQReEuaiOtk0kU',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ47W0GDdYzpQRGw-IqYoHn3k',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJixk9BXZXzpQRY2FAH25PxPU',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ7-_Fxl1XzpQRDHUgRm86x9A',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJF5K6jT5XzpQRrLPe9Tvg9os',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJyUY7cy9XzpQRHUOkTVXkURY',
      type: ['charger']
    }
  ]

  const fetchLocationData = location =>
    new Promise((resolve, reject) =>
      googleMapsClient.place({ placeid: location.googlePlace, language: 'pt-BR' }, (err, result) => {
        if (!err) {
          return resolve({
            ...normalizePlace(result.json.result),
            ...location
          })
        }

        return reject(err)
      })
    )

  const normalizeAddress = address => address.split(' - ')

  const normalizeOpeningText = day => day.split(/:(.+)/).filter((_, i) => i !== 2)

  /* eslint-disable camelcase */
  const normalizePlace = ({ name, formatted_address, formatted_phone_number, opening_hours, geometry }) => ({
    name: name,
    address: normalizeAddress(formatted_address),
    phone: formatted_phone_number,
    open: opening_hours && opening_hours.open_now,
    hours: opening_hours && opening_hours.weekday_text.map(normalizeOpeningText),
    pos: geometry.location
  })
  /* eslint-enable camelcase */

  try {
    const placeArray = await Promise.all(locations.map(fetchLocationData))
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 's-maxage=86400')

    return res.end(JSON.stringify(placeArray))
  } catch (err) {
    res.statusCode = 500

    return res.end()
  }
}
