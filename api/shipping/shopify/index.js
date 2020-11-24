const { json } = require('micro')
const correios = require('node-correios')()
const fetch = require('node-fetch')

const freeShippingArray = [
  'Osasco',
  'Curitiba',
  'São Paulo',
  'Guarulhos',
  'Diadema',
  'Santo André',
  'São Caetano do Sul',
  'São Bernardo do Campo',
  'Itupeva',
  'Suzano',
  'Mogi das Cruzes'
]

/**
* Timeout function
* @param {Integer} time (miliseconds)
* @param {Promise} promise
*/
const timeout = (time, promise) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error('Request timed out.'))
    }, time);
    promise.then(resolve, reject);
  });
}

const normalizeText = text => {
  const specialChars = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ'
  const normalChars = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh'
  const expression = new RegExp(specialChars.split('').join('|'), 'g')

  return text.toString().toLowerCase().trim()
    .replace(expression, index => normalChars.charAt(specialChars.indexOf(index)))
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const { rate: { origin, destination, items } } = await json(req)
  const totalGrams = items.map(item => item.grams).reduce((b, a) => b + a, 0)
  const totalPrice = items.map(item => item.price).reduce((b, a) => b + a, 0)

  const cepAvailable = destination.postal_code.replace('-', '').padEnd(8, '0')
  let response
  let cityName
  try {
    response = await timeout(5000, fetch(`http://www.cepaberto.com/api/v3/cep?cep=${cepAvailable}`, {
      headers: {
        'Authorization': `Token token=${process.env.CEP_ABERTO_TOKEN}`
      }
    }))
    const info = await response.json()
    cityName = info.cidade.nome
  } catch(e) {
    console.warn(e)
    cityName = 'N/A'
  }

  if (items.length === 1 && items[0].sku === 'VEL-GRU19') {
    res.end(JSON.stringify({
      rates: [{
        service_name: 'Frete Grátis',
        service_code: 'FG',
        total_price: '0',
        description: '6-11 dias úteis',
        currency: 'BRL'
      }]
    }))
  }

  if (totalGrams < 20000) {

    console.log(totalGrams + ' = TOTALGRAMS <<< 20000')

    const queryArgs = {
      nCdServico: '40010',
      sCepOrigem: origin.postal_code.replace('-', ''),
      sCepDestino: destination.postal_code.replace('-', ''),
      nVlPeso: 1,
      nCdFormato: 1,
      nVlAltura: 15,
      nVlLargura: 20,
      nVlComprimento: 40,
      nVlDiametro: 20,
      nVlValorDeclarado: totalPrice / 100
    }

    console.log(JSON.stringify(queryArgs) + ' = QUERYARGS')

    return correios.calcPrecoPrazo(queryArgs, (err, result) => {
      if (err) return
      // console.log(items)
      // console.log("\n")
      return res.end(JSON.stringify({
        rates: mapCorreiosResultToRate(result)
      }))
    })
  } else { // eslint-disable-line
    if (freeShippingArray.includes(cityName)) {
      return (
        res.end(JSON.stringify({
          rates: [{
            service_name: 'Frete Grátis',
            service_code: 'FG',
            total_price: '0',
            description: 'Produção + 18 dias úteis',
            currency: 'BRL'
          }]
        }))
      )
    }
    else {
      const totalShippingPrice = 23000 * Math.round(totalGrams / 26000)
      return (
        res.end(JSON.stringify({
          rates: [{
            service_name: 'Transportadora',
            service_code: 'FGN',
            total_price: totalShippingPrice.toString(),
            description: 'Produção + 18 dias úteis',
            currency: 'BRL'
          }]
        }))
      )
    }
  }
}

const mapCorreiosResultToRate = (result) => result.map(r => {
  const correiosReturn = ({ // map here or map out?
    service_name: `Sedex`,
    service_code: r.Codigo,
    total_price: parseFloat(r.Valor.split(',').join('.')) * 100,
    description: `${r.PrazoEntrega} dias úteis`,
    currency: `BRL`
  })

  console.log(JSON.stringify(correiosReturn) + ' = CORREIOSRETURN')

  return correiosReturn
})
