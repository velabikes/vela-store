import { Formik, Form } from 'formik'
import Field from 'components/form/Field'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'
import EmailField from 'components/form/EmailField'
import PhoneField from 'components/form/PhoneField'
import SelectField from 'components/form/SelectField'
import fetch from 'isomorphic-fetch'

const InvestForm = () =>

  <div className='form'>
    <Formik
      validate={(values, props) => {
        let errors = {}

        const errorsMessage = {
          name: 'Nome é requerido',
          email: 'E-mail é requerido',
          phone: 'Telefone é requerido',
          message: 'A pergunta é requerida',
          profile: 'O perfil é requerido'
        }

        if (!values.name) { errors.name = errorsMessage['name'] }
        if (!values.email) { errors.email = errorsMessage['email'] }
        if (!values.phone) { errors.phone = errorsMessage['phone'] }
        if (!values.message) { errors.message = errorsMessage['message'] }
        if (!values.profile) { errors.profile = errorsMessage['profile'] }

        return errors
      }}
      initialValues={{ name: '', email: '', phone: '', profile: '', message: '' }}
      onSubmit={handleSubmit}
      render={
        ({ isSubmitting, status, values }) => (
          <Form>
            <FieldGroup template='1fr 1fr'>
              <Field
                label='Nome'
                name='name'
                type='text'
              />
              <SelectField label='Qual o seu perfil?' name='profile'>
                <option value='' />
                <option value='Acionista'>Acionista - Perfil arrojado</option>
                <option value='Credor'>Credor - Perfil cauteloso</option>
              </SelectField>
            </FieldGroup>
            <FieldGroup template='1fr 1fr'>
              <EmailField
                name='email'
              />
              <PhoneField
                name='phone'
              />
            </FieldGroup>
            <Field
              label='Por que você quer investir na Vela?'
              name='message'
              type='text'
            />
            <div className='status'>
              {isSubmitting && 'Enviando...'}
              {status && (status.success || status.error)}
            </div>
            <div className='actions'>
              <Button type='submit' primary>Enviar</Button>
            </div>
          </Form>
        )
      }
    />
    <style jsx>{`
        .form {
          padding-top: 1em;
        }
        .actions {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .status {
          font-size: 0.8em;
          text-align: right;
          padding: 1em;
        }
    `}
    </style>
  </div>

const handleSubmit = async (values, { setSubmitting, setStatus, resetForm, props }) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`/api/invest/submit`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers
    })
    resetForm()
    setStatus({ success: 'Formulário enviado com sucesso.' })
  } catch (error) {
    setStatus({ error: 'Houve um erro ao enviar o formulário.' })
  }

  setSubmitting(false)
}

export default InvestForm
