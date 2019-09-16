import { getPrismic } from 'lib/prismic'
import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Grid from 'components/Grid'
import { Date, RichText } from 'prismic-reactjs'
import dayjs from 'dayjs'

const BlogPostPage = ({ cover, title, teaser, body, post_date }) =>
  <PaddedView>
    <Main>
      <Head>
        <title>{title[0].text}</title>
      </Head>
      <MainHeader
        title={title[0].text}
        tagline={<div>
          <div>{teaser[0].text}</div>
          <div><small>{dayjs(Date(post_date)).format('DD/MM/YYYY')}</small></div>
        </div>}
      />
      <Grid template='1fr 1fr'>
        <div className='PostImage'>
          <img src={cover.url} alt={cover.alt} />
        </div>
        <div>
          <RichText render={body} />
        </div>
      </Grid>
    </Main>
    <style jsx>{`
        .SectionBody {
        margin-bottom: 3em;
      }
    `}</style>
  </PaddedView>

BlogPostPage.getInitialProps = async ({ req, query }) => {
  const { slug } = query
  const prismic = await getPrismic(req)
  const { data } = await prismic.getByUID('blog_post', slug)

  return { ...data }
}

export default BlogPostPage
