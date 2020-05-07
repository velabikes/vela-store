import PropTypes from 'prop-types'
import { getPrismic, Predicates } from 'lib/prismic'
import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Grid from 'components/Grid'
import Card from 'components/Card'
import { NextIcon } from 'components/Icons'
import PostHighlight from 'components/blog/PostHighlight'
import Link from 'next/link'
import { offWhite, velaGreen } from '../../style/colors'

const Blog = ({ posts, highlight }) =>
  <div className='blog' style={{ background: `${offWhite}` }}>
    <PaddedView>
      <Main>
        <Head>
          <title>Blog - Vela Bikes</title>
        </Head>
        <MainHeader title='Blog' />
        <section>
          <PostHighlight post={highlight} />
        </section>
        <br /><br />
        <section>
          <Grid template='repeat(auto-fit, minmax(320px, 1fr))'>
            {posts.map(({ data: { cover, title, teaser }, uid }) => (
              <Card
                key={uid}
                media={<Link href={`/blog/${uid}`}><img src={cover.url} alt={cover.alt} /></Link>}
              >
                <Link href={`/blog/${uid}`}>
                  <div>
                    <h3>{title[0].text}</h3>
                    <p>{teaser[0].text}</p>
                    <br />
                    <div className='actions'>
                      <a>Ler mais  <NextIcon fill={velaGreen} /></a>
                    </div>
                  </div>
                </Link>
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
      img {
        cursor: pointer;
      }
    `}</style>
    </PaddedView>
  </div>

Blog.getInitialProps = async ({ req }) => {
  const api = await getPrismic(req)
  const { results } = await api.query(
    Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.blog_post.post_date desc]' }
  )
  const posts = results.slice()
  posts.shift()

  return ({ posts: posts, highlight: results[0] })
}

Blog.propTypes = {
  highlight: PropTypes.object,
  posts: PropTypes.Array
}

export default Blog
