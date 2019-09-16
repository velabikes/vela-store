import PropTypes from 'prop-types'

const Section = ({ children }) =>
  <section className='Section'>
    {children}
    <style jsx>{`
      section {
        padding: 4rem 0;
      }
    `}</style>
  </section>

Section.propTypes = {
  children: PropTypes.node
}

export default Section
