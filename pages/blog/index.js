import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Prismic from 'prismic-javascript'
import Grid from 'components/Grid'
import Card from 'components/Card'

const Blog = ({ posts }) =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title='Blog'
      />
      <section>
        <Grid template='1fr 1fr 1fr'>
          {posts.map(({ data: { cover, title, teaser }, uid }) => (
            <Card
              media={<a href={`/blog/${uid}`}><img src={cover.url} alt={cover.alt} /></a>}
            >
              <a href={`/blog/${uid}`}><h2>{title[0].text}</h2></a>
              <p>{teaser[0].text}</p>
            </Card>
          ))}
        </Grid>
      </section>
    </Main>
    <style jsx>{`

    `}</style>
  </PaddedView>

Blog.getInitialProps = async ({ req }) => {
  const apiEndpoint = 'https://velabikes.prismic.io/api/v2'
  const api = await Prismic.getApi(apiEndpoint, { req })
  const { results } = await api.query('')

  return ({ posts: results })
}

export default Blog
