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
      googlePlace: 'ChIJY1lrO13l3JQRfw9lIVJSCU8',
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
    },
    {
      googlePlace: 'ChIJc7C0To9ZzpQRxI8xZGKRSRM',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJM6Ei0whXzpQR2CeApInducA',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJDdNzek5XzpQRcaNlJ3QxKoY',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJAQCU4gNazpQRgrm7yhcWeKU',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ8zgq6hrVmwARf6ihPDuvaac',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJcw9c6shXzpQRHtUh-HBq6-M',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJdXKRuZn4zpQRgF9owALNIQw',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJoxBMMO3j3JQRSjOnxx6TOLg',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ_elqH0FXzpQRRoAPxQyLNvs',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJbxoCUgrk3JQRRmffu3l-VCo',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJHd72H1jh3JQRTBA9mMMznpg',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJNcnhu33k3JQRhmvMJll-Of4',
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ340zClZ4GZURu2Yy8ZXSSl4',
      type: ['service']
    },
    {
      googlePlace: 'ChIJ8Z2NTyhRzpQRSkxnqdw8UjQ',
      type: ['service']
    },
    {
      googlePlace: 'ChIJiQg_EPkXuAARDOheZGROQDY',
      type: ['service']
    },
    {
      googlePlace: 'ChIJ_fqvTp06WpMR1dgVjHcw6Js',
      type: ['service']
    },
    {
      googlePlace: 'ChIJk6zVqYYDzpQRsZpUOCLGA8s',
      type: ['service', 'charger']
    },
    {
      googlePlace: 'ChIJWz5XtfAYqwcRPowRixw4slA',
      type: ['service']
    },
    {
      googlePlace: 'ChIJgc6RhsabpgARbQ40-IY0OK8',
      type: ['service']
    },
    {
      googlePlace: 'ChIJ-21CUWYyWpMRY86ecoW0fuA',
      type: ['service']
    },
    {
      googlePlace: 'ChIJKcPVzHI7WpMRaU9RkzCJHTY',
      type: ['service']
    },
    {
      googlePlace: 'ChIJKcPVzHI7WpMRaU9RkzCJHTY',
      type: ['service']
    },
    {
      googlePlace: 'ChIJcVxJBsxZzpQRFMJ_Q7lID8w',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJ40wX2AFazpQRwDbHK9M_DdI',
      type: ['parking']
    },
    {
      googlePlace: 'EktBbGFtZWRhIENhbXBpbmFzLCA0NDUgLSBKYXJkaW0gUGF1bGlzdGEsIFPDo28gUGF1bG8gLSBTUCwgMDE0MDQtMTAwLCBCcmF6aWwiMRIvChQKEgn3URm5x1nOlBHTNM9i0wEJ6BC9AyoUChIJJfBwmsZZzpQRNLtDV3SchRM',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJTQw8QQtXzpQRqC3spwDZMOI',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJyQilm8tQzpQRt2fiotym1BA',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJ7Vo9d0tYzpQRYEXmgBCMtic',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJ3Sy3J7pXzpQR7l-ZefxvsmY',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJeTz9-VBXzpQRKiyUmAofCoc',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJhXdZkkVYzpQRiLOGttP33AI',
      type: ['parking']
    },
    {
      googlePlace: 'ChIJb5SfPHpXzpQRNSE_pMCnJM4',
      type: ['parking']
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
