import { Formik, Form } from 'formik'
import CheckboxField from 'components/form/CheckboxField'
import Button from 'components/Button'
import Section from 'components/Section'
import fetch from 'isomorphic-fetch'

const TermsForm = () =>
    <Section>
      <Formik
        validate={(values, props) => {
          let errors = {}

          const errorsMessege = {
            terms: 'É preciso concordar com os termos de uso'
          }
          if (!values.terms) { errors.terms = errorsMessege['terms'] }

          return errors
        }}
        initialValues={{ terms: false }}
        onSubmit={handleSubmit}
        render={
          ({ isSubmitting, status, values }) => (
            <Form>
              <CheckboxField
                label={<>Eu aceito os <a href='/legal'>termos de test-ride</a> da Vela.</>}
                name='terms'
              />
              <div className='actions'>
                <Button type='submit' primary>Finalizar</Button>
              </div>
              {isSubmitting && 'Enviando...'}
              {status && (status.success || status.error)}
            </Form>
          )
        }
      />
    </Section>

export default TermsForm
