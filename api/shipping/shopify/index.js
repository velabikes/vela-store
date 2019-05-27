const { json } = require('micro')
const { parse } = require('url')

module.exports = async (req, res) => {
  const data = await json(req)
  console.log(data)
  res.send({
    rates: [{
      service_name: 'Servico de teste',
      service_code: 'ST',
      total_price: '1295',
      description: 'test description',
      currency: 'BRL'
    }]
  })
}
