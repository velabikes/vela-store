// import PropTypes from 'prop-types'
import { velaGreen } from '../../style/colors'

const images = [
  { title: 'instagram1', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram2', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram3', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram4', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram5', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram6', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram7', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' },
  { title: 'instagram8', src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png' }
]

const HomeAlbum = () =>
  <div className='HomeAlbum'>
    <div className='AlbumTitle'>
      <h1>Siga o movimento</h1>
    </div>
    <div className='Album'>
      {images.map(image =>
        <div key={image.title}>
          <img alt={image.title} src={image.src} />
        </div>
      )}
    </div>
    <p className='Hashtag'>#vadevela</p>
    <style>{`
      .HomeAlbum {
        position: relative;
        margin: 0 2rem;
        padding-bottom: 4rem;
      }
      .HomeAlbum img {
        border-radius: 3%;
      }
      .AlbumTitle {
        margin: auto 0;
      }
      .Hashtag {
        font-family: neue-haas-grotesk-display, sans-serif;
        font-size: 8em;
        font-style: italic;
        font-weight: 900;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${velaGreen};
        position: absolute;
        right: 0;
        bottom: -1rem;
        margin: 0;
      }
      @media only screen and (min-width: 768px) {
        .HomeAlbum {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
        }
        .Album {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 1.5rem;
          grid-row-gap: 2rem;
        }
      }
      @media only screen and (min-width: 1200px) {
        .HomeAlbum {
          grid-template-columns: 220px 1fr;
        }
        .Album {
          // display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>

// HomeAlbum.propTypes = {
// }

export default HomeAlbum
