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
import { offBlack, offWhite, white } from '../style/colors'

const HomePage = ({ highlight }) =>
  <div className='HomePage'>
    <Head>
      <title>Vela 2: A bicicleta elétrica smart do Brasil - Vela  Bikes</title>
      <link rel='alternate' hrefLang='pt-br' href='https://velabikes.com.br' />
      <meta httpEquiv='content-language' content='pt-br' />
      <meta name='application-name' content='Vela Bikes Store' />
      <meta name='description' content='Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo.' />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" /> 
      <meta name="twitter:title" content="Vela 2: A bicicleta elétrica smart do Brasil - Vela  Bikes" />
      <meta name="twitter:description" content="Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo." />
      <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeEletricaSmart.jpg?alt=media&token=3f8618f9-981e-4ae4-9b43-a00210184e6e" />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela 2: A bicicleta elétrica smart do Brasil - Vela  Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo.' />
      <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBikeEletricaSmart.jpg?alt=media&token=3f8618f9-981e-4ae4-9b43-a00210184e6e' />
    </Head>
    <div className='cover'>
      <div className='cta'>
        <div className='slogan'>
          <h1>Mês da Mobilidade</h1>
          <p>Uma bike para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo.</p>
          <h4>De <strike>R$ 6.890</strike></h4>
          <h2>Por R$ 5.690</h2>
          <div className='actions'>
            <Link href='/vela2'>
              <Button primary>Monte a sua</Button>
            </Link>
          </div>
          <br/>
          <small>Promoção apenas para o <b>Quadro Reto M</b> - Aplique o cupom <b>MESDAMOBILIDADE</b> no checkout. Válida até o fim de setembro ou enquanto durar o estoque.</small>
        </div>
      </div>
      <HomeImage />
    </div>
    <Highlight />
    <div className='home-store'>
      <a href='/blog'>
        <div className='store-title'>
          <h2>Bons Ventos</h2>
        </div>
      </a>
    </div>
    <br />
    <PaddedView style={{backgroundColor: '#EFEFEF'}}> 
      {/* {images && <HomeAlbum images={images} />} */}
      <PostHighlight post={highlight} />
      <HomeBanner />
    </PaddedView>
    <VelaPoint />
    <style jsx>{`
      .HomePage {
        background-color: ${offWhite};
      }
      .cover {
         position: relative;
         background-color: ${offWhite};
      }
      .cta {
        text-align: center;
        padding: 2rem 3rem 1rem 3rem;
        background-color: #709981;
      }
      .cta h2, .cta small {
        color: ${offWhite};
      }
      h1 {
        color: ${offWhite};
        font-size: 2rem;
      }
      h2 {
        color: ${offBlack};
      }
      h4 {
        color: ${offWhite};
        padding-bottom: 0em;
      }
      .cta p {
        color: ${offWhite}
      }
      .home-store {
        background-color: #272727;
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
      }
      .store-title {
        background-color: ${white};
        padding: 1em 2em;
        margin-bottom: -2em;
      }
      .actions :global(button) {
        margin: 1em 0 0 0;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: ${offBlack}
        }
        h4, .cta p {
          color: ${offBlack};
        }
        .cta h2, .cta small {
          color: ${offBlack}
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 20em;
          right: 2em;
          top: 2em;
          text-align: left;
          background-color: ${white};
          margin-top: 0rem;
          padding: 2em;
        }
        .actions {
          right: 0;
        }
        @media only screen and (min-width: 1300px) {
          .cta {
            right: 4em;
            top: 4em;
          }
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
