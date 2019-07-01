const fetch = require('isomorphic-fetch')

const instagramGetImages = async () => {
  const response = await fetch('https://www.instagram.com/velabikes/?__a=1')
  const {
    graphql: { user: { edge_owner_to_timeline_media: { edges } } }
  } = await response.json()

  const images = edges.map(edge => {
    const resource = edge.node.thumbnail_resources.find(resource => resource.config_width > 350)

    return {
      id: edge.node.shortcode,
      url: resource.src
    }
  })

  return images
}

module.exports = async (req, res) => {
  const images = await instagramGetImages()
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 's-maxage=10800')

  return res.end(JSON.stringify(images))
}
