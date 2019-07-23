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
      <title>Vela : Bicicletas elétricas para cidades mais saudáveis.</title>
      <meta name='description' content='Conheça as bicicletas elétricas da Vela, desenvolvidas com design clássico e alta tecnologia. Feitas no Brasil.' />
      <meta property='og:url' content='https://velabikes.com.br' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Vela : Bicicletas elétricas para cidades mais saudáveis.' />
      <meta property='og:description' content='Conheça as bicicletas elétricas da Vela, desenvolvidas com design clássico e alta tecnologia. Feitas no Brasil.' />
      <meta property='og:image' content='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/69c9e416-74cd-4be5-a8db-7a04763999cb.jpg' />
      <meta property='fb:app_id' content='373948403355114' />
    </Head>
    <HomeImage />
    <div className='cta'>
      <div className='slogan'>
        <h1>#VADEVELA</h1>
        <h4>Bicicletas elétricas para cidades mais saudáveis</h4>
      </div>
      <Link href='/store?handle=vela-1' as='/loja/vela-1'>
        <Button big action>Monte a sua</Button>
      </Link>
    </div>
    <Section>
      <PaddedView>
        <HomeBikes />
      </PaddedView>
    </Section>
    <Inverter>
      <Section>
        <PaddedView>
          <VelaPoint />
        </PaddedView>
      </Section>
    </Inverter>
    <Section>
      <PaddedView>
        {images && <HomeAlbum images={images} />}
      </PaddedView>
    </Section>

    <style jsx>{`
      .HomePage {
         position: relative;
      }
      .cta {
        text-align: right;
        position: absolute;
        right: 1rem;
        top: 1rem;
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
        img {
          height: calc(100vh);
        }
        .cta {
          top: calc(1% + 2rem);
          right: calc(1% + 2rem);
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
