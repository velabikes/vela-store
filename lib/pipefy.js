import GraphQLClient from 'graphql-request'

const pipefyURL = 'https://api.pipefy.com/graphql'
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.PIPEFY_KEY}`
}

export const createCard = async (variables) => {
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
  const card = await graphQLClient.request(query, variables)

  return card
}
