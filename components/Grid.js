import PropTypes from 'prop-types'

const Grid = ({ children, template, gap }) =>
  <div className='Grid'>
    {children}
    <style jsx>{`
    .Grid {
      display: grid;
      grid-column-gap: ${gap || 2}rem;
      grid-row-gap: ${gap || 2}rem;
      grid-template-columns: ${template}
    }
  `}</style>
  </div>

Grid.propTypes = {
  children: PropTypes.node,
  template: PropTypes.string,
  gap: PropTypes.string
}

export default Grid
