import PropTypes from 'prop-types'

const Grid = ({ children, template }) =>
  <div className='Grid'>
    {children}
    <style jsx>{`
    div {
      display: grid;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      grid-template-columns: ${template}
    }
  `}</style>
  </div>

Grid.propTypes = {
  children: PropTypes.node,
  template: PropTypes.string
}

export default Grid
