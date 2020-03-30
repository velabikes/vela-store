import Field from 'components/form/Field'
import Control from 'components/form/Control'
import PropTypes from 'prop-types'

const ControlField = (props) =>
  <div>
    <Field
      component={Control}
      {...props}
    />
  </div>

ControlField.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string
}

export default ControlField
