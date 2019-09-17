import PropTypes from 'prop-types'

const SectionHeader = ({ title, tagline }) =>
  <header className='SectionHeader'>
    <h1>{title}</h1>
    {tagline && <p>{tagline}</p>}
    <style jsx>{`
      .SectionHeader {
        margin-bottom: 2rem;
      }
      h1 {
        margin-bottom: 0;
      }
      p {
        font-size: 1.25rem;
      }
    `}</style>
  </header>

SectionHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string
}

export default SectionHeader
