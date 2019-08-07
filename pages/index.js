import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import HomeBikes from 'components/home/HomeBikes'
import HomeAlbum from 'components/home/HomeAlbum'
import PaddedView from 'components/PaddedView'
import Inverter from 'components/Inverter'
import Section from 'components/Section'
import Button from '../components/Button'
import VelaPoint from '../components/charge/VelaPoint'

const HomePage = ({ images }) =>
  <div className='HomePage'>
    <Head>
      <title>Vela: Bicicletas elétricas para cidades mais saudáveis</title>
      <meta name='description' content='Conheça as bicicletas elétricas da Vela, desenvolvidas com design clássico e alta tecnologia. Feitas no Brasil.' />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela : Bicicletas elétricas para cidades mais saudáveis.' />
      <meta property='og:description' content='Conheça as bicicletas elétricas da Vela, desenvolvidas com design clássico e alta tecnologia. Feitas no Brasil.' />
      <meta property='og:image' content='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/69c9e416-74cd-4be5-a8db-7a04763999cb.jpg' />
      <meta property='fb:app_id' content='373948403355114' />
    </Head>
    <div className='cover'>
      <HomeImage />
      <div className='cta'>
        <div>
          <div className='slogan'>
            <h1>#VADEVELA</h1>
            <h4>Bicicletas elétricas para cidades mais saudáveis</h4>
          </div>
          <Link href='/store?handle=vela-1' as='/loja/vela-1'>
            <Button primary outline>Monte a sua</Button>
          </Link>
        </div>
      </div>
    </div>
    <PaddedView>
      <HomeBikes />
    </PaddedView>
    <Inverter>
      <PaddedView>
        <VelaPoint />
      </PaddedView>
    </Inverter>
    <PaddedView>
      {images && <HomeAlbum images={images} />}
    </PaddedView>

    <style jsx>{`
      .cover {
         position: relative;
      }
      .cta {
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(231,231,233, 0.6);
        padding: 2rem;
      }
      .cta > div {
        max-width: 520px;
        margin: 0 auto;
      }
      .slogan {
        margin-bottom: 1rem;
      }
      h1, h4 {
        margin: 0
      }
      .promotion {
        position: fixed;
        bottom: 2em;
        right: 2em;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 4em;
        }
        h4 {
          font-size: 1.5em;
          font-weight: 600;
        }
        img {
          height: calc(100vh);
        }
      }
    `}</style>
  </div>

HomePage.propTypes = {
  images: PropTypes.array
}

HomePage.getInitialProps = async ({ req }) => {
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
}

export default HomePage
