import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik } from 'formik'
import { velaBlue } from '../style/colors'
import Button from './Button'

const url = 'https://velabikes.us15.list-manage.com/subscribe/post?u=950b7d190680648ed40ffbe84&amp;id=dde7c564df'

const SubscribeForm = () =>
  <div className='SubscribeForm'>
    <h3>Newsletter:</h3>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) =>
        status === 'success'
          ? <div>Obrigado!</div>
          : <Formik initialValues={{ EMAIL: '' }} onSubmit={subscribe}>
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) =>
              <form method='post' onSubmit={handleSubmit}>
                <input
                  type='email'
                  id='EMAIL'
                  placeholder='Digite seu e-mail'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className='hidden' aria-hidden='true'>
                  <input type='text' name='b_950b7d190680648ed40ffbe84_dde7c564df' tabIndex='-1' defaultValue='' />
                </div>
                <div className='submit'>
                  <Button action inverted type='submit'>Assinar</Button>
                </div>
              </form>
            }
          </Formik>
      }
    />
    <style jsx>{`
      form {
        position: relative;
      }
      .hidden {
        position: absolute;
        left: -5000px;
      }
      .submit {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      form > :global(.submit button) {
        border: 0px;
      }
      form > :global(.submit button:hover) {
        border: 0px;
      }
    `}</style>
  </div>

export default SubscribeForm
