import { Formik } from 'formik'

const UserRegisterForm = props =>
  <Formik
    initialValues={{ email: '', password: '' }}
    {...props}
  >
    {({ handleSubmit, handleChange, handleBlur, values, error, isSubmitting }) =>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='email'
          name='email'
          value={values && values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && error.email && 'error'}
        />
        <label>Passowrd</label>
        <input
          type='password'
          name='password'
          value={values && values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && error.password && 'error'}
        />
        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </form>
    }
  </Formik>

export default UserRegisterForm
