import Head from 'next/head'
import { getPrismic, Predicates } from 'lib/prismic'
import PropTypes from 'prop-types'
import HomeVideo from 'components/home/HomeVideo'
import HomeBanner from 'components/home/HomeBanner'
import Highlight from 'components/home/Highlight'
import PostHighlight from 'components/blog/PostHighlight'
import PaddedView from 'components/PaddedView'
import Button from '../components/Button'
import VelaPoint from '../components/charge/VelaPoint'
import { offBlack, offWhite, velaGreen, white } from '../style/colors'
import HomeImage from '../components/home/HomeImage'

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
      <meta name="twitter:title" content="Vela 2: A bicicleta elétrica smart do Brasil - Vela Bikes" />
      <meta name="twitter:description" content="Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo." />
      <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVelaBikes.jpg?alt=media&token=31691630-473c-4f34-bd14-07e31d038fa1" />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela 2: A bicicleta elétrica smart do Brasil - Vela Bikes' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:description' content='Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo.' />
      <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayVelaBikes.jpg?alt=media&token=31691630-473c-4f34-bd14-07e31d038fa1' />
    </Head>
    <div className='cover'>
      <HomeImage />
      <div className='cta-bf'>
        <div className='slogan'>
          <h1>Smartbike Vela 2</h1>
          <h3>Pedale junto com a gente para cidades mais saudáveis</h3>
          <h4>A bicicleta elétrica e smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do design.</h4>
          <a href='/vela2'><Button primary>Monte a sua</Button></a>
        </div>
      </div>
    </div>
    <div className='cover'>
      <HomeVideo />
      <div className='cta'>
        <div className='slogan'>
          <h2>Feita com cuidado.<br /> No Brasil.</h2>
          <h3>Cadeia produtiva sustentável e produção artesanal.</h3>
          <h4>A bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes.</h4>
          <a href='/vela'><Button primary>Saiba mais</Button></a>
        </div>
      </div>
    </div>
    <Highlight />
    <div className='home-store'>
      <a href='/blog'>
        <div className='store-title'>
          <h3>Blog</h3>
        </div>
      </a>
    </div>
    <br />
    <PaddedView style={{backgroundColor: '#EFEFEF'}}> 
      {/* {images && <HomeAlbum images={images} />} */}
      <PostHighlight post={highlight} />
      <HomeBanner />
    </PaddedView>
    <PaddedView style={{backgroundColor: '#FFFEFE'}}>
      <VelaPoint />
    </PaddedView>
    <style jsx>{`
      .HomePage {
        background-color: ${offWhite};
      }
      .cover {
         position: relative;
         background-color: ${offWhite};
      }
      .cta-bf {
        text-align: center;
        padding: 2rem 3rem 2rem 3rem;
        background-color: ${offBlack};
      }
      .cta-bf h1 {
        color: ${offWhite};
      }
      .cta-bf h3 {
        color: ${offWhite};
      }
      .cta-bf h4 {
        color: ${offWhite};
      }
      .cta {
        text-align: center;
        padding: 2rem 3rem 2rem 3rem;
        background-color: ${white};
      }
      .cta h2 {
        color: ${velaGreen};
      }
      .cta h3, .cta h4, .cta small, .cta p {
        color: ${offBlack};
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
      }
      .home-store {
        background-color: #272727;
        display: flex;
        justify-content: center;
        margin-bottom: 3em;
      }
      .store-title {
        background-color: ${white};
        padding: 1em 2em 0.5em 2em;
        margin-bottom: -2em;
      }
      .cta :global(button), .cta-bf :global(button) {
        margin: 1em 0 1em 0;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .cta h3, .cta h2, .cta small, .cta h4, .cta p {
          color: ${offBlack}
        }
        .cta h2 {
          font-size: 3rem;
        }
        .cta-bf h1, .cta-bf h3, .cta-bf h4, .cta-bf p {
          color: ${offBlack}
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 20em;
          left: 2em;
          top: 3em;
          text-align: left;
          background-color: ${white};
          margin-top: 0rem;
          padding: 2em;
          z-index: 2;
        }
        .cta-bf {
          position: absolute;
          justify-content: center;
          max-width: 20em;
          left: 2em;
          top: 3em;
          text-align: left;
          background-color: ${white};
          margin-top: 0rem;
          padding: 2em;
          z-index: 2;
        }
        @media only screen and (min-width: 1300px) {
          .cta {
            left: 4em;
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
