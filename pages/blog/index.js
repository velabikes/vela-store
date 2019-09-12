import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Prismic from 'prismic-javascript'
import Grid from 'components/Grid'
import Card from 'components/Card'
import Button from 'components/Button'
import { NextIcon } from 'components/Icons'

const Blog = ({ posts, highlight }) =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title='Blog'
      />
      <section>
        {[highlight].map(({ data: { cover, title, teaser }, uid }) => (
          <Card
            horizontal
            media={<a href={`/blog/${uid}`}><img src={cover.url} alt={cover.alt} /></a>}
          >
            <a href={`/blog/${uid}`}><h2>{title[0].text}</h2></a>
            <p>{teaser[0].text}</p>
            <div className='actions'>
              <Button
                onClick={() => null}
                primary
              >
                Ler mais <NextIcon fill='#FFFFFF' />
              </Button>
            </div>
          </Card>
        ))}
      </section>
      <br />
      <section>
        <Grid template='1fr 1fr 1fr'>
          {posts.map(({ data: { cover, title, teaser }, uid }) => (
            <Card
              media={<a href={`/blog/${uid}`}><img src={cover.url} alt={cover.alt} /></a>}
            >
              <a href={`/blog/${uid}`}><h2>{title[0].text}</h2></a>
              <p>{teaser[0].text}</p>
              <div className='actions'>
                <a href={`/blog/${uid}`}>Ler mais  <NextIcon fill='#51776B' /></a>
              </div>
            </Card>
          ))}
        </Grid>
      </section>
    </Main>
    <style jsx>{`
      .actions {
        position: absolute;
        bottom: 24px;
        right: 24px;
        display: flex;
      }
    `}</style>
  </PaddedView>

Blog.getInitialProps = async ({ req }) => {
  const apiEndpoint = 'https://velabikes.prismic.io/api/v2'
  const api = await Prismic.getApi(apiEndpoint, { req })
  const { results } = await api.query('')
  const posts = results.slice()
  posts.shift()

  return ({ posts: posts, highlight: results[0] })
}

export default Blog
