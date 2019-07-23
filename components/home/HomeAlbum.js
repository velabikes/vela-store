import PropTypes from 'prop-types'
import Grid from 'components/Grid'
import { velaGreen } from '../../style/colors'

const HomeAlbum = ({ images }) =>
  <div className='HomeAlbum'>
    <Grid template='1fr 5fr'>
      <div className='AlbumTitle'>
        <h1>Siga o movimento</h1>
      </div>
      <div className='Album'>
        {images.map((image, index) => {
          if (index > 7) return

          return <div key={image.id}>
            <a href={`https://www.instagram.com/p/${image.id}`} target='_blank'>
              <img alt={image.title} src={image.url} />
            </a>
          </div>
        })}
      </div>
    </Grid>
    <p className='Hashtag'>#vadevela</p>
    <style jsx>{`
      .HomeAlbum {
        position: relative;
      }
      h1 {
        margin-bottom: 0px;
      }
      .Album {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
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
        right: 0;
        bottom: -1em;
      }
      @media only screen and (min-width: 768px) {
        .Album {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .AlbumTitle {
          margin: auto 0;
        }
      }
    `}</style>
  </div>

HomeAlbum.propTypes = {
  images: PropTypes.array
}

export default HomeAlbum
