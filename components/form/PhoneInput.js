import InputMask from 'react-input-mask'

const PhoneInput = ({ field, ...props }) =>
  <InputMask
    type='tel'
    mask='99 999999999'
    maskChar=''
    {...field}
    {...props}
  />

export default PhoneInput
