import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import { getPrismic, Predicates } from 'lib/prismic'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import HomeBanner from 'components/home/HomeBanner'
import Highlight from 'components/home/Highlight'
import PostHighlight from 'components/blog/PostHighlight'
import PaddedView from 'components/PaddedView'
import Button from '../components/Button'
import VelaPoint from '../components/charge/VelaPoint'
import { offBlack, offWhite } from '../style/colors'

const HomePage = ({ highlight }) =>
  <div className='HomePage'>
    <Head>
      <title>Vela Bikes</title>
      <meta http-equiv='content-language' content='pt-br' />
      <meta name='application-name' content='Vela Bikes Store' />
      <meta name='description' content='Conheça a Vela 2. A bicicleta elétrica smart do Brasil.' />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Conheça a Vela 2. A bicicleta elétrica smart do Brasil.' />
      <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeEletricaSmart.jpg?alt=media&token=3f8618f9-981e-4ae4-9b43-a00210184e6e' />
    </Head>
    <div className='cover'>
      <HomeImage />
      <div className='cta'>
        <div className='slogan'>
          <h1>Vela 2</h1>
          <h4>A bicicleta elétrica smart do Brasil. Faça parte do futuro. Agora.</h4>
          <div className='actions'>
            <Link href='/vela'>
              <Button primary>Saiba mais</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Highlight />
    <div className='home-store'>
      <div className='store-title'>
        <h2>Bons Ventos</h2>
      </div>
    </div>
    <br />
    <PaddedView>
      {/* {images && <HomeAlbum images={images} />} */}
      <PostHighlight post={highlight} />
      <HomeBanner />
      <VelaPoint />
    </PaddedView>
    <br />
    <style jsx>{`
      .cover {
         position: relative;
         background-color: ${offWhite};
      }
      .cta {
        text-align: center;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        padding: 1rem 3rem;
        background-color: #272727;
      }
      h1 {
        color: ${offWhite};
        font-size: 3rem;
      }
      h2 {
        color: ${offBlack};
      }
      h4 {
        color: ${offWhite};
      }
      .home-store {
        background-color: #272727;
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
      }
      .store-title {
        background-color: ${offWhite};
        padding: 1em 2em;
        margin-bottom: -2em;
      }
      .actions :global(button) {
        margin: 0;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-left: -0.1em;
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 18em;
          left: 6em;
          top: 6em;
          text-align: left;
          background-color: transparent;
          margin-top: 0rem;
        }
        .actions {
          right: 0;
        }
      }
    `}</style>
  </div>

HomePage.propTypes = {
  highlight: PropTypes.object
}

HomePage.getInitialProps = async ({ req }) => {
  const api = await getPrismic(req)
  const { results } = await api.query(
    Predicates.at('document.type', 'blog_post'),
    { pageSize: 30, orderings: '[my.blog_post.post_date desc]' }
  )
  return ({ highlight: results[0] })
}

/* HomePage.getInitialProps = async ({ req }) => {
  try {
    const baseUrl = req
      ? process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : `https://${req.headers.host}`
      : ''
    const response = await fetch(`${baseUrl}/api/instagram`)
    const data = await response.json()

    return { images: data }
  } catch (error) {
    console.log('error', error)

    return { images: [], from: 'error' }
  }
} */

export default HomePage
