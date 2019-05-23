import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik } from 'formik'
import fetch from 'isomorphic-fetch'
import { compose, withHandlers } from 'recompose'
import { velaBlue } from '../style/colors'
import PaddedView from './PaddedView'

const url = 'https://velabikes.us15.list-manage.com/subscribe/post?u=950b7d190680648ed40ffbe84&amp;id=dde7c564df'

const SubscribeForm = ({ handleFormSubmit }) =>
  <PaddedView>
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
                  placeholder='Digite seu email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
                  <input type='text' name='b_950b7d190680648ed40ffbe84_dde7c564df' tabIndex='-1' defaultValue='' />
                </div>
                <button type='submit'>Assinar</button>
              </form>
            }
          </Formik>
      }
    />
    <style jsx>{`
      form {
        position: relative;
      }
      button {
        position: absolute;
        right: 0;
        bottom: 0;
        color: ${velaBlue};
        background: transparent;
        padding: 0.29em;
      }
    `}</style>
  </PaddedView>

export default compose(
  withHandlers({
    handleFormSubmit: () => async (input) => {
      const response = await fetch('https://velabikes.us15.list-manage.com/subscribe/post-json?u=950b7d190680648ed40ffbe84&amp;id=dde7c564df&c=?', {
        method: 'POST',
        body: JSON.stringify(input),
        mode: 'no-cors'
      })
      console.log(response)
    }
  })
)(SubscribeForm)
