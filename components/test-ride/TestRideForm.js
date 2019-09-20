import { Form, withFormik } from 'formik'
import { compose } from 'recompose'
import Field from 'components/form/Field'
import FieldGroup from 'components/form/FieldGroup'
import Button from 'components/Button'
import PaddedView from 'components/PaddedView'
import Grid from 'components/Grid'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Inverter from 'components/Inverter'

const TestRideFrom = () =>
  <div className='TestRideForm'>
    <Grid template='7fr 5fr'>
      <PaddedView>
        <Section>
          <PaddedView>
            <p>Insira seus dados no formulário abaixo e aguarde nosso contato.</p>
            <Form>
              <Field
                label='Nome'
                name='name'
                type='text'
              />
              <FieldGroup template='2fr 1fr'>
                <Field
                  label='E-mail'
                  name='email'
                  type='email'
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
              <Field
                label='Eu aceito os termos de test-ride da Vela.'
                name='height'
                type='checkbox'
              />
              <br />
              <div className='actions'>
                <Button primary>Quero testar</Button>
              </div>
            </Form>
          </PaddedView>
        </Section>
      </PaddedView>
      <Inverter>
        <PaddedView>
          <Section>
            <SectionHeader align='center' title='Como funciona?' />
            <div className='SectionBody'>
              <div className='items'>
                <span>1</span>
                <p>Insira todas as informações nos campos ao lado e aguarde contato.</p>
              </div>
              <div className='items'>
                <span>2</span>
                <p> Combine com o Amigo da Vela um horário disponível para o test-ride.</p>
              </div>
              <div className='items'>
                <span>3</span>
                <p>Encontre o Amigo da Vela no dia e horário marcados. Ele irá te apresentar a bike elétrica pessoalmente, deixar você dar uma volta!</p>
              </div>
            </div>
          </Section>
        </PaddedView>
      </Inverter>
    </Grid>
    <style jsx>{`
        .TestRideForm {
          background-color: #E7E8E8;
          font-size: 20px;
          line-height: 1.2;
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
          font-size: 28px;
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
    `}</style>
  </div>

const handleSubmit = (values, { setSubmitting, props }) => {
  console.log(JSON.stringify(values))
  alert(JSON.stringify(values)) // eslint-disable-line
  setSubmitting(false)
}

export default compose(
  withFormik({ handleSubmit })
)(TestRideFrom)
