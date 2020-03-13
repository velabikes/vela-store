import Field from 'components/form/Field'
import PhoneInput from 'components/form/PhoneInput'

const isPhone = value => value.length > 10

const validate = value => !isPhone(value) && 'Telefone inválido.'

const PhoneField = (props) =>
  <Field
    label='Telefone'
    type='phone'
    validate={validate}
    component={PhoneInput}
    {...props}
  />

export default PhoneField
