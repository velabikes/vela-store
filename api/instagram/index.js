module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
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
}