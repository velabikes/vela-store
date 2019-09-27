import { Formik, Form, withFormik } from 'formik'
import { compose } from 'recompose'
import Field from 'components/form/Field'
import CheckboxField from 'components/form/CheckboxField'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'
import PaddedView from 'components/PaddedView'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Inverter from 'components/Inverter'
import fetch from 'isomorphic-fetch'
import EmailField from 'components/form/EmailField'

const TestRideFrom = () =>
  <div className='TestRideForm'>
    <div className='Form'>
      <PaddedView>
        <Section>
          <PaddedView>
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
              render={
                ({ errors, status, touched }) => (
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
                      <Field
                        label='Telefone'
                        name='phone'
                        type='text'
                      />
                      <Field
                        label='Cidade'
                        name='city'
                        type='text'
                      />
                    </FieldGroup>
                    <CheckboxField
                      label='Eu aceito os termos de test-ride da Vela.'
                      name='terms'
                    />
                    <div className='actions'>
                      <Button type='submit' primary>Quero testar</Button>
                    </div>
                  </Form>
                )
              }
            />
          </PaddedView>
        </Section>
      </PaddedView>
    </div>

    <div className='TestRideFormInfos'>
      <Inverter>
        <PaddedView>
          <Section>
            <SectionHeader align='center' title='Como funciona?' />
            <div className='SectionBody'>
              <div className='items'>
                <span>1</span>
                <p>
                  Insira todas as informações nos
                  campos ao lado e aguarde contato.
                </p>
              </div>
              <div className='items'>
                <span>2</span>
                <p>
                  Combine com o Amigo da Vela um
                  horário disponível para o test-ride.
                </p>
              </div>
              <div className='items'>
                <span>3</span>
                <p>Encontre o Amigo da Vela no dia
                e horário marcados. Ele irá te
                apresentar a bike elétrica
                pessoalmente, deixar você dar
                uma volta e trocar sobre
                a experiência na sua cidade!</p>
              </div>
            </div>
          </Section>
        </PaddedView>
      </Inverter>

    </div>
    <style jsx>{`
        .TestRideForm {
          background-color: #E7E8E8;
          display: flex;
          flex-direction: column-reverse;
        }

        .TestRideFormInfos {
          width: 100%;
        }

        .items {
          display: flex;
          margin: 44px;
        }
        p {
          font-size: 19px;
          line-height: 1.2;
          font-weight: 100;
          width: 100%;
        }
        .SectionBody span {
          font-size: 1.5em;
          line-height: 1;
          border-radius: 3px;
          font-weight: bold;
          padding: 14px;
          background-color: #51776B;
          display: inline-block;
          box-sizing: border-box;
          margin-right: 20px;
          height: 55px;
          text-align: center;
          width: 55px;
        }

        .actions {
          width: 100%;
        }

        .errors {
          text-align: right;
        }

        .errors :global(span) {
          font-size: .7em;
          color: red;
        }
        .actions button {
          font-size: 1.3em!important;
        }

        @media only screen and (min-width: 768px) {
          .TestRideForm {
            flex-direction: row;
          }
          .TestRideFormInfos {
            width: 45%;
          }
          .actions {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 200px;
            margin: auto;
            margin-right: 0;
          }
          .BannerTitle {
            width: 50%;
            text-align: right;
          }
        }
    `}</style>
  </div>

const handleSubmit = async (values, { setSubmitting, props }) => {
  try {
    const response = await fetch(`/api/test-ride/subscribe`, {
      method: 'POST',
      body: JSON.stringify(values)
    })
    const json = await response.json()

    console.log({ response: json })
  } catch (error) {
    console.log({ error })
  }

  setSubmitting(false)
}

export default compose(
  withFormik({ handleSubmit })
)(TestRideFrom)
