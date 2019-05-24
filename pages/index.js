import Head from 'next/head'
import Link from 'next/link'
import HomeImage from 'components/home/HomeImage'
import Cta89 from 'components/home/HomePromo'
import { lightGray, velaBlue } from '../style/colors'

const HomePage = () =>
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
        <button className='desktop'>Monte a sua</button>
      </Link>
    </div>
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
      button {
        margin-top: 1rem;
        font-size: 1.29em;
      }
      .promotion {
        position: fixed;
        bottom: 2em;
        right: 2em;
      }
      :global(.copyright) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
      :global(.copyright) :global(small) {
        color: ${lightGray}
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
          font-size: 3.1em;
          font-weight: 900;
        }
      }
    `}</style>
  </div>

export default HomePage
