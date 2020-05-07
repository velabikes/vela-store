import PropTypes from 'prop-types'

const SectionHeader = ({ align, title, tagline }) =>
  <header className='SectionHeader'>
    <h2>{title}</h2>
    {tagline && <h4>{tagline}</h4>}
    <style jsx>{`
      .SectionHeader {
        text-align: ${align};
      }
    `}</style>
  </header>

SectionHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  align: PropTypes.string
}

export default SectionHeader
