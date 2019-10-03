import { Formik, Form } from 'formik'
import Field from 'components/form/Field'
import CheckboxField from 'components/form/CheckboxField'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Inverter from 'components/Inverter'
import fetch from 'isomorphic-fetch'
import EmailField from 'components/form/EmailField'
import PhoneField from 'components/form/PhoneField'
import SelectField from 'components/form/SelectField'
import PaddedSplitView from 'components/PaddedSplitView'
import FormInstructions from 'components/test-ride/FormInstructions'

const TestRideForm = () =>
  <PaddedSplitView
    leftBackground='#E7E8E8'
    rightBackground='#3F5052'
  >
    <Section>
      <p>Insira seus dados no formulário abaixo e aguarde nosso contato.</p>
      <br />
      <Formik
        validate={(values, props) => {
          let errors = {}

          const errorsMessege = {
            name: 'Nome é requerido',
            email: 'E-mail é requerido',
            height: 'Altura é requerido',
            phone: 'Telefone é requerido',
            city: 'Cidade é requerido',
            terms: 'É preciso concordar com os termos de uso'
          }

          if (!values.name) { errors.name = errorsMessege['name'] }
          if (!values.email) { errors.email = errorsMessege['email'] }
          if (!values.height) { errors.height = errorsMessege['height'] }
          if (!values.phone) { errors.phone = errorsMessege['phone'] }
          if (!values.city) { errors.city = errorsMessege['city'] }
          if (!values.terms) { errors.terms = errorsMessege['terms'] }

          return errors
        }}
        initialValues={{ name: '', email: '', height: '', phone: '', city: '', terms: false }}
        onSubmit={handleSubmit}
        render={
          ({ isSubmitting, status, values }) => (
            <Form>
              <Field
                label='Nome'
                name='name'
                type='text'
              />
              <FieldGroup template='2fr 1fr'>
                <EmailField
                  name='email'
                />
                <Field
                  label='Altura'
                  name='height'
                  type='text'
                />
              </FieldGroup>
              <FieldGroup template='1fr 1fr'>
                <PhoneField
                  name='phone'
                />
                <SelectField label='Cidade' name='city'>
                  <option value='' />
                  <option value='DF - Brasília'>DF - Brasília</option>
                  <option value='ES - Vitória'>ES - Vitória</option>
                  <option value='GO - Goiânia'>GO - Goiânia</option>
                  <option value='MG - Belo Horizonte'>MG - Belo Horizonte</option>
                  <option value='MG - Viçosa'>MG - Viçosa</option>
                  <option value='PR - Guaíra'>PR - Guaíra</option>
                  <option value='PR - Curitiba'>PR - Curitiba</option>
                  <option value='PR - Londrina'>PR - Londrina</option>
                  <option value='PR - Palotina'>PR - Palotina</option>
                  <option value='RJ - Rio de Janeiro'>RJ - Rio de Janeiro</option>
                  <option value='RS - Porto Alegre'>RS - Porto Alegre</option>
                  <option value='SP - Bauru'>SP - Bauru</option>
                  <option value='SP - Mairinque'>SP - Mairinque</option>
                  <option value='SP - Mogi das Cruzes'>SP - Mogi das Cruzes</option>
                  <option value='SP - Ribeirão Preto'>SP - Ribeirão Preto</option>
                  <option value='SP - Santos'>SP - Santos</option>
                  <option value='SP - São Bernardo do Campo'>SP - São Bernardo do Campo</option>
                  <option value='SP - São José dos Campos'>SP - São José dos Campos</option>
                  <option value='SP - São Paulo'>SP - São Paulo</option>
                </SelectField>
              </FieldGroup>
              <CheckboxField
                label={<>Eu aceito os <a href='/legal'>termos de test-ride</a> da Vela.</>}
                name='terms'
              />
              <div className='actions'>
                <Button type='submit' primary>Quero testar</Button>
              </div>
              {isSubmitting && 'Enviando...'}
              {status && (status.success || status.error)}
            </Form>
          )
        }
      />
    </Section>

    <Inverter>
      <FormInstructions />
    </Inverter>
  </PaddedSplitView>

const handleSubmit = async (values, { setSubmitting, setStatus, resetForm, props }) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await fetch(`/api/test-ride/subscribe`, {
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

export default TestRideForm
