import PropTypes from 'prop-types'

const Grid = ({ children, template, gap }) =>
  <div className='Grid'>
    {children}
    <style jsx>{`
    div {
      display: grid;
      grid-column-gap: ${gap || 2}rem;
      grid-row-gap: ${gap || 2}rem;
      grid-template-columns: ${template}
    }
    @media only screen and (max-width: 768px) {
      div {
        grid-template-columns: 1fr;
        grid-row-gap: 0rem;
      }
    }
  `}</style>
  </div>

Grid.propTypes = {
  children: PropTypes.node,
  template: PropTypes.string
}

export default Grid
