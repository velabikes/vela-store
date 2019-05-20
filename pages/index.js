import { lightGray, velaBlue } from '../style/colors'
import Cta89 from '../components/cta89'

const HomePage = () =>
  <div className='HomePage'>
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/69c9e416-74cd-4be5-a8db-7a04763999cb.jpg' className='desktop' alt='' />
    <img src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/5a250267-fd4a-44db-8103-8dff543ffa91.jpg' className='mobile' alt='' />
    <div className='cta'>
      <div className='slogan'>
        <h1>#VADEVELA</h1>
        <h4>Bicicletas elétricas para cidades mais saudáveis</h4>
      </div>
      <button>Monte a sua</button>
    </div>
    <div className='promotion'>
      <Cta89 />
    </div>
    <style jsx>{`
      .HomePage {
         position: relative;
      }
      img {
        height: calc(100vh - 4rem);
        object-fit: cover;
        width: 100%;
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
      .desktop {
        display: none;
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
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    `}</style>
  </div>

export default HomePage
