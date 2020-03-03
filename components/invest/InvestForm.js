import { Formik, Form } from 'formik'
import Field from 'components/form/Field'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'
import EmailField from 'components/form/EmailField'
import fetch from 'isomorphic-fetch'

const InvestForm = () =>

  <div className='form'>
    <Formik
      validate={(values, props) => {
        let errors = {}

        const errorsMessege = {
          name: 'Nome é requerido',
          email: 'E-mail é requerido',
          message: 'Mensagem é requerido'
        }

        if (!values.name) { errors.name = errorsMessege['name'] }
        if (!values.email) { errors.email = errorsMessege['email'] }
        if (!values.message) { errors.message = errorsMessege['message'] }

        return errors
      }}
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={handleSubmit}
      render={
        ({ isSubmitting, status, values }) => (
          <Form>
            <FieldGroup template='1fr 2fr'>
              <Field
                label='Nome'
                name='name'
                type='text'
              />
              <EmailField
                name='email'
              />
            </FieldGroup>

            <Field
              label='Mensagem'
              name='message'
              type='text'
            />

            <div className='actions'>
              <Button type='submit' primary>Enviar</Button>
            </div>
            <center><small>
              {isSubmitting && 'Enviando...'}
              {status && (status.success || status.error)}
            </small></center>
          </Form>
        )
      }
    />
    <style jsx>{`
        .form {
            padding-top: 1em;
        }
    `}
    </style>
  </div>

const handleSubmit = async (values, { setSubmitting, setStatus, resetForm, props }) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await fetch(`/api/invest/submit`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers
    })
    resetForm()
    setStatus({ success: 'Formulario enviado com sucesso.' })
  } catch (error) {
    setStatus({ error: 'Houve um erro ao enviar o formulario.' })
  }

  setSubmitting(false)
}

export default InvestForm
