import PropTypes from 'prop-types'

const HomeAlbum = ({ images }) =>
  <div className='HomeAlbum'>
    <div className='container'>
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
    <style jsx>{`
      .HomeAlbum {
        position: relative;
        padding: 1em;
      }
      .Album {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
      }
      @media only screen and (min-width: 768px) {
        .container {
          display: grid;
          grid-template-columns: 1fr;
        }
        .Album {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>

HomeAlbum.propTypes = {
  images: PropTypes.array
}

export default HomeAlbum
