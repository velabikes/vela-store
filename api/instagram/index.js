const https = require('https')
const { getFromCache } = require('../../lib/cache')

const instagram = async () =>
  new Promise((resolve, reject) => {
    https.get('https://www.instagram.com/velabikes/?__a=1', res => {
      let data = ''
      res.on('data', (chunk) => data += chunk)

      res.on('end', () => {
        const {
          graphql: { user: { edge_owner_to_timeline_media: { edges } } }
        } = JSON.parse(data)

        const images = edges.map(edge => {
          const resource = edge.node.thumbnail_resources.find(resource => resource.config_width > 350)

          return {
            id: edge.node.shortcode,
            url: resource.src
          }
        })

        if (images) return resolve(images)
      })
    }).on("error", () => resolve([]))
  })

module.exports = async (req, res) => {
  const images = await getFromCache('instagram', instagram)
  res.setHeader('Content-Type', 'application/json')

  return res.end(JSON.stringify(images))
}
