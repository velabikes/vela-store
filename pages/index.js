import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import Highlight from 'components/home/Highlight'
import HomeAlbum from 'components/home/HomeAlbum'
import PaddedView from 'components/PaddedView'
import Button from '../components/Button'
import { offBlack, offWhite, darkGray } from '../style/colors'

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
        <div className='slogan'>
          <h1>Smartbike</h1>
          <p>A única bicicleta elétrica conectada com as ruas, com seu celular e com <b>você</b>.</p>
          <div className='actions'>
            <Link href='/vela'>
              <Button primary>Reservar</Button>
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
    </PaddedView>
    <br />
    <style jsx>{`
      .cover {
         position: relative;
         background-color: ${offWhite};
      }
      .cta {
        text-align: center;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        padding: 1rem 2rem;
      }
      .slogan > p {
        color: ${offBlack};
        align-self: flex-end;
        font-size: 1em;
      }
      h1 {
        color: ${darkGray};
        font-size: 2rem;
        font-weight: 700;
      }
      h2 {
        color: ${darkGray};
      }
      .home-store {
        background-color: #1D1D1D;
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
      }
      .store-title {
        background-color: ${offWhite};
        padding: 1em 2em;
        margin-bottom: -2em;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 4em;
        }
        .cta {
          justify-content: center;
          max-width: 30vw;
          right: 2em;
          top: 2em;
          text-align: right;
        }
        .slogan > p {
          font-size: 1.2em;
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
