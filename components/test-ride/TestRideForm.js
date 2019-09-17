import { Form, withFormik } from 'formik'
import { compose, withState } from 'recompose'
import Field from 'components/form/Field'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'

const TestRideFrom = () =>
  <Form>
    <Field
      label='Nome'
      name='name'
      type='text'
    />
    <FieldGroup template='1fr 1fr'>
      <Field
        label='E-mail'
        name='email'
        type='email'
      />
      <Field
        label='Telefone'
        name='phone'
        type='text'
      />
    </FieldGroup>
    <Field
      label='Cidade'
      name='city'
      type='text'
    />
    <Field
      label='Eu aceito os termos de test-ride da Vela.'
      name='height'
      type='text'
    />
    <Button primary>Quero testar</Button>
  </Form>

const handleSubmit = (values, { setSubmitting, props }) => {
  alert(JSON.stringify(values))
  setSubmitting(false)
}

export default compose(
  withState('address', 'setAddress', ''),
  withFormik({ handleSubmit })
)(TestRideFrom)
