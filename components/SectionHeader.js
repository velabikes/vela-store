import PropTypes from 'prop-types'

const SectionHeader = ({ align, title, tagline }) =>
  <header className='SectionHeader'>
    <h2>{title}</h2>
    {tagline && <p>{tagline}</p>}
    <style jsx>{`
      .SectionHeader {
        text-align: ${align};
      }
      p {
        font-size: 1rem;
      }
    `}</style>
  </header>

SectionHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  align: PropTypes.string
}

export default SectionHeader
