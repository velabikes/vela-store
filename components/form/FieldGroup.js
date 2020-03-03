import PropTypes from 'prop-types'
import Grid from 'components/Grid'

const FieldGroup = ({ children, ...props }) =>
  <div className='fieldgroup'>
    <Grid columnGap='1rem' rowGap='0' {...props}>
      {children}
    </Grid>
    <style jsx>{`
      @media only screen and (max-width: 768px) {
        .fieldgroup :global(.Grid) {
          grid-template-columns: 1fr;
          grid-row-gap: 0rem;
        }
      }
      `}
    </style>
  </div>

FieldGroup.propTypes = {
  children: PropTypes.node
}

export default FieldGroup
