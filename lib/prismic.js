import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://velabikes.prismic.io/api/v2'

export const getPrismic = (req) => Prismic.getApi(apiEndpoint, { req })

export const Predicates = Prismic.Predicates
