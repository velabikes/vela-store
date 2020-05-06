import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import Highlight from 'components/home/Highlight'
import HomeAlbum from 'components/home/HomeAlbum'
import PaddedView from 'components/PaddedView'
import Button from '../components/Button'
import VelaPoint from '../components/charge/VelaPoint'
import { offBlack, offWhite, darkGray } from '../style/colors'

const HomePage = ({ images }) =>
  <div className='HomePage'>
    <Head>
      <title>Vela Bikes</title>
      <meta name='description' content='Conheça a smartbike Vela 2. A única bicicleta elétrica conectada com as ruas, com seu celular e com você.' />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela Bikes' />
      <meta property='og:description' content='Conheça a smartbike Vela 2. A única bicicleta elétrica conectada com as ruas, com seu celular e com você.' />
      <meta property='og:image' content='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/d66ce503-f59e-40d2-ab4b-24bf92587e6d.png' />
      <meta property='fb:app_id' content='373948403355114' />
    </Head>
    <div className='cover'>
      <HomeImage />
      <div className='cta'>
        <div className='slogan'>
          <h1>Vela 2</h1>
          <h4>Conheça a primeira smartbike do Brasil. Faça parte do futuro. Agora.</h4>
          <div className='actions'>
            <Link href='/vela'>
              <Button primary>Comprar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Highlight />
    <div className='home-store'>
      <div className='store-title'>
        <h2>#vadevela</h2>
      </div>
    </div>
    <br />
    <PaddedView>
      {images && <HomeAlbum images={images} />}
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
        margin-top: -4rem;
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
          color: ${darkGray};
          font-size: 4rem;
        }
        h4 {
          color: ${darkGray};
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 25em;
          right: 2em;
          top: 2em;
          text-align: right;
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
