const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  return res.end(
    JSON.stringify([
      {
        name: 'Alva Coworking',
        address: [
          'R. Simão Álvares, 97',
          'Pinheiros, São Paulo',
          'SP, 05417-030, Brasil'
        ],
        phone: '(11) 4550-4701',
        pos: {
          lat: -23.566483,
          lng: -46.6870085
        },
        googlePlace: 'ChIJM0wFcdxXzpQRo_-Wyy4K_qE',
        type: ['charger']
      },
      {
        name: 'Dopê Casual Food',
        address: [
          'Rua Haddock Lobo, 90',
          'Cerqueira César, São Paulo',
          'SP, 01414-000, Brasil'
        ],
        phone: '(11) 3796-6230',
        pos: {
          lat: -23.554589,
          lng: -46.658292
        },
        googlePlace: 'ChIJ1aPPuV5ZzpQR4BIHucm4vGQ',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte',
        address: [
          'R. Vupabussu, 61',
          'Pinheiros, São Paulo',
          'SP, 05429-040, Brasil'
        ],
        phone: '(11) 3031-1092',
        pos: {
          lat: -23.5600874,
          lng: -46.6971429
        },
        googlePlace: 'ChIJbSxi-w9XzpQRxor0_L36Djs',
        type: ['charger']
      },
      {
        name: 'Casa Toffo',
        address: [
          'R. Paulo Orozimbo, 613',
          'Aclimação, São Paulo',
          'SP, 01535-000, Brasil'
        ],
        phone: '(11) 3271-8331',
        pos: {
          lat: -23.5728727,
          lng: -46.6254545
        },
        googlePlace: 'ChIJ-0Zi6PxZzpQR-b6maQjQjSA',
        type: ['charger']
      },
      {
        name: 'Cupping Café',
        address: [
          'R. Wisard, 171',
          'Vila Madalena, São Paulo',
          'SP, 05434-080, Brasil'
        ],
        phone: '(11) 3813-6154',
        pos: {
          lat: -23.55494819999999,
          lng: -46.68882139999999
        },
        googlePlace: 'ChIJe45oNJZXzpQRUXYN4bE42h8',
        type: ['charger']
      },
      {
        name: 'SP Lovers Café e Vinho',
        address: [
          'R. Oscar Freire, 1921',
          'Pinheiros, São Paulo',
          'SP, 05409-011, Brasil'
        ],
        phone: '(11) 3294-2799',
        pos: {
          lat: -23.555822,
          lng: -46.675354
        },
        googlePlace: 'ChIJlVqH9KVXzpQRgkyOBRW-Peo',
        type: ['charger']
      },
      {
        name: 'De Lá Do Pão',
        address: [
          'Rua Harmonia, 1158',
          'Vila Madalena, São Paulo',
          'SP, 05435-001, Brasil'
        ],
        phone: '(11) 99693-1212',
        pos: {
          lat: -23.5486881,
          lng: -46.69166939999999
        },
        googlePlace: 'ChIJyUY7cy9XzpQRHUOkTVXkURY',
        type: ['charger']
      },
      {
        name: 'SOW Cake Lounge',
        address: [
          'Av. Conselheiro Rodrigues Alves, 456',
          'Vila Mariana, São Paulo',
          'SP, 04014-001, Brasil'
        ],
        phone: '(11) 4328-0008',
        pos: {
          lat: -23.5839645,
          lng: -46.6424742
        },
        googlePlace: 'ChIJc7C0To9ZzpQRxI8xZGKRSRM',
        type: ['charger']
      },
      {
        name: 'The Coffee Oscar Freire',
        address: [
          'R. Oscar Freire, 1149',
          'Cerqueira César, São Paulo',
          'SP, 01426-003, Brasil'
        ],
        pos: {
          lat: -23.561599,
          lng: -46.6709301
        },
        googlePlace: 'ChIJn6sjxaVXzpQR6YVQqQ5PgYE',
        type: ['charger']
      },
      {
        name: 'Cubo Itaú',
        address: [
          'Alameda Vicente Pinzon, 54',
          'Vila Olímpia, São Paulo',
          'SP, 04547-130, Brasil'
        ],
        pos: {
          lat: -23.5966179,
          lng: -46.68681609999999
        },
        googlePlace: 'ChIJDdNzek5XzpQRcaNlJ3QxKoY',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte Moema',
        address: [
          'R. Gaivota, 544',
          'Moema, São Paulo',
          'SP, 04522-031, Brasil'
        ],
        phone: '(11) 3063-2084',
        pos: {
          lat: -23.6011841,
          lng: -46.6656548
        },
        googlePlace: 'ChIJAQCU4gNazpQRgrm7yhcWeKU',
        type: ['charger']
      },
      {
        name: 'Mango Tree',
        address: [
          'R. Prudente de Morais, 594',
          'Ipanema, Rio de Janeiro',
          'RJ, 22420-040, Brasil'
        ],
        phone: '(21) 3083-5031',
        pos: {
          lat: -22.98523339999999,
          lng: -43.2023853
        },
        googlePlace: 'ChIJ8zgq6hrVmwARf6ihPDuvaac',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte Pinheiros',
        address: [
          'R. dos Pinheiros, 404',
          'Pinheiros, São Paulo',
          'SP, 05422-000, Brasil'
        ],
        phone: '(11) 3064-0827',
        pos: {
          lat: -23.5651858,
          lng: -46.6821703
        },
        googlePlace: 'ChIJcw9c6shXzpQRHtUh-HBq6-M',
        type: ['charger']
      },
      {
        name: 'Wheat Biopadaria',
        address: [
          'R. Carlos Weber, 1622',
          'Vila Leopoldina, São Paulo',
          'SP, 05303-000, Brasil'
        ],
        phone: '(11) 3628-8209',
        pos: {
          lat: -23.5334425,
          lng: -46.7255175
        },
        googlePlace: 'ChIJdXKRuZn4zpQRgF9owALNIQw',
        type: ['charger']
      },
      {
        name: 'Prestinaria A Casa dos Pães',
        address: [
          'R. Euclides da Cunha, 699 C',
          'Bigorrilho, Curitiba',
          'PR, 80730-360, Brasil'
        ],
        phone: '(41) 3342-4576',
        pos: {
          lat: -25.4389499,
          lng: -49.29604529999999
        },
        googlePlace: 'ChIJoxBMMO3j3JQRSjOnxx6TOLg',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte Itaim Bibi',
        address: [
          'R. Manuel Guedes, 77',
          'Itaim Bibi, São Paulo',
          'SP, 01407-200, Brasil'
        ],
        phone: '(11) 3168-7187',
        pos: {
          lat: -23.5811913,
          lng: -46.6798443
        },
        googlePlace: 'ChIJ_elqH0FXzpQRRoAPxQyLNvs',
        type: ['charger']
      },
      {
        name: 'Les Terroirs',
        address: [
          'Alameda Prudente de Moraes, 1069',
          'Centro, Curitiba',
          'PR, 80430-234, Brasil'
        ],
        phone: '(41) 3044-6682',
        pos: {
          lat: -25.431196,
          lng: -49.281841
        },
        googlePlace: 'ChIJbxoCUgrk3JQRRmffu3l-VCo',
        type: ['charger']
      },
      {
        name: 'Camelo Bike Tour Brasília',
        address: [
          'SHS Quadra 06 Conjunto A, Bloco A, Loja 17',
          'Centro Empresarial Brasil 21 - Asa Sul, Brasília',
          'DF, 70316-102, Brasil'
        ],
        phone: '(61) 99303-8196',
        pos: {
          lat: -15.7933051,
          lng: -47.8930601
        },
        googlePlace: 'ChIJlZr18bE7WpMRB_hHg-ImCzc',
        type: ['charger']
      },
      {
        name: 'Luiz Volpato Arq',
        address: [
          'R. Jerônimo Durski, 897',
          'Bigorrilho, Curitiba',
          'PR, 80730-290, Brasil'
        ],
        phone: '(41) 3018-1701',
        pos: {
          lat: -25.439504,
          lng: -49.300724
        },
        googlePlace: 'ChIJNcnhu33k3JQRhmvMJll-Of4',
        type: ['charger']
      },
      {
        name: 'Velodrome',
        address: [
          'R. Conselheiro Brotero, 744',
          'Santa Cecilia, São Paulo',
          'SP, 01232-010, Brasil'
        ],
        phone: '(11) 2872-5852',
        pos: {
          lat: -23.5328478,
          lng: -46.659321
        },
        googlePlace: 'ChIJNd83zRBYzpQR4XZlFQLIh5Q',
        type: ['charger']
      },
      {
        name: 'SFco179',
        address: [
          'R. São Francisco, 179',
          'Centro, Curitiba',
          'PR, 80020-190, Brasil'
        ],
        pos: {
          lat: -25.428206,
          lng: -49.2701972
        },
        googlePlace: 'ChIJnzOe4Rfl3JQRkkbNTZnH4K0',
        type: ['charger']
      },
      {
        name: 'Rause Café + Vinho',
        address: [
          'Alameda Dr. Carlos de Carvalho, 696',
          'Centro, Curitiba',
          'PR, 80430-180, Brasil'
        ],
        phone: '(41) 3242-9999',
        pos: {
          lat: -25.4335544,
          lng: -49.2817704
        },
        googlePlace: 'ChIJ0WMwKQvk3JQRKscraBW4ma0',
        type: ['charger']
      },
      {
        name: 'Everybike',
        address: [
          'R. França Pinto, 421',
          'Vila Mariana, São Paulo',
          'SP, 04016-032, Brasil'
        ],
        phone: '(11) 5539-0125',
        pos: {
          lat: -23.587214,
          lng: -46.640451
        },
        googlePlace: 'ChIJIdkhwIdZzpQRI1U5jULyGwY',
        type: ['charger']
      },
      {
        name: 'O Pudim Perfeito',
        address: [
          'Alameda Dr. Carlos de Carvalho, 1612 Loja B',
          'Bigorrilho, São Paulo',
          'PR, 80730-201, Brasil'
        ],
        phone: '(41) 98781-5381',
        pos: {
          lat: -25.4356163197085,
          lng: -49.28880031970851
        },
        googlePlace: 'ChIJ-RWmK5Tj3JQRsVUJr9-lCRE',
        type: ['charger']
      },
      {
        name: 'Bike House',
        address: [
          'Rua Cardeal Arcoverde, 2062',
          'Pinheiros',
          'São Paulo - SP',
          'SP, 05408-002, Brasil'
        ],
        phone: '(11) 9.6541-7538',
        open: true,
        pos: {
          lat: -23.562933,
          lng: -46.69088
        },
        googlePlace: 'ChIJcyCY9qFXzpQREiC7QlNLwDY',
        type: ['service']
      },
      {
        name: 'Vélo 27',
        address: [
          'Condomínio do Centro Comercial Long Beach',
          'Av. Hugo Viola, 955',
          'Loja 8',
          'Mata da Praia, Vitória',
          'ES, 29065-475, Brasil'
        ],
        phone: '(27) 9.9251-5669',
        open: true,
        pos: {
          lat: -20.2792453,
          lng: -40.2953256
        },
        googlePlace: 'ChIJiQg_EPkXuAARDOheZGROQDY',
        type: ['service']
      },
      {
        name: 'Super Bike 101',
        address: [
          'CLSW 101 Bloco C, s/n',
          'Loja 30/32',
          'Cruzeiro / Sudoeste / Octogonal, Brasília',
          'DF, 70670-503, Brasil'
        ],
        phone: '(61) 3344-8042',
        open: true,
        pos: {
          lat: -15.7986565,
          lng: -47.9209296
        },
        googlePlace: 'ChIJ_fqvTp06WpMR1dgVjHcw6Js',
        type: ['service', 'charger']
      },
      {
        name: 'Moto7Mobility - Goo Eletricos Santos e Litoral SP',
        address: [
          'Av. Alm. Saldanha da Gama, 115',
          'Ponta da Praia, Santos',
          'SP, 11030-400, Brasil'
        ],
        phone: '(13) 99727-5470',
        pos: {
          lat: -23.989678,
          lng: -46.29947199999999
        },
        googlePlace: 'ChIJk6zVqYYDzpQRsZpUOCLGA8s',
        type: ['service', 'charger']
      },
      {
        name: 'Reciclo Bikes',
        address: [
          'Mercado da Encruzilhada',
          'R. Dr. José Maria, s/n',
          'box 220',
          'Encruzilhada, Recife',
          'PE, 52041-015, Brasil'
        ],
        phone: '(81) 3048-4050',
        open: true,
        pos: {
          lat: -8.0366288,
          lng: -34.8920891
        },
        googlePlace: 'ChIJWz5XtfAYqwcRPowRixw4slA',
        type: ['service', 'charger']
      },
      {
        name: 'Giro Master Bike Shop',
        address: [
          'CLN 406 Bl A Loj 42/46',
          'Asa Norte, Brasília',
          'DF, 70847-510, Brasil'
        ],
        phone: '(61) 3202-2775',
        open: true,
        pos: {
          lat: -15.7669266,
          lng: -47.8786118
        },
        googlePlace: 'ChIJKcPVzHI7WpMRaU9RkzCJHTY',
        type: ['service', 'charger']
      },
      {
        name: 'Magrela Oficina e Café',
        address: [
          'Estr. José Chies, 150',
          'Pte. Sêca, Carlos Barbosa',
          'RS, 95185-000, Brasil'
        ],
        phone: '(54) 99184-0145',
        pos: {
          lat: -29.3096603,
          lng: -51.49419049999999
        },
        googlePlace: 'ChIJcexbQKAbHJURcWBerIApvFI',
        type: ['service', 'charger']
      },
      {
        name: 'Bicicletaria Urbana Bike Viva',
        address: [
          'Av. Washington Soares, 2565',
          'Edson Queiroz, Fortaleza',
          'CE, 60811-341, Brasil'
        ],
        phone: '(85) 99205-3891',
        pos: {
          lat: -3.7850419,
          lng: -38.4825672
        },
        googlePlace: 'ChIJBzUXeYVIxwcRrjy1Utb3VCs',
        type: ['service']
      },
      {
        name: 'Bicicletaria Cross Bike',
        address: [
          'R. Henrique Martarello, 559',
          'Vila Brasil, São João da Boa Vista',
          'SP, 13875-031, Brasil'
        ],
        phone: '(19) 3631-0034',
        pos: {
          lat: -21.986355,
          lng: -46.781424
        },
        googlePlace: 'ChIJbYBYc6bLyZQRR_tQCYahjaE',
        type: ['service',  'charger']
      },
      {
        name: 'Vila Velô',
        address: [
          'Rua Sete de Abril, 291',
          'Floresta, Porto Alegre',
          'RS, 90220-130 Brasil'
        ],
        phone: '(51) 3092-0070',
        pos: {
          lat: -30.018188631201216,
          lng: -51.2087267387078
        },
        googlePlace: 'ChIJ4UcEfrx5GZURpNp9gu16Gq0',
        type: ['service']
      },
      {
        name: 'Ciclo Cerrado',
        address: [
          'Av. João Naves de Ávila, 7285',
          'Santa Mônica, Uberlândia',
          'MG, 38408-311, Brasil'
        ],
        phone: '(34) 3229-6664',
        pos: {
          lat: -18.9388577,
          lng: -48.224602
        },
        googlePlace: 'ChIJb_VMpotPpJQREA-m3334ZD8',
        type: ['service', 'charger']
      },
      {
        name: 'Bicicletaria Recreio',
        address: [
          'R. Rebouças, 250',
          'Vitoria, Londrina',
          'PR, 86060-680, Brasil'
        ],
        phone: '(43) 3327-6295',
        pos: {
          lat: -23.3037226,
          lng: -51.178016
        },
        googlePlace: 'ChIJu8ETGbNE65QRo_9GRkhKXio',
        type: ['service']
      },
      {
        name: 'Saluh Oficina',
        address: [
          'R. Batista Cepelos, 283',
          'Vila Mariana, São Paulo',
          'SP, 04109-120, Brasil'
        ],
        phone: '(11) 97422-8054',
        pos: {
          lat: -23.5771711,
          lng: -46.6328599
        },
        googlePlace: 'ChIJUb-kvoJZzpQRcKWYxtrRZY0',
        type: ['service', 'store']
      },
      {
        name: 'Tamanduá Bike Store LTDA',
        address: [
          'R. Sete de Setembro, 1495',
          'Aeroporto, Corumbá',
          'MS, 79332-010, Brasil'
        ],
        phone: '(67) 3232-9743',
        pos: {
          lat: -19.0110916,
          lng: -57.654644
        },
        googlePlace: 'ChIJr5wbjnChh5MRLdm1W9GOU_g',
        type: ['service']
      },
      // ,{
      //   name: 'Vela Bikes',
      //   address: [
      //     'R. Joaquim Antunes, 631',
      //     'Pinheiros, São Paulo',
      //     'SP, 05415-011, Brasil'
      //   ],
      //   open: true,
      //   hours: [
      //     ['Seg', 'Fechado'],
      //     ['Ter', 'Fechado'],
      //     ['Qua', '10:00 – 19:00'],
      //     ['Qui', '10:00 – 19:00'],
      //     ['Sex', '10:00 – 19:00'],
      //     ['Sáb', '10:00 – 19:00'],
      //     ['Dom', '10:00 – 19:00']
      //   ],
      //   pos: {
      //     lat: -23.563341,
      //     lng: -46.682386
      //   },
      //   googlePlace: 'ChIJL-xzGGFXzpQR_X4Kin8W9lQ',
      //   type: ['store', 'charger']
      // }
    ])
  )

  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY
  })

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
