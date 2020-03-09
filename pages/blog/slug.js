import { getPrismic } from 'lib/prismic'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
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
      <div className='PostImage'>
        <img src={cover.url} alt={cover.alt} />
      </div>
      <br />
      <div className='PostBody'>
        <RichText render={body} />
      </div>
    </Main>
    <style jsx>{`
      .SectionBody {
        margin-bottom: 3em;
      }

      .PostImage {
        margin-bottom: 1em;
      }

      @media only screen and (min-width: 768px) {
      .PostBody {
        margin: 0 auto;
        max-width: 60%;
      }
      .PostBody :global(img) {
          margin: 1em 0;
        }
      .PostBody :global(p) {
          font-size: 1.2em;
        }
      }
    `}</style>
  </PaddedView>

BlogPostPage.getInitialProps = async ({ req, query }) => {
  const { slug } = query
  const prismic = await getPrismic(req)
  const { data } = await prismic.getByUID('blog_post', slug)

  return { ...data }
}

BlogPostPage.propTypes = {
  cover: PropTypes.object,
  title: PropTypes.any,
  teaser: PropTypes.any,
  body: PropTypes.any,
  post_date: PropTypes.any
}

export default BlogPostPage
