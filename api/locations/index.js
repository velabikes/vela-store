const GoogleMaps = require("@google/maps");

module.exports = async (req, res) => {
  return res.end(
    JSON.stringify([
      {
        name: "Alva Coworking",
        address: [
          "R. Simão Álvares, 97",
          "Pinheiros, São Paulo",
          "SP, 05417-030, Brasil",
        ],
        phone: "(11) 4550-4701",
        pos: {
          lat: -23.566483,
          lng: -46.6870085,
        },
        googlePlace: "ChIJM0wFcdxXzpQRo_-Wyy4K_qE",
        type: ["charger"],
      },
      {
        name: "Voltage Bikes",
        address: [
          "R. Fernandes de Barros, 832",
          "Alto da XV, Curitiba",
          "PR, 80045-390, Brasil",
        ],
        phone: "(41) 3535-0330",
        pos: {
          lat: -25.423713,
          lng: -49.24581,
        },
        googlePlace: "ChIJ11w58Urk3JQRmxITqDuv1OI",
        type: ["service", "store"],
      },
      {
        name: "Conserta Bike Rio Claro",
        address: [
          "Avenida 61, 1040 - Térreo",
          "Jardim Itapuã, Rio Claro",
          "SP, 13501-613, Brasil",
        ],
        phone: "(19) 99426-1010",
        pos: {
          lat: -22.438018,
          lng: -47.563659,
        },
        googlePlace: "ChIJx3pF7n7ax5QRFVQG0nTnhZ0",
        type: ["service"],
      },
      {
        name: "Barcellos Ipanema",
        address: [
          "Avenida Rainha Elisabeth, 440",
          "Ipanema, Rio de Janeiro",
          "RJ, 22081-042, Brasil",
        ],
        phone: "(21) 3489-9368",
        pos: {
          lat: -22.985616,
          lng: -43.193712,
        },
        googlePlace: "ChIJhyeAVaXVmwAROY_7-MDCOLw",
        type: ["store", "service", "charger"],
      },
      {
        name: "Barcellos Sports Niterói",
        address: [
          "Rua Joaquim Távora, 33, Loja 03",
          "Icaraí, Niterói",
          "RJ, 24230-541, Brasil",
        ],
        phone: "(21) 2710-8069",
        pos: {
          lat: -22.912072,
          lng: -43.108285,
        },
        googlePlace: "ChIJhyeAVaXVmwAROY_7-MDCOLw",
        type: ["store", "service", "charger"],
      },
      {
        name: "Adilson Pacheco",
        address: [
          "Atende em Domicilio",
          "Adilson Pacheco tem anos de experiência com bicicletas elétricas. Atende em toda Rio de Janeiro.",
        ],
        phone: "(21) 96440-9727",
        pos: {
          lat: -22.808638,
          lng: -43.328631,
        },
        googlePlace: "ChIJ_dGYdS17mQAR0ZpXZNonYKM",
        type: ["service"],
      },
      {
        name: "Fat Bike Floripa",
        address: [
          "Rod. Dr. Antônio Luiz Moura Gonzaga, 3339 - A12",
          "Rio Tavares, Florianópolis",
          "SC, 88048-301, Brasil",
        ],
        phone: "(48) 99912-5999",
        pos: {
          lat: -27.657597,
          lng: -48.486085,
        },
        googlePlace: "ChIJb2-Lz5s7J5URVfq9PsVKyfI",
        type: ["service"],
      },
      {
        name: "Clinica das Bicicletas",
        address: [
          "R. Arthur de Azevêdo Machado, 1250",
          "STIEP, Salvador",
          "BA, 41760-000, Brasil",
        ],
        phone: "(71) 3014-6717",
        pos: {
          lat: -12.988539,
          lng: -38.447918,
        },
        googlePlace: "ChIJVVXMUwkbFgcRZlxt-2rLBl8",
        type: ["service"],
      },
      {
        name: "Top Bike",
        address: [
          "Rua Pium-Í, 344",
          "Cruzeiro, Belo Horizonte",
          "MG, 30310-080, Brasil",
        ],
        phone: "(31) 99313-4888",
        pos: {
          lat: -19.942624,
          lng: -43.930013,
        },
        googlePlace: "ChIJS5IjOM-ZpgARucuoR3nIWoI",
        type: ["service"],
      },
      {
        name: "Fitzz eBike",
        address: [
          "R. das Cerejeiras, 411",
          "Carvoeira, Florianópolis",
          "SC, 88040-5410, Brasil",
        ],
        phone: "(48) 99110-8989",
        pos: {
          lat: -27.605697,
          lng: -48.52817,
        },
        googlePlace: "ChIJl4mz8q05J5URL6V8HZBJm60",
        type: ["service"],
      },
      {
        name: "Pró-Bike",
        address: [
          "Av. Marcelino Pires, 2831",
          "Jardim Climax, Dourados",
          "MS, 79800-003, Brasil",
        ],
        phone: "(67) 3427-5035",
        pos: {
          lat: -22.226551,
          lng: -54.801404,
        },
        googlePlace: "ChIJGe5wTDGoiZQRtOU_mEtGCIg",
        type: ["service"],
      },

      {
        name: "De Lá Do Pão",
        address: [
          "Rua Harmonia, 1158",
          "Vila Madalena, São Paulo",
          "SP, 05435-001, Brasil",
        ],
        phone: "(11) 99693-1212",
        pos: {
          lat: -23.5486881,
          lng: -46.69166939999999,
        },
        googlePlace: "ChIJyUY7cy9XzpQRHUOkTVXkURY",
        type: ["charger"],
      },
      {
        name: "SOW Cake Lounge",
        address: [
          "Av. Conselheiro Rodrigues Alves, 456",
          "Vila Mariana, São Paulo",
          "SP, 04014-001, Brasil",
        ],
        phone: "(11) 4328-0008",
        pos: {
          lat: -23.5839645,
          lng: -46.6424742,
        },
        googlePlace: "ChIJc7C0To9ZzpQRxI8xZGKRSRM",
        type: ["charger"],
      },
      {
        name: "Bacio di Latte Moema",
        address: [
          "R. Gaivota, 544",
          "Moema, São Paulo",
          "SP, 04522-031, Brasil",
        ],
        phone: "(11) 3063-2084",
        pos: {
          lat: -23.6011841,
          lng: -46.6656548,
        },
        googlePlace: "ChIJAQCU4gNazpQRgrm7yhcWeKU",
        type: ["charger"],
      },

      {
        name: "Bacio di Latte Pinheiros",
        address: [
          "R. dos Pinheiros, 404",
          "Pinheiros, São Paulo",
          "SP, 05422-000, Brasil",
        ],
        phone: "(11) 3064-0827",
        pos: {
          lat: -23.5651858,
          lng: -46.6821703,
        },
        googlePlace: "ChIJcw9c6shXzpQRHtUh-HBq6-M",
        type: ["charger"],
      },
      {
        name: "Bacio di Latte Itaim Bibi",
        address: [
          "R. Manuel Guedes, 77",
          "Itaim Bibi, São Paulo",
          "SP, 01407-200, Brasil",
        ],
        phone: "(11) 3168-7187",
        pos: {
          lat: -23.5811913,
          lng: -46.6798443,
        },
        googlePlace: "ChIJ_elqH0FXzpQRRoAPxQyLNvs",
        type: ["charger"],
      },
      {
        name: "Luiz Volpato Arq",
        address: [
          "R. Jerônimo Durski, 897",
          "Bigorrilho, Curitiba",
          "PR, 80730-290, Brasil",
        ],
        phone: "(41) 3018-1701",
        pos: {
          lat: -25.439504,
          lng: -49.300724,
        },
        googlePlace: "ChIJNcnhu33k3JQRhmvMJll-Of4",
        type: ["charger"],
      },
      {
        name: "Velodrome",
        address: [
          "R. Conselheiro Brotero, 744",
          "Santa Cecilia, São Paulo",
          "SP, 01232-010, Brasil",
        ],
        phone: "(11) 2872-5852",
        pos: {
          lat: -23.5328478,
          lng: -46.659321,
        },
        googlePlace: "ChIJNd83zRBYzpQR4XZlFQLIh5Q",
        type: ["charger"],
      },
      {
        name: "Bike House",
        address: [
          "Rua Cardeal Arcoverde, 2062",
          "Pinheiros",
          "São Paulo - SP",
          "SP, 05408-002, Brasil",
        ],
        phone: "(11) 9.6541-7538",
        extra: [
          "Essa é uma oficina recomendada pelos nossos clientes, está aberta de segunda à sexta das 9 às 19h e, aos sábados, das 9 às 13:30.",
        ],

        open: true,
        pos: {
          lat: -23.562933,
          lng: -46.69088,
        },
        googlePlace: "ChIJcyCY9qFXzpQREiC7QlNLwDY",
        type: ["service"],
      },
      {
        name: "MagaBike",
        address: [
          "R. Padre Artur Somensi, 103",
          "Vila Madalena",
          "São Paulo - SP",
          "SP, 05443-030 Brasil",
        ],
        phone: "(11) 98471-9693",
        extra: [
          "Essa é uma oficina recomendada pelos nossos clientes, está aberta de segunda à sexta das 9 às 18h e, aos sábados, das 9 às 15h.",
        ],

        open: true,
        pos: {
          lat: -23.553633,
          lng: -46.697323,
        },
        googlePlace: "ChIJY38hqblXzpQRlExwKXFwHqY",
        type: ["service"],
      },
      {
        name: "Pedalla",
        address: [
          "Rua Solon, 795",
          "Bom Retiro",
          "São Paulo - SP",
          "SP, 01127-010 Brasil",
        ],
        phone: "(11) 9.7386-6788",
        extra: [
          "Essa é uma oficina recomendada pelos nossos clientes, está aberta de segunda à sexta das 8:30 às 17h e, aos sábados, das 9:30 às 12:00.",
        ],

        open: true,
        pos: {
          lat: -23.525521,
          lng: -46.643825,
        },
        googlePlace: "ChIJHQLVA29YzpQReEcaDlfIA_8",
        type: ["service"],
      },
      {
        name: "Vélo 27",
        address: [
          "Condomínio do Centro Comercial Long Beach",
          "Av. Hugo Viola, 955",
          "Loja 8",
          "Mata da Praia, Vitória",
          "ES, 29065-475, Brasil",
        ],
        phone: "(27) 9.9251-5669",
        open: true,
        pos: {
          lat: -20.2792453,
          lng: -40.2953256,
        },
        googlePlace: "ChIJiQg_EPkXuAARDOheZGROQDY",
        type: ["service"],
      },
      {
        name: "Super Bike 101",
        address: [
          "CLSW 101 Bloco C, s/n",
          "Loja 30/32",
          "Cruzeiro / Sudoeste / Octogonal, Brasília",
          "DF, 70670-503, Brasil",
        ],
        phone: "(61) 3344-8042",
        open: true,
        pos: {
          lat: -15.7986565,
          lng: -47.9209296,
        },
        googlePlace: "ChIJ_fqvTp06WpMR1dgVjHcw6Js",
        type: ["service", "charger"],
      },
      {
        name: "Reciclo Bikes",
        address: [
          "Mercado da Encruzilhada",
          "R. Dr. José Maria, s/n",
          "box 220",
          "Encruzilhada, Recife",
          "PE, 52041-015, Brasil",
        ],
        phone: "(81) 3048-4050",
        open: true,
        pos: {
          lat: -8.0366288,
          lng: -34.8920891,
        },
        googlePlace: "ChIJWz5XtfAYqwcRPowRixw4slA",
        type: ["service", "charger"],
      },
      {
        name: "Giro Master Bike Shop",
        address: [
          "CLN 406 Bl B Loj 2, 6 e 8",
          "Asa Norte, Brasília",
          "DF, 70847-520, Brasil",
        ],
        phone: "(61) 3202-2775",
        open: true,
        pos: {
          lat: -15.7669266,
          lng: -47.8786118,
        },
        googlePlace: "ChIJKcPVzHI7WpMRaU9RkzCJHTY",
        type: ["service", "charger"],
      },
      {
        name: "Bruno Bike",
        address: [
          "Rua Vitalina, 31",
          "Vila São Luís, Nova Iguaçu",
          "RJ, 26012-410, Brasil",
        ],
        phone: "(21) 98121-8727",
        open: true,
        pos: {
          lat: -22.739496,
          lng: -43.436614,
        },
        googlePlace: "ChIJo-1_azdmmQARM9b1IhpUdRo",
        type: ["service"],
      },
      {
        name: "Magrela Oficina e Café",
        address: [
          "Estr. José Chies, 150",
          "Pte. Sêca, Carlos Barbosa",
          "RS, 95185-000, Brasil",
        ],
        phone: "(54) 99184-0145",
        pos: {
          lat: -29.3096603,
          lng: -51.49419049999999,
        },
        googlePlace: "ChIJcexbQKAbHJURcWBerIApvFI",
        type: ["service", "charger"],
      },
      {
        name: "Bicicletaria Urbana Bike Viva",
        address: [
          "Av. Washington Soares, 2565",
          "Edson Queiroz, Fortaleza",
          "CE, 60811-341, Brasil",
        ],
        phone: "(85) 99205-3891",
        pos: {
          lat: -3.7850419,
          lng: -38.4825672,
        },
        googlePlace: "ChIJBzUXeYVIxwcRrjy1Utb3VCs",
        type: ["service"],
      },
      {
        name: "Bicicletaria Cross Bike",
        address: [
          "R. Henrique Martarello, 559",
          "Vila Brasil, São João da Boa Vista",
          "SP, 13875-031, Brasil",
        ],
        phone: "(19) 3631-0034",
        pos: {
          lat: -21.986355,
          lng: -46.781424,
        },
        googlePlace: "ChIJbYBYc6bLyZQRR_tQCYahjaE",
        type: ["service", "charger"],
      },
      {
        name: "Vila Velô",
        address: [
          "Rua Sete de Abril, 291",
          "Floresta, Porto Alegre",
          "RS, 90220-130 Brasil",
        ],
        phone: "(51) 3092-0070",
        pos: {
          lat: -30.018188631201216,
          lng: -51.2087267387078,
        },
        googlePlace: "ChIJ4UcEfrx5GZURpNp9gu16Gq0",
        type: ["service"],
      },
      {
        name: "Ciclo Cerrado",
        address: [
          "Av. João Naves de Ávila, 7285",
          "Santa Mônica, Uberlândia",
          "MG, 38408-311, Brasil",
        ],
        phone: "(34) 3229-6664",
        pos: {
          lat: -18.9388577,
          lng: -48.224602,
        },
        googlePlace: "ChIJb_VMpotPpJQREA-m3334ZD8",
        type: ["service", "charger"],
      },
      {
        name: "Bicicletaria Recreio",
        address: [
          "R. Rebouças, 250",
          "Vitoria, Londrina",
          "PR, 86060-680, Brasil",
        ],
        phone: "(43) 3327-6295",
        pos: {
          lat: -23.3037226,
          lng: -51.178016,
        },
        googlePlace: "ChIJu8ETGbNE65QRo_9GRkhKXio",
        type: ["service"],
      },
      {
        name: "Saluh Oficina",
        address: [
          "R. Batista Cepelos, 283",
          "Vila Mariana, São Paulo",
          "SP, 04109-120, Brasil",
        ],
        phone: "(11) 97422-8054",
        pos: {
          lat: -23.5771711,
          lng: -46.6328599,
        },
        googlePlace: "ChIJUb-kvoJZzpQRcKWYxtrRZY0",
        type: ["service", "charger"],
      },
      {
        name: "Oficina de Bicicletas do CP",
        address: [
          "R. Maracá, 429A",
          "Jabaquara, São Paulo",
          "SP, 04313-210, Brasil",
        ],
        phone: "(11) 91682-5789",
        pos: {
          lat: -23.636508,
          lng: -46.638729,
        },
        googlePlace: "ChIJDwKx3eRazpQRBxTufPiqodw",
        type: ["service"],
      },
      {
        name: "Conserta Bike Santos SP",
        address: [
          "R. Joaquim Távola, 46",
          "Vila Matias, Santos",
          "SP, 11075-300, Brasil",
        ],
        phone: "(13) 98182-4078",
        pos: {
          lat: -23.949596,
          lng: -46.327455,
        },
        googlePlace: "ChIJozRpnnYDzpQRNUdHQGMLE2c",
        type: ["service"],
      },
      {
        name: "JRV Bikes",
        address: [
          "Av. Antônio Emmerich, 590",
          "Vila Cascatinha, São Vicente",
          "SP, 11390-010, Brasil",
        ],
        phone: "(13) 99678-9710",
        pos: {
          lat: -23.961183,
          lng: -46.377156,
        },
        googlePlace: "ChIJc0elZqMczpQRoo7dinqfu2w",
        type: ["service"],
      },
      {
        name: "Conserta Bike Blumenau",
        address: [
          "R. Benjamin Constant, 2670 - Loja 9",
          "Vila Nova, Blumenau",
          "SC, 89035-100, Brasil",
        ],
        phone: "(47) 99189-9930",
        pos: {
          lat: -26.905124,
          lng: -49.092984,
        },
        googlePlace: "ChIJp0dBOM4e35QRZoSJ6XMTlgk",
        type: ["service"],
      },
      {
        name: "Bike Tools Service & Shop",
        address: [
          "Av. Albino J. B. de Oliveira, 1823",
          "Jd. Afife, Campinas",
          "SP, 13084-551, Brasil",
        ],
        phone: "(19) 99706-9117",
        pos: {
          lat: -22.822273,
          lng: -47.080792,
        },
        googlePlace: "ChIJcX0dG8vGyJQRhmsONaVAJto",
        type: ["service"],
      },
      {
        name: "Outplay BiKe",
        address: [
          "Rua Domingos Rodrigues, 162",
          "Lapa, Campinas",
          "SP, 05075-000, Brasil",
        ],
        phone: "(11) 91482-7272",
        pos: {
          lat: -23.519701,
          lng: -46.707874,
        },
        googlePlace: "ChIJGboBv2H4zpQRjCOR9BlOsP4",
        type: ["service"],
      },
      {
        name: "JC Bikes SP",
        address: [
          "Av. Cruzeiro do Sul, 2635",
          "Santana, São Paulo",
          "SP, 02031-000, Brasil",
        ],
        phone: "(11) 99747-5470",
        pos: {
          lat: -23.507874,
          lng: -46.625151,
        },
        googlePlace: "ChIJn9lYZoJYzpQRrWnR96kotfs",
        type: ["service"],
      },
      {
        name: "Fábrica Vela Brasil",
        address: [
          "Rua General Julio Marcondes Salgado, 106",
          "Santa Cecília, São Paulo",
          "SP, 01201-020, Brasil",
        ],
        phone: "(11) 96393-4737",
        pos: {
          lat: -23.535952,
          lng: -46.650572,
        },
        googlePlace: "ChIJwUtbbUBYzpQRqFfbLYX1-Ro",
        type: ["store", "charger", "service"],
      },

      /// {
      //  name: "Leva & Traz",
      //  address: [
      //   "Região de atendimento do serviço de retidada e entrega da sua Vela. Para serviços realizados com a fábrica",
      //   "São Paulo - SP",
      //  "São Paulo - SP",
      //   ],
      //  phone: "WhatsApp - (11) 96393-4737",
      //  pos: {
      //   lat: -23.535952,
      //   lng: -46.650572,
      // },
      // googlePlace: "ChIJwUtbbUBYzpQRqFfbLYX1-Ro",
      //   type: ["delivery"],
      //   },
      {
        name: "Tamanduá Bike Store LTDA",
        address: [
          "R. Sete de Setembro, 1495",
          "Aeroporto, Corumbá",
          "MS, 79332-010, Brasil",
        ],
        phone: "(67) 3232-9743",
        pos: {
          lat: -19.0110916,
          lng: -57.654644,
        },
        googlePlace: "ChIJr5wbjnChh5MRLdm1W9GOU_g",
        type: ["service"],
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
  );

  const googleMapsClient = GoogleMaps.createClient({
    key: process.env.GOOGLE_SERVER_KEY,
  });

  const fetchLocationData = (location) =>
    new Promise((resolve, reject) =>
      googleMapsClient.place(
        { placeid: location.googlePlace, language: "pt-BR" },
        (err, result) => {
          if (!err) {
            return resolve({
              ...normalizePlace(result.json.result),
              ...location,
            });
          }

          return reject(err);
        }
      )
    );

  const normalizeAddress = (address) => address.split(" - ");

  const normalizeOpeningText = (day) =>
    day.split(/:(.+)/).filter((_, i) => i !== 2);

  /* eslint-disable camelcase */
  const normalizePlace = ({
    name,
    formatted_address,
    formatted_phone_number,
    opening_hours,
    geometry,
  }) => ({
    name: name,
    address: normalizeAddress(formatted_address),
    phone: formatted_phone_number,
    open: opening_hours && opening_hours.open_now,
    hours:
      opening_hours && opening_hours.weekday_text.map(normalizeOpeningText),
    pos: geometry.location,
  });
  /* eslint-enable camelcase */

  try {
    const placeArray = await Promise.all(locations.map(fetchLocationData));
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-maxage=86400");

    return res.end(JSON.stringify(placeArray));
  } catch (err) {
    res.statusCode = 500;

    return res.end();
  }
};
