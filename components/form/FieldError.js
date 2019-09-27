import { ErrorMessage } from 'formik'

const FieldError = ({ name }) =>
  <p>
    <ErrorMessage name={name} />
    <style jsx>{`
      color: red;
    `}</style>
  </p>

export default FieldError
