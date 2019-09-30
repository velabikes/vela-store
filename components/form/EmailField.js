import Field from 'components/form/Field'

const isEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)

const validate = value => !isEmail(value) && 'Email invalido.'

const EmailField = props =>
  <Field
    label='E-mail'
    type='email'
    validate={validate}
    {...props}
  />

export default EmailField
