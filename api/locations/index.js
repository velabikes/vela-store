const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY
  })

  const locations = [
    {
      googlePlace: 'ChIJazzL3K5ZzpQRD9IIOo6VVGo', // BotaniKafé - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJM0wFcdxXzpQRo_-Wyy4K_qE', // Alva Coworking - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ1aPPuV5ZzpQR4BIHucm4vGQ', // Dopê Casual Food - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJbSxi-w9XzpQRxor0_L36Djs', // Bacio di Latte - Pinheiros/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ-0Zi6PxZzpQR-b6maQjQjSA', // Casa Toffo - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJe45oNJZXzpQRUXYN4bE42h8', // Cupping Café - SP
      type: ['charger']
    }, {
      googlePlace: 'ChIJpydZ5j5YzpQR1V_gNLyvHV4', // ZUD Café - SP
      type: ['charger']
    }, {
      googlePlace: 'ChIJlVqH9KVXzpQRgkyOBRW-Peo', // SP Lovers Café e Vinho - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJy9BBJORWzpQReEuaiOtk0kU', // Torteria - Morumbi/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ47W0GDdYzpQRGw-IqYoHn3k', // Torteria - Higienópolis/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJixk9BXZXzpQRY2FAH25PxPU', // Torteria - Pinheiros/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ7-_Fxl1XzpQRDHUgRm86x9A', // Seu Chalita
      type: ['charger']
    },
    {
      googlePlace: 'ChIJyUY7cy9XzpQRHUOkTVXkURY', // De Lá do Pão - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJc7C0To9ZzpQRxI8xZGKRSRM', // SOW Cake Lounge - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJM6Ei0whXzpQR2CeApInducA', // Saladices - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJn6sjxaVXzpQR6YVQqQ5PgYE', // The Coffee - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJDdNzek5XzpQRcaNlJ3QxKoY', // Cubo Itaú - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJAQCU4gNazpQRgrm7yhcWeKU', // Bacio di Latte - Moema/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ8zgq6hrVmwARf6ihPDuvaac', // MangoTree - RJ
      type: ['charger']
    },
    {
      googlePlace: 'ChIJcw9c6shXzpQRHtUh-HBq6-M', // Bacio di Latte - R. Pinheiros/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJdXKRuZn4zpQRgF9owALNIQw', // WHEAT - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJoxBMMO3j3JQRSjOnxx6TOLg', // Prestinaria - Curitiba
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ_elqH0FXzpQRRoAPxQyLNvs', // Bacio di Latte - Itaim/SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJbxoCUgrk3JQRRmffu3l-VCo', // Les Terroirs - Curitiba
      type: ['charger']
    },
    {
      googlePlace: 'ChIJNcnhu33k3JQRhmvMJll-Of4', // Luiz Volpato Arq - Curitiba
      type: ['charger']
    },
    {
      googlePlace: 'ChIJNd83zRBYzpQR4XZlFQLIh5Q', // Velodrome - SP
      type: ['charger']
    },
    {
      googlePlace: 'ChIJnzOe4Rfl3JQRkkbNTZnH4K0', // SFco179 - Curitiba
      type: ['charger']
    },
    {
      googlePlace: 'ChIJ340zClZ4GZURu2Yy8ZXSSl4', // Maiss Bike Storie - Porto Alegre/RS
      type: ['service']
    },
    {
      googlePlace: 'ChIJ8Z2NTyhRzpQRSkxnqdw8UjQ', // Oficina SmallHill - São Paulo/SP
      type: ['service']
    },
    {
      googlePlace: 'ChIJiQg_EPkXuAARDOheZGROQDY', // Bicicletaria Oficina - Vitória/ES
      type: ['service']
    },
    {
      googlePlace: 'ChIJ_fqvTp06WpMR1dgVjHcw6Js', // Super Bike 101 - Brasília/DF
      type: ['service', 'charger']
    },
    {
      googlePlace: 'ChIJk6zVqYYDzpQRsZpUOCLGA8s', // Moto7Mobility - Santos/SP
      type: ['service', 'charger']
    },
    {
      googlePlace: 'ChIJWz5XtfAYqwcRPowRixw4slA', // Reciclo Bikes - Recife/PE
      type: ['service']
    },
    {
      googlePlace: 'ChIJgc6RhsabpgARbQ40-IY0OK8', // Atelier Bicicine - Belo Horizonte/MG
      type: ['service']
    },
    {
      googlePlace: 'ChIJKcPVzHI7WpMRaU9RkzCJHTY', // Giro Master Bike Shop - Brasília/DF
      type: ['service']
    },
    {
      googlePlace: 'ChIJkx4WygPXv5QR4Xyde_WDwps', // MUUVE - Marília/SP
      type: ['service']
    },
    {
      googlePlace: 'ChIJcexbQKAbHJURcWBerIApvFI', // Magrela Oficina Café - Carlos Barbosa/RS
      type: ['service', 'charger']
    },
    {
      googlePlace: 'ChIJHd72H1jh3JQRTBA9mMMznpg', // Bike4U - Curiitiba/PR
      type: ['service', 'charger']
    },
    {
      googlePlace: 'ChIJbYBYc6bLyZQRR_tQCYahjaE', // Bicicletaria Cross Bike - SJBV/SP
      type: ['service']
    },
    {
      googlePlace: 'ChIJb_VMpotPpJQREA-m3334ZD8', // Ciclo Cerrado - Uberlândia/MG
      type: ['service']
    },
    {
      googlePlace: 'ChIJD_bw-FBXzpQRD8qQzh95so0', // CarPark
      type: ['parking']
    },
    {
      googlePlace: 'ChIJ40wX2AFazpQRwDbHK9M_DdI', // Born to Crossfit
      type: ['parking']
    },
    {
      googlePlace: 'ChIJ7Vo9d0tYzpQRYEXmgBCMtic', // Augusta
      type: ['parking']
    },
    {
      googlePlace: 'ChIJcVxJBsxZzpQRFMJ_Q7lID8w', // Blue Treee Paulista
      type: ['parking']
    },
    {
      googlePlace: 'EktBbGFtZWRhIENhbXBpbmFzLCA0NDUgLSBKYXJkaW0gUGF1bGlzdGEsIFPDo28gUGF1bG8gLSBTUCwgMD', // Campinas
      type: ['parking']
    },
    {
      googlePlace: 'ChIJXWxlQAtXzpQR6x5y20r-0KQ', // Brasil Park Faria Lima
      type: ['parking']
    },
    {
      googlePlace: 'ChIJKWFFmstQzpQRprSSUcZ4ztI', // Brasil Park Berrini
      type: ['parking']
    },
    {
      googlePlace: 'CChIJrxP7kkVYzpQRTmy9zVVFKrs', // Brasil Park Arouche
      type: ['parking']
    },
    {
      googlePlace: 'ChIJL-xzGGFXzpQR_X4Kin8W9lQ', // Loja SP
      type: ['store', 'charger']
    },
    {
      googlePlace: 'ChIJY1lrO13l3JQRfw9lIVJSCU8', // Loja CTB
      type: ['store', 'charger']
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
