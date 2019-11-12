import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import Highlight from 'components/home/Highlight'
import HomeAlbum from 'components/home/HomeAlbum'
import PaddedView from 'components/PaddedView'
import Inverter from 'components/Inverter'
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
        <div className='slogan'>
         <p><strong>Tecnologia e design<br />nunca estiveram tão próximos</strong></p>
         <div className='actions'>
           <Link href='/vela'>
             <Button primary outline>Conheça a Vela 2</Button>
           </Link>
           </div>
         </div>
         <h1>#VADEVELA</h1>
      </div>
    </div>
    <Highlight />
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
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        background-color: rgba(221,221,223, 0.2);
        padding: 2rem;
      }
      .slogan > p {
        font-size: 1.25em;
      }
      h1 {
        color: white;
        margin-bottom: 32vh;
        font-size: 3rem;
      }

      .button {
        width: 100%;
        padding: .5rem 1rem;
        font-size: .8rem;
        background-color: transparent;
        border: 2px solid #f5f5f5;
        background: none;
        border-radius: 2rem;
        margin-bottom: 0.5em;
        color: #f5f5f5;
        text-transform: uppercase;
        font-weight: 700;
        transition: .2s transform, .2s box-shadow, .3s background linear, .3s border linear;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        outline: none;
      }
      .button:active {
        transform: translateY(2px);
        box-shadow: none;
      }
    
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 6em;
        }
        h4 {
          font-size: 1.5em;
          font-weight: 600;
        }
        .cta {
          justify-content: center;
        }
        .slogan > p {
          font-size: 1.5em;
          padding: 0 2rem;
        }
        .actions {
          display: flex;
        }
        .actions > :global(*) {
          margin: 0 .25rem;
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
