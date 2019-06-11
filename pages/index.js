import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import HomeImage from 'components/home/HomeImage'
import Cta89 from 'components/home/HomePromo'
import HomeBikes from 'components/home/HomeBikes'
import HomeAlbum from 'components/home/HomeAlbum'
import PaddedView from 'components/PaddedView'
import Button from '../components/Button'
import { velaBlue } from '../style/colors'

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
        <Button>Monte a sua</Button>
      </Link>
    </div>
    <PaddedView>
      <HomeBikes />
      <HomeAlbum images={images} />
    </PaddedView>
    <div className='promotion'>
      <Cta89 />
    </div>
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
      h1, h4 {
        margin: 0
      }
      .cta > :global(.btn) {
        background-color: ${velaBlue};
        margin-top: 1rem;
        font-size: 1.29em;
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
        h1 {
          font-size: 2.8em;
          font-weight: 900;
        }
        h4 {
          font-size: 1.2em;
        }
      }
    `}</style>
  </div>

HomePage.propTypes = {
  images: PropTypes.array
}

HomePage.getInitialProps = async () => {
  const response = await fetch('https://www.instagram.com/velabikes/?__a=1')
  const {
    graphql: { user: { edge_owner_to_timeline_media: { edges } } }
  } = await response.json()

  const images = edges.map(edge => {
    const resource = edge.node.thumbnail_resources.find(resource => resource.config_width > 350)

    return {
      id: edge.node.shortcode,
      url: resource.src
    }
  })

  return { images }
}

export default HomePage
