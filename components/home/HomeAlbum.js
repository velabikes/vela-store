import PropTypes from 'prop-types'
import { velaGreen } from '../../style/colors'

const HomeAlbum = ({ images }) =>
  <section className='HomeAlbum'>
    <div className='AlbumTitle'>
      <h1>Siga o movimento</h1>
    </div>
    <div className='Album'>
      {images.map((image, index) => {
        if (index > 7) return

        return <div key={image.id}>
          <a href={`https://www.instagram.com/p/${image.id}`}>
            <img alt={image.title} src={image.url} />
          </a>
        </div>
      })}
    </div>
    <p className='Hashtag'>#vadevela</p>
    <style jsx>{`
      .HomeAlbum {
        position: relative;
        display: grid;
        padding-bottom: 6rem;
        margin: 0 2rem;
      }
      .HomeAlbum img {
        border-radius: 1%;
      }
      .Album {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
      }
      .Hashtag {
        font-family: neue-haas-grotesk-display, sans-serif;
        font-size: 3.63em;
        font-style: italic;
        font-weight: 900;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${velaGreen};
        position: absolute;
        right: 0em;
        bottom: 4rem;
        margin: 0;
      }

      @media only screen and (min-width: 580px) {
        .HomeAlbum {
          margin: 0 2rem;
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
        }
        .Album {
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 1.5rem;
        }
        .Hashtag {
          font-size: 7.09rem;
          bottom: 1rem;
        }
      }

      @media only screen and (min-width: 768px) {
        .HomeAlbum {
          grid-template-columns: 220px 1fr;
          margin-top: 7rem;
          margin-right: 4rem;
        }
        .Album {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .AlbumTitle {
          margin: auto 0;
        }
      }
    `}</style>
  </section>

HomeAlbum.propTypes = {
  images: PropTypes.array
}

export default HomeAlbum
