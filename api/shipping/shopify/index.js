const { json } = require('micro')
const { parse } = require('url')
const correios = require('node-correios')()

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const { rate: { origin, destination, items } } = await json(req)
  const totalGrams = items.map(item => item.grams).reduce((partial_sum, a) => partial_sum + a,0)
  const totalPrice = items.map(item => item.price).reduce((partial_sum, a) => partial_sum + a,0)

  if (destination.name !== 'Diogo Vianna') return

  if (totalPrice < 400000) {
    const queryArgs = {
      nCdServico: '40010,41106',
      sCepOrigem: origin.postal_code.replace('-', ''),
      sCepDestino: destination.postal_code.replace('-', ''),
      nVlPeso: 1,
      nCdFormato: 1,
      nVlAltura: 15,
      nVlLargura: 20,
      nVlComprimento: 40,
      nVlDiametro: 20,
      nVlValorDeclarado: totalPrice/100
    }
    return correios.calcPrecoPrazo(queryArgs, (err, result) => {
      console.log(result)
      return res.end(JSON.stringify({
        rates: mapCorreiosResultToRate(result)
      }))
    })
  } else if (destination.city === 'São Paulo') {
    return (
      res.end(JSON.stringify({
        rates: [{
          service_name: 'Frete Gratis',
          service_code: 'FG',
          total_price: '0',
          description: '3 - 5 dias úteis',
          currency: 'BRL'
        }]
      }))
    )
  } else if (['SP', 'RJ'].some(v => v === destination.province)) {
    return (
      res.end(JSON.stringify({
        rates: [{
          service_name: 'Transportadora',
          service_code: 'TR',
          total_price: '12000',
          description: '6 dias úteis',
          currency: 'BRL'
        }]
      }))
    )
  } else if (['DF', 'RS', 'SC', 'MT', 'MG', 'PR', 'MS', 'BA'].some(v => v === destination.province)) {
    return (
      res.end(JSON.stringify({
        rates: [{
          service_name: 'Transportadora',
          service_code: 'TR',
          total_price: '23000',
          description: '7 dias úteis',
          currency: 'BRL'
        }]
      }))
    )
  } else {
    return res.end(JSON.stringify({
      rates: [{
        service_name: 'Transportadora',
        service_code: 'TR',
        total_price: '28000',
        description: '8 dias úteis',
        currency: 'BRL'
      }]
    }))
  }
}

const mapCorreiosResultToRate = (result) => result.map(r => ({ //map here or map out?
  service_name: 'Correios - ' + r.Codigo,
  service_code: r.Codigo,
  total_price: parseFloat(r.Valor.split(',').join('.'))*100,
  description: r.PrazoEntrega + ' dias úteis',
  currency: 'BRL'
}))
