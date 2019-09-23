const fetch = require('isomorphic-fetch')
const GraphQLClient = require('graphql-request')
const pipefyURL = 'https://api.pipefy.com/graphql'
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.PIPEFY_KEY}`,
}
const createCard = async (Dates) => {
    const graphQLClient = new GraphQLClient.GraphQLClient(pipefyURL, {
      headers: defaultHeaders
    })  
    const query = `mutation($input: CreateCardInput!) {
    createCard(input: $input) {
      card {
        title
      }
    }
  }`
  const variables = Dates

  const updateMeta = await graphQLClient.request(query, variables)
  console.log('updateMeta:', JSON.stringify(updateMeta));
}

module.exports = {
    createCard
}