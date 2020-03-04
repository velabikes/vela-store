import { ErrorMessage } from 'formik'

const FieldError = ({ name }) =>
  <div>
    <ErrorMessage name={name} />
    <style jsx>{`
      color: red;
      font-size: 0.8em;
    `}</style>
  </div>

export default FieldError
