const { json } = require('micro')
var Airtable = require('airtable')
const { parse } = require('url')
var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base('app45DQmaiCkzYaZ9')

module.exports = async (req, res) => {
  const data = await json(req)
  base('Table 1').create(data, function (err, record) {
    if (err) {
      console.error(err)

      return
    }

    res.end('ok')
  })
}
