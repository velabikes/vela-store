import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Grid from 'components/Grid'
import Prismic from 'prismic-javascript'
import { Date, RichText } from 'prismic-reactjs'
import dayjs from 'dayjs'

const BlogPostPage = ({ cover, title, teaser, body, date }) =>
  <PaddedView>
    <Main>
      <Head>
        <title>{title[0].text}</title>
      </Head>
      <MainHeader
        title={title[0].text}
        tagline={<div>
          <div>{teaser[0].text}</div>
          <div><small>{dayjs(Date(date)).format('DD/MM/YYYY - HH:MM')}</small></div>
        </div>}
      />
    </Main>

    <Grid template='1fr 1fr'>
      <div className='PostImage'>
        <img src={cover.url} alt={cover.alt} />
      </div>
      <div>
        <RichText render={body} />
      </div>
    </Grid>

    <style jsx>{`
        .SectionBody {
        margin-bottom: 3em;
      }
    `}</style>
  </PaddedView>

BlogPostPage.getInitialProps = async ({ req, query }) => {
  const { slug } = query
  const apiEndpoint = 'https://velabikes.prismic.io/api/v2'
  const api = await Prismic.getApi(apiEndpoint, { req })
  const { data, last_publication_date } = await api.getByUID('blog_post', slug)
  console.log(data)
  return { ...data, date: last_publication_date }
}

export default BlogPostPage
