import PropTypes from 'prop-types'
import { offBlack } from '../style/colors'

const MainHeader = ({ title, tagline }) =>
  <header className='MainHeader'>
    <h1>{title}</h1>
    {tagline && <h3>{tagline}</h3>}
    <style jsx>{`
      .MainHeader {
        margin-bottom: 1.5rem;
      }
      h1 {
        margin-bottom: 0;
      }
      h3 {
        color: ${offBlack};
      }
      p {
        font-size: 1.25rem;
      }
    `}</style>
  </header>

MainHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string
}

export default MainHeader
