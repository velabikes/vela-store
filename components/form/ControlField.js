import Field from 'components/form/Field'
import Control from 'components/form/Control'
import PropTypes from 'prop-types'

const ControlField = ({ label, selected, ...props }) =>
  <div>
    <label>{label}</label><span>{selected}</span>
    <Field
      component={Control}
      {...props}
    />
    <style jsx>{`
      label {
        display: inline-block;
        margin: 0.5em;
      }
    `}</style>
  </div>

ControlField.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string
}

export default ControlField
