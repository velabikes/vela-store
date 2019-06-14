const { json } = require('micro')
const { flushCache } = require('../../../lib/cache')

module.exports = async (req, res) => {
  const { method, headers: { authorization } } = req
  res.setHeader('Content-Type', 'application/json')

  if (method !== 'POST') {
    res.statusCode = 404
    return res.end()
  }

  if (!authorization || authorization !== 'vela-token') {
    res.statusCode = 403
    return res.end()
  }

  flushCache()
  
  return res.end(JSON.stringify({ message: 'successful cleaned'}))
}