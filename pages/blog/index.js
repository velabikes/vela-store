import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Prismic from 'prismic-javascript'

const Blog = ({ posts }) =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title='Blog'
      />
      {posts.map(({ data: { cover, title, teaser }, uid }) => (
        <section>
          <img src={cover.url} alt={cover.alt} />
          <a href={`/blog/${uid}`}><h2>{title[0].text}</h2></a>
          <p>{teaser[0].text}</p>
          <p>{JSON.stringify(teaser)}</p>
        </section>
      ))}
    </Main>
  </PaddedView>

Blog.getInitialProps = async ({ req }) => {
  const apiEndpoint = 'https://velabikes.prismic.io/api/v2'
  const api = await Prismic.getApi(apiEndpoint, { req })
  const { results } = await api.query('')

  return ({ posts: results })
}

export default Blog
