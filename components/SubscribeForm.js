import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik } from 'formik'
import { lightGray, offWhite } from '../style/colors'
import Button from './Button'

const url = 'https://velabikes.us19.list-manage.com/subscribe/post?u=68a0cce7cc109d78a8b44d7a0&amp;id=35e53f5d9e'

const SubscribeForm = () =>
  <div className='SubscribeForm'>
    <h3>Vamos nos conectar?</h3>
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
                  <Button primary type='submit'>Assinar</Button>
                </div>
              </form>
            }
          </Formik>
      }
    />
    <style jsx>{`
      h3 {
        color: ${lightGray};
        margin-bottom: 1rem;
        text-align: center;
      }
      form {
        position: relative;
        z-index: 0;
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
      .submit > :global(button) {
        margin: 0px;
      }
      p{
        font-size: 0.8rem;
        color: ${offWhite};
      }
      @media only screen and (min-width: 768px) {
        h3 {
          text-align: left;
        }
      }
    `}</style>
  </div>

export default SubscribeForm
