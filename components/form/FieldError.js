import { ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

const FieldError = ({ name }) =>
  <div>
    <ErrorMessage name={name} />
    <style jsx>{`
      color: red;
      font-size: 0.8em;
    `}</style>
  </div>

FieldError.propTypes = {
  name: PropTypes.string
}

export default FieldError
