import PropTypes from 'prop-types'

const Section = ({ children, ...props }) =>
  <section className='Section' {...props}>
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
