import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import { velaGreen } from '../../style/colors'

const HomeAlbum = ({ images }) =>
  <div className='HomeAlbum'>
    <Section>
      <div className='container'>
        <div className='AlbumTitle'>
          <SectionHeader title='Siga o movimento' />
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
      </div>
      <p className='Hashtag'>#vadevela</p>
    </Section>
    <style jsx>{`
      .HomeAlbum {
        position: relative;
      }
      .Album {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
      }
      .Hashtag {
        font-family: Barlow, sans-serif;
        font-size: 3.63em;
        font-style: italic;
        font-weight: 900;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${velaGreen};
        position: absolute;
        right: 0;
        bottom: 0em;
      }
      @media only screen and (min-width: 768px) {
        .container {
          display: grid;
          grid-template-columns: 1fr 5fr;
        }
        .Album {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .AlbumTitle {
          margin: auto 0;
          padding-right: 2em;
        }
      }
    `}</style>
  </div>

HomeAlbum.propTypes = {
  images: PropTypes.array
}

export default HomeAlbum
