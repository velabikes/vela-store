const GoogleMaps = require('@google/maps')

module.exports = async (req, res) => {
  return res.end(
    JSON.stringify([
      {
        name: 'BotaniKafé - Jardins',
        address: [
          'Alameda Lorena, 1765',
          'Jardins, São Paulo',
          'SP, 01424-002, Brasil'
        ],
        phone: '(11) 3064-6570',
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 16:00'],
          ['terça-feira', ' 10:00 – 16:00'],
          ['quarta-feira', ' 10:00 – 16:00'],
          ['quinta-feira', ' 10:00 – 16:00'],
          ['sexta-feira', ' 10:00 – 16:00'],
          ['sábado', ' 10:00 – 16:00'],
          ['domingo', ' 10:00 – 16:00']
        ],
        pos: {
          lat: -23.5625497,
          lng: -46.6677741
        },
        googlePlace: 'ChIJazzL3K5ZzpQRD9IIOo6VVGo',
        type: ['charger']
      },
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
        open: true,
        hours: [
          ['segunda-feira', ' 08:30 – 18:00'],
          ['terça-feira', ' 08:30 – 18:00'],
          ['quarta-feira', ' 08:30 – 18:00'],
          ['quinta-feira', ' 08:30 – 18:00'],
          ['sexta-feira', ' 08:30 – 18:00'],
          ['sábado', ' 10:00 – 18:00'],
          ['domingo', ' Fechado']
        ],
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
        open: false,
        hours: [
          ['segunda-feira', ' 12:00 – 20:00'],
          ['terça-feira', ' 12:00 – 20:00'],
          ['quarta-feira', ' 12:00 – 20:00'],
          ['quinta-feira', ' 12:00 – 20:00'],
          ['sexta-feira', ' 12:00 – 20:00'],
          ['sábado', ' 12:00 – 20:00'],
          ['domingo', ' 12:00 – 20:00']
        ],
        pos: {
          lat: -23.5600874,
          lng: -46.6971429
        },
        googlePlace: 'ChIJbSxi-w9XzpQRxor0_L36Djs',
        type: ['charger']
      },
      {
        name: 'CASA TOFFO',
        address: [
          'R. Paulo Orozimbo, 613',
          'Aclimação, São Paulo',
          'SP, 01535-000, Brasil'
        ],
        phone: '(11) 3271-8331',
        open: false,
        hours: [
          ['segunda-feira', ' Fechado'],
          ['terça-feira', ' Fechado'],
          ['quarta-feira', ' Fechado'],
          ['quinta-feira', ' Fechado'],
          ['sexta-feira', ' Fechado'],
          ['sábado', ' 13:00 – 17:00'],
          ['domingo', ' 13:00 – 17:00']
        ],
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
        name: 'ZUD Café',
        address: [
          'R. Barão de Tatuí, 377',
          'Vila Buarque, São Paulo',
          'SP, 01226-030, Brasil'
        ],
        phone: '(11) 2769-3369',
        pos: {
          lat: -23.5392869,
          lng: -46.6540996
        },
        googlePlace: 'ChIJpydZ5j5YzpQR1V_gNLyvHV4',
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
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 22:00'],
          ['terça-feira', ' 10:00 – 22:00'],
          ['quarta-feira', ' 10:00 – 22:00'],
          ['quinta-feira', ' 10:00 – 22:00'],
          ['sexta-feira', ' 10:00 – 22:00'],
          ['sábado', ' 10:00 – 18:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -23.555822,
          lng: -46.675354
        },
        googlePlace: 'ChIJlVqH9KVXzpQRgkyOBRW-Peo',
        type: ['charger']
      },
      {
        name: 'Torteria - Morumbi',
        address: [
          'Rua dos Três Irmãos, 654',
          'Vila Progredior, São Paulo',
          'SP, 05615-190, Brasil'
        ],
        phone: '(11) 2935-0886',
        open: false,
        hours: [
          ['segunda-feira', ' 11:30 – 17:30'],
          ['terça-feira', ' 11:30 – 17:30'],
          ['quarta-feira', ' 11:30 – 17:30'],
          ['quinta-feira', ' 11:30 – 17:30'],
          ['sexta-feira', ' 11:30 – 17:30'],
          ['sábado', ' 11:30 – 17:30'],
          ['domingo', ' 11:30 – 17:30']
        ],
        pos: {
          lat: -23.590182,
          lng: -46.715656
        },
        googlePlace: 'ChIJy9BBJORWzpQReEuaiOtk0kU',
        type: ['charger']
      },
      {
        name: 'Torteria Higienópolis',
        address: [
          'R. Sabará, 585',
          'Consolacao, São Paulo',
          'SP, 01239-011, Brasil'
        ],
        phone: '(11) 2306-9755',
        open: false,
        hours: [
          ['segunda-feira', ' 11:30 – 17:30'],
          ['terça-feira', ' 11:30 – 17:30'],
          ['quarta-feira', ' 11:30 – 17:30'],
          ['quinta-feira', ' 11:30 – 17:30'],
          ['sexta-feira', ' 11:30 – 17:30'],
          ['sábado', ' 11:30 – 17:30'],
          ['domingo', ' 11:30 – 17:30']
        ],
        pos: {
          lat: -23.5484736,
          lng: -46.6554557
        },
        googlePlace: 'ChIJ47W0GDdYzpQRGw-IqYoHn3k',
        type: ['charger']
      },
      {
        name: 'Torteria Pinheiros',
        address: [
          'R. Fradique Coutinho, 39',
          'Pinheiros, São Paulo',
          'SP, 05416-010, Brasil'
        ],
        phone: '(11) 4306-6918',
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 18:00'],
          ['terça-feira', ' 10:00 – 18:00'],
          ['quarta-feira', ' 10:00 – 18:00'],
          ['quinta-feira', ' 10:00 – 18:00'],
          ['sexta-feira', ' 10:00 – 18:00'],
          ['sábado', ' 10:00 – 18:00'],
          ['domingo', ' 11:30 – 16:30']
        ],
        pos: {
          lat: -23.5660344,
          lng: -46.6846147
        },
        googlePlace: 'ChIJixk9BXZXzpQRY2FAH25PxPU',
        type: ['charger']
      },
      {
        name: 'Seu Chalita o Árabe',
        address: [
          'Rua Tabapuã, 592',
          'Itaim Bibi, São Paulo',
          'SP, 04533-002, Brasil'
        ],
        phone: '(11) 2361-9936',
        open: false,
        hours: [
          ['segunda-feira', ' 11:30 – 22:00'],
          ['terça-feira', ' 11:30 – 22:00'],
          ['quarta-feira', ' 11:30 – 22:00'],
          ['quinta-feira', ' 11:30 – 22:00'],
          ['sexta-feira', ' 11:30 – 22:00'],
          ['sábado', ' 12:00 – 20:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -23.5832047,
          lng: -46.6763248
        },
        googlePlace: 'ChIJ7-_Fxl1XzpQRDHUgRm86x9A',
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
        open: false,
        hours: [
          ['segunda-feira', ' Fechado'],
          ['terça-feira', ' 15:00 – 18:00'],
          ['quarta-feira', ' 15:00 – 18:00'],
          ['quinta-feira', ' 15:00 – 18:00'],
          ['sexta-feira', ' 15:00 – 18:00'],
          ['sábado', ' 09:00 – 12:00'],
          ['domingo', ' 09:00 – 12:00']
        ],
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
        open: true,
        hours: [
          ['segunda-feira', ' 11:00 – 17:00'],
          ['terça-feira', ' 11:00 – 17:00'],
          ['quarta-feira', ' 11:00 – 17:00'],
          ['quinta-feira', ' 11:00 – 17:00'],
          ['sexta-feira', ' 11:00 – 17:00'],
          ['sábado', ' 11:00 – 17:00'],
          ['domingo', ' 11:00 – 17:00']
        ],
        pos: {
          lat: -23.5839645,
          lng: -46.6424742
        },
        googlePlace: 'ChIJc7C0To9ZzpQRxI8xZGKRSRM',
        type: ['charger']
      },
      {
        name: 'Saladices Pinheiros',
        address: [
          'R. Simão Álvares, 49',
          'Pinheiros, São Paulo',
          'SP, 05417-030, Brasil'
        ],
        phone: '(11) 2309-3962',
        pos: {
          lat: -23.5668357,
          lng: -46.6867454
        },
        googlePlace: 'ChIJM6Ei0whXzpQR2CeApInducA',
        type: ['charger']
      },
      {
        name: 'The Coffee Oscar Freire',
        address: [
          'R. Oscar Freire, 1149',
          'Cerqueira César, São Paulo',
          'SP, 01426-003, Brasil'
        ],
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 18:00'],
          ['terça-feira', ' 09:00 – 18:00'],
          ['quarta-feira', ' 09:00 – 18:00'],
          ['quinta-feira', ' 09:00 – 18:00'],
          ['sexta-feira', ' 09:00 – 18:00'],
          ['sábado', ' 10:00 – 16:00'],
          ['domingo', ' 10:00 – 16:00']
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
        name: 'Bacio di Latte',
        address: [
          'R. Gaivota, 544',
          'Moema, São Paulo',
          'SP, 04522-031, Brasil'
        ],
        phone: '(11) 3063-2084',
        open: true,
        hours: [
          ['segunda-feira', ' 11:00 – 20:00'],
          ['terça-feira', ' 11:00 – 20:00'],
          ['quarta-feira', ' 11:00 – 20:00'],
          ['quinta-feira', ' 11:00 – 20:00'],
          ['sexta-feira', ' 11:00 – 20:00'],
          ['sábado', ' 11:00 – 20:00'],
          ['domingo', ' 11:00 – 20:00']
        ],
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
        open: true,
        hours: [
          ['segunda-feira', ' Atendimento 24 horas'],
          ['terça-feira', ' Atendimento 24 horas'],
          ['quarta-feira', ' Atendimento 24 horas'],
          ['quinta-feira', ' Atendimento 24 horas'],
          ['sexta-feira', ' Atendimento 24 horas'],
          ['sábado', ' Atendimento 24 horas'],
          ['domingo', ' Atendimento 24 horas']
        ],
        pos: {
          lat: -22.98523339999999,
          lng: -43.2023853
        },
        googlePlace: 'ChIJ8zgq6hrVmwARf6ihPDuvaac',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte',
        address: [
          'R. dos Pinheiros, 404',
          'Pinheiros, São Paulo',
          'SP, 05422-000, Brasil'
        ],
        phone: '(11) 3064-0827',
        open: false,
        hours: [
          ['segunda-feira', ' 12:00 – 20:00'],
          ['terça-feira', ' 12:00 – 20:00'],
          ['quarta-feira', ' 12:00 – 20:00'],
          ['quinta-feira', ' 12:00 – 20:00'],
          ['sexta-feira', ' 12:00 – 20:00'],
          ['sábado', ' 12:00 – 20:00'],
          ['domingo', ' 12:00 – 20:00']
        ],
        pos: {
          lat: -23.5651858,
          lng: -46.6821703
        },
        googlePlace: 'ChIJcw9c6shXzpQRHtUh-HBq6-M',
        type: ['charger']
      },
      {
        name: 'WHEAT BIOPADARIA',
        address: [
          'R. Carlos Weber, 1622',
          'Vila Leopoldina, São Paulo',
          'SP, 05303-000, Brasil'
        ],
        phone: '(11) 3628-8209',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 13:00'],
          ['terça-feira', ' 09:00 – 13:00'],
          ['quarta-feira', ' 09:00 – 13:00'],
          ['quinta-feira', ' 09:00 – 13:00'],
          ['sexta-feira', ' 09:00 – 13:00'],
          ['sábado', ' 09:00 – 13:00'],
          ['domingo', ' Fechado']
        ],
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
        open: false,
        hours: [
          ['segunda-feira', ' 15:00 – 19:00'],
          ['terça-feira', ' 15:00 – 19:00'],
          ['quarta-feira', ' 15:00 – 19:00'],
          ['quinta-feira', ' 15:00 – 19:00'],
          ['sexta-feira', ' 15:00 – 19:00'],
          ['sábado', ' Fechado'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -25.4389499,
          lng: -49.29604529999999
        },
        googlePlace: 'ChIJoxBMMO3j3JQRSjOnxx6TOLg',
        type: ['charger']
      },
      {
        name: 'Bacio di Latte',
        address: [
          'R. Manuel Guedes, 77',
          'Itaim Bibi, São Paulo',
          'SP, 01407-200, Brasil'
        ],
        phone: '(11) 3168-7187',
        open: false,
        hours: [
          ['segunda-feira', ' 12:00 – 22:00'],
          ['terça-feira', ' 12:00 – 22:00'],
          ['quarta-feira', ' 12:00 – 22:00'],
          ['quinta-feira', ' 12:00 – 22:00'],
          ['sexta-feira', ' 12:00 – 22:00'],
          ['sábado', ' 12:00 – 22:00'],
          ['domingo', ' 12:00 – 22:00']
        ],
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
        open: true,
        hours: [
          ['segunda-feira', ' Fechado'],
          ['terça-feira', ' 10:00 – 20:00'],
          ['quarta-feira', ' 10:00 – 20:00'],
          ['quinta-feira', ' 10:00 – 20:00'],
          ['sexta-feira', ' 10:00 – 20:00'],
          ['sábado', ' 12:00 – 20:00'],
          ['domingo', ' 10:00 – 18:00']
        ],
        pos: {
          lat: -25.431196,
          lng: -49.281841
        },
        googlePlace: 'ChIJbxoCUgrk3JQRRmffu3l-VCo',
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
        open: true,
        hours: [
          ['segunda-feira', ' 08:00 – 19:00'],
          ['terça-feira', ' 08:00 – 19:00'],
          ['quarta-feira', ' 08:00 – 19:00'],
          ['quinta-feira', ' 08:00 – 19:00'],
          ['sexta-feira', ' 08:00 – 19:00'],
          ['sábado', ' Fechado'],
          ['domingo', ' Fechado']
        ],
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
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 18:00'],
          ['terça-feira', ' 10:00 – 18:00'],
          ['quarta-feira', ' 10:00 – 18:00'],
          ['quinta-feira', ' 10:00 – 18:00'],
          ['sexta-feira', ' 10:00 – 18:00'],
          ['sábado', ' 10:00 – 15:00'],
          ['domingo', ' Fechado']
        ],
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
        name: 'Maiss Bike Store',
        address: [
          'Praça Garibaldi, 78',
          'Azenha, Porto Alegre',
          'RS, 90050-020, Brasil'
        ],
        phone: '(51) 3372-5240',
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 18:30'],
          ['terça-feira', ' 10:00 – 18:30'],
          ['quarta-feira', ' 10:00 – 18:30'],
          ['quinta-feira', ' 10:00 – 18:30'],
          ['sexta-feira', ' 10:00 – 18:30'],
          ['sábado', ' 10:00 – 17:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -30.04319,
          lng: -51.2202641
        },
        googlePlace: 'ChIJ340zClZ4GZURu2Yy8ZXSSl4',
        type: ['service']
      },
      {
        name: 'Oficina Small Hill de bicicletas elétricas',
        address: [
          'R. Pôrto Martins, 748',
          'Brooklin, São Paulo',
          'SP, 04570-140, Brasil'
        ],
        phone: '(11) 95874-5326',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 18:00'],
          ['terça-feira', ' 09:00 – 18:00'],
          ['quarta-feira', ' 09:00 – 18:00'],
          ['quinta-feira', ' 09:00 – 18:00'],
          ['sexta-feira', ' 09:00 – 18:00'],
          ['sábado', ' 10:00 – 14:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -23.6002339,
          lng: -46.68690119999999
        },
        googlePlace: 'ChIJ8Z2NTyhRzpQRSkxnqdw8UjQ',
        type: ['service']
      },
      {
        name: 'Bicicletaria Oficina',
        address: [
          'Condomínio do Centro Comercial Long Beach',
          'Av. Hugo Viola, 955',
          'Loja 8',
          'Mata da Praia, Vitória',
          'ES, 29065-475, Brasil'
        ],
        phone: '(27) 3024-6755',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 18:00'],
          ['terça-feira', ' 09:00 – 18:00'],
          ['quarta-feira', ' 09:00 – 18:00'],
          ['quinta-feira', ' 09:00 – 18:00'],
          ['sexta-feira', ' 09:00 – 18:00'],
          ['sábado', ' 09:00 – 13:00'],
          ['domingo', ' Fechado']
        ],
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
        hours: [
          ['segunda-feira', ' 08:00 – 20:00'],
          ['terça-feira', ' 08:00 – 20:00'],
          ['quarta-feira', ' 08:00 – 20:00'],
          ['quinta-feira', ' 08:00 – 20:00'],
          ['sexta-feira', ' 08:00 – 20:00'],
          ['sábado', ' 08:00 – 20:00'],
          ['domingo', ' 09:00 – 14:00']
        ],
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
        open: true,
        hours: [
          ['segunda-feira', ' 10:00 – 18:00'],
          ['terça-feira', ' 09:00 – 18:00'],
          ['quarta-feira', ' 09:00 – 18:00'],
          ['quinta-feira', ' 09:00 – 18:00'],
          ['sexta-feira', ' 09:00 – 18:00'],
          ['sábado', ' 09:00 – 15:00'],
          ['domingo', ' Fechado']
        ],
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
        hours: [
          ['segunda-feira', ' 08:00 – 14:00'],
          ['terça-feira', ' 08:00 – 14:00'],
          ['quarta-feira', ' 08:00 – 14:00'],
          ['quinta-feira', ' 08:00 – 14:00'],
          ['sexta-feira', ' 08:00 – 14:00'],
          ['sábado', ' 08:00 – 14:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -8.0366288,
          lng: -34.8920891
        },
        googlePlace: 'ChIJWz5XtfAYqwcRPowRixw4slA',
        type: ['service']
      },
      {
        name: 'Atelier Bicicine',
        address: [
          'Av. Olégario Maciel, 742 Mercado Novo, lj 2.057/2.059',
          'Centro, Belo Horizonte',
          'MG, 30180-110, Brasil'
        ],
        phone: '(31) 99992-6906',
        pos: {
          lat: -19.9205817,
          lng: -43.94527499999999
        },
        googlePlace: 'ChIJgc6RhsabpgARbQ40-IY0OK8',
        type: ['service']
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
        hours: [
          ['segunda-feira', ' 09:00 – 19:00'],
          ['terça-feira', ' 09:00 – 19:00'],
          ['quarta-feira', ' 09:00 – 19:00'],
          ['quinta-feira', ' 09:00 – 19:00'],
          ['sexta-feira', ' 09:00 – 19:00'],
          ['sábado', ' 09:00 – 15:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -15.7669266,
          lng: -47.8786118
        },
        googlePlace: 'ChIJKcPVzHI7WpMRaU9RkzCJHTY',
        type: ['service']
      },
      {
        name: 'MUUVE - Bicicletas elétricas',
        address: [
          'R. Santa Helena, 1967',
          'Jardim Estoril, Marília',
          'SP, 14514-411, Brasil'
        ],
        phone: '(14) 99833-2323',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 21:00'],
          ['terça-feira', ' 09:00 – 21:00'],
          ['quarta-feira', ' 09:00 – 21:00'],
          ['quinta-feira', ' 09:00 – 21:00'],
          ['sexta-feira', ' 09:00 – 21:00'],
          ['sábado', ' 09:00 – 21:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -22.191865,
          lng: -49.9330992
        },
        googlePlace: 'ChIJkx4WygPXv5QR4Xyde_WDwps',
        type: ['service']
      },
      {
        name: 'Magrela Oficina e Café',
        address: [
          'Estr. José Chies, 150',
          'Pte. Sêca, Carlos Barbosa',
          'RS, 95185-000, Brasil'
        ],
        phone: '(54) 99184-0145',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 11:45, 14:00 – 19:00'],
          ['terça-feira', ' 09:00 – 11:45, 14:00 – 19:00'],
          ['quarta-feira', ' 09:00 – 11:45, 14:00 – 19:00'],
          ['quinta-feira', ' 09:00 – 11:45, 14:00 – 19:00'],
          ['sexta-feira', ' 09:00 – 11:45, 14:00 – 19:00'],
          ['sábado', ' 08:00 – 11:30'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -29.3096603,
          lng: -51.49419049999999
        },
        googlePlace: 'ChIJcexbQKAbHJURcWBerIApvFI',
        type: ['service', 'charger']
      },
      {
        name: 'Bike4U - Bike para Você',
        address: [
          'Av. Manoel Ribas, 1901',
          'Mercês, Curitiba',
          'PR, 80810-002, Brasil'
        ],
        phone: '(41) 3014-5762',
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 18:30'],
          ['terça-feira', ' 09:00 – 18:30'],
          ['quarta-feira', ' 09:00 – 18:30'],
          ['quinta-feira', ' 09:00 – 18:30'],
          ['sexta-feira', ' 09:00 – 18:30'],
          ['sábado', ' 09:00 – 17:00'],
          ['domingo', ' 10:30 – 15:00']
        ],
        pos: {
          lat: -25.4176432,
          lng: -49.2944859
        },
        googlePlace: 'ChIJHd72H1jh3JQRTBA9mMMznpg',
        type: ['service', 'charger']
      },
      {
        name: 'Bicicletaria Cross Bike',
        address: [
          'R. Henrique Martarello, 559',
          'Vila Brasil, São João da Boa Vista',
          'SP, 13875-031, Brasil'
        ],
        phone: '(19) 3631-0034',
        open: true,
        hours: [
          ['segunda-feira', ' 08:00 – 18:00'],
          ['terça-feira', ' 08:00 – 18:00'],
          ['quarta-feira', ' 08:00 – 18:00'],
          ['quinta-feira', ' 08:00 – 18:00'],
          ['sexta-feira', ' 08:00 – 18:00'],
          ['sábado', ' 08:00 – 13:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -21.986355,
          lng: -46.781424
        },
        googlePlace: 'ChIJbYBYc6bLyZQRR_tQCYahjaE',
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
        open: true,
        hours: [
          ['segunda-feira', ' 09:00 – 18:30'],
          ['terça-feira', ' 09:00 – 18:30'],
          ['quarta-feira', ' 09:00 – 18:30'],
          ['quinta-feira', ' 09:00 – 18:30'],
          ['sexta-feira', ' 09:00 – 18:30'],
          ['sábado', ' 08:00 – 13:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -18.9388577,
          lng: -48.224602
        },
        googlePlace: 'ChIJb_VMpotPpJQREA-m3334ZD8',
        type: ['service']
      },
      {
        name: 'Blue Tree Premium Paulista',
        address: [
          'Rua Peixoto Gomide, 707',
          'Bela Vista, São Paulo',
          'SP, 01409-001, Brasil'
        ],
        phone: '(11) 3147-7000',
        open: true,
        hours: [
          ['segunda-feira', ' Atendimento 24 horas'],
          ['terça-feira', ' Atendimento 24 horas'],
          ['quarta-feira', ' Atendimento 24 horas'],
          ['quinta-feira', ' Atendimento 24 horas'],
          ['sexta-feira', ' Atendimento 24 horas'],
          ['sábado', ' Atendimento 24 horas'],
          ['domingo', ' Atendimento 24 horas']
        ],
        pos: {
          lat: -23.5602798,
          lng: -46.6559448
        },
        googlePlace: 'ChIJcVxJBsxZzpQRFMJ_Q7lID8w',
        type: ['parking']
      },
      {
        name: 'Born To Crossfit',
        address: [
          'R. Diogo Jacomé, 661',
          'Moema, São Paulo',
          'SP, 04511, Brasil'
        ],
        phone: '(11) 94296-6624',
        pos: {
          lat: -23.5977982,
          lng: -46.6674756
        },
        googlePlace: 'ChIJ40wX2AFazpQRwDbHK9M_DdI',
        type: ['parking']
      },
      {
        name: 'Alameda Campinas',
        address: [
          'Alameda Campinas, 445',
          'Jardim Paulista, São Paulo',
          'SP, 01404-100, Brasil'
        ],
        pos: {
          lat: -23.5657148,
          lng: -46.65265509999999
        },
        googlePlace:
          'EktBbGFtZWRhIENhbXBpbmFzLCA0NDUgLSBKYXJkaW0gUGF1bGlzdGEsIFPDo28gUGF1bG8gLSBTUCwgMDE0MDQtMTAwLCBCcmF6aWwiMRIvChQKEgn3URm5x1nOlBHTNM9i0wEJ6BC9AyoUChIJJfBwmsZZzpQRNLtDV3SchRM',
        type: ['parking']
      },
      {
        name: 'Av. Faria Lima',
        address: [
          'Av. Brg. Faria Lima, 1572',
          'Jardim Paulistano, São Paulo',
          'SP, 01451-001, Brasil'
        ],
        phone: '(11) 3812-1866',
        open: true,
        hours: [
          ['segunda-feira', ' Atendimento 24 horas'],
          ['terça-feira', ' Atendimento 24 horas'],
          ['quarta-feira', ' Atendimento 24 horas'],
          ['quinta-feira', ' Atendimento 24 horas'],
          ['sexta-feira', ' Atendimento 24 horas'],
          ['sábado', ' Atendimento 24 horas'],
          ['domingo', ' Atendimento 24 horas']
        ],
        pos: {
          lat: -23.5715012,
          lng: -46.69091
        },
        googlePlace: 'ChIJTQw8QQtXzpQRqC3spwDZMOI',
        type: ['parking']
      },
      {
        name: 'Av. Berrini',
        address: [
          'Rua André Ampére, 65',
          'Cidade Monções, São Paulo',
          'SP, 04562-080, Brasil'
        ],
        phone: '(11) 3812-2002',
        open: true,
        hours: [
          ['segunda-feira', ' 07:00 – 20:30'],
          ['terça-feira', ' 07:00 – 20:30'],
          ['quarta-feira', ' 07:00 – 20:30'],
          ['quinta-feira', ' 07:00 – 20:30'],
          ['sexta-feira', ' 07:00 – 20:30'],
          ['sábado', ' Fechado'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -23.60974839999999,
          lng: -46.69388430000001
        },
        googlePlace: 'ChIJyQilm8tQzpQRt2fiotym1BA',
        type: ['parking']
      },
      {
        name: 'R. Augusta',
        address: [
          'R. Augusta, 101',
          'Consolação, São Paulo',
          'SP, 01305-000, Brasil'
        ],
        pos: {
          lat: -23.5505555,
          lng: -46.64716380000001
        },
        googlePlace: 'ChIJ7Vo9d0tYzpQRYEXmgBCMtic',
        type: ['parking']
      },
      {
        name: 'Pobre Juan - Vila Olímpia',
        address: [
          'R. Comendador Miguel Calfat, 525',
          'Vila Nova Conceição, São Paulo',
          'SP, 04537-082, Brasil'
        ],
        phone: '(11) 2397-0099',
        open: false,
        hours: [
          ['segunda-feira', ' 12:00 – 17:00'],
          ['terça-feira', ' 12:00 – 17:00'],
          ['quarta-feira', ' 12:00 – 17:00'],
          ['quinta-feira', ' 12:00 – 17:00'],
          ['sexta-feira', ' 12:00 – 17:00'],
          ['sábado', ' 12:00 – 17:00'],
          ['domingo', ' 12:00 – 17:00']
        ],
        pos: {
          lat: -23.5936534,
          lng: -46.677633
        },
        googlePlace: 'ChIJeTz9-VBXzpQRKiyUmAofCoc',
        type: ['parking']
      },
      {
        name: 'BK30 Largo do Arouche',
        address: [
          'Largo do Arouche, 77',
          'República, São Paulo',
          'SP, 01219-011, Brasil'
        ],
        phone: '(11) 94140-2116',
        open: true,
        hours: [
          ['segunda-feira', ' Atendimento 24 horas'],
          ['terça-feira', ' Atendimento 24 horas'],
          ['quarta-feira', ' Atendimento 24 horas'],
          ['quinta-feira', ' Atendimento 24 horas'],
          ['sexta-feira', ' Atendimento 24 horas'],
          ['sábado', ' Atendimento 24 horas'],
          ['domingo', ' Atendimento 24 horas']
        ],
        pos: {
          lat: -23.5417054,
          lng: -46.64494800000001
        },
        googlePlace: 'ChIJhXdZkkVYzpQRiLOGttP33AI',
        type: ['parking']
      },
      {
        name: 'Vela Bikes',
        address: [
          'R. Cunha Gago, 169',
          'Pinheiros, São Paulo',
          'SP, 05421-000, Brasil'
        ],
        phone: '(11) 4200-4950',
        open: true,
        hours: [
          ['segunda-feira', ' Fechado'],
          ['terça-feira', ' Fechado'],
          ['quarta-feira', ' 10:00 – 18:00'],
          ['quinta-feira', ' Fechado'],
          ['sexta-feira', ' Fechado'],
          ['sábado', ' 10:00 – 18:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -23.5670166,
          lng: -46.6907856
        },
        googlePlace: 'ChIJL-xzGGFXzpQR_X4Kin8W9lQ',
        type: ['store', 'charger']
      },
      {
        name: 'Vela Bikes',
        address: [
          'Alameda Prudente de Moraes, 1071',
          'Mercês, Curitiba',
          'PR, 80430-234, Brasil'
        ],
        phone: '(41) 98786-2553',
        open: true,
        hours: [
          ['segunda-feira', ' Fechado'],
          ['terça-feira', ' Fechado'],
          ['quarta-feira', ' 09:30 – 18:30'],
          ['quinta-feira', ' Fechado'],
          ['sexta-feira', ' Fechado'],
          ['sábado', ' 09:00 – 18:00'],
          ['domingo', ' Fechado']
        ],
        pos: {
          lat: -25.4311768,
          lng: -49.2818262
        },
        googlePlace: 'ChIJY1lrO13l3JQRfw9lIVJSCU8',
        type: ['store', 'charger']
      }
    ])
  )

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
