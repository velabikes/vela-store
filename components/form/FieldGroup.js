import PropTypes from 'prop-types'
import Grid from 'components/Grid'

const FieldGroup = ({ children, ...props }) =>
  <Grid columnGap='1rem' rowGap='0' {...props}>
    {children}
  </Grid>

FieldGroup.propTypes = {
  children: PropTypes.node
}

export default FieldGroup
