import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik } from 'formik'
import Button from '../Button'
import { offWhite } from '../../style/colors'

const url = 'https://velabikes.us19.list-manage.com/subscribe/post?u=68a0cce7cc109d78a8b44d7a0&amp;id=52d81ab0f5'

const SubscribeForm = () =>
  <div className='SubscribeForm'>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) =>
        status === 'success'
          ? <div>Obrigada por participar!</div>
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
                  <Button bf type='submit'>Quero participar</Button>
                </div>
              </form>
            }
          </Formik>
      }
    />
    <style jsx>{`
      .SubscribeForm {
        padding: 2em 0 0 0;
        color: ${offWhite};
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .hidden {
        position: absolute;
        left: -5000px;
      }
      .submit > :global(button) {
        margin: 0px;
      }

      @media only screen and (min-width: 768px) {
        .SubscribeForm {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        form {
          width: 30vw;
        }
      }
    `}</style>
  </div>

export default SubscribeForm
