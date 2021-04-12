import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik } from 'formik'
import { lightGray, offWhite, velaGreen } from '../style/colors'
import Button from './Button'
import { NextIcon } from './Icons'

const url = 'https://velabikes.us19.list-manage.com/subscribe/post?u=68a0cce7cc109d78a8b44d7a0&amp;id=b534f5cb40'

const SubscribeForm = () =>
  <div className='SubscribeForm'>
    <h3>Vamos nos conectar?</h3>
    <p>Fique por dentro de novidades da Vela!</p>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) =>
        status === 'success'
          ? <div><p>Agradecemos sua inscrição. Vamos velejar?</p></div>
          : status === 'error' 
          ? <div><p>Opa, parece que você já de inscreveu!</p></div>
          : <Formik initialValues={{ EMAIL: '' }} onSubmit={subscribe}>
            {({
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
                  <Button icon><NextIcon style={{fill: velaGreen}}/></Button>
                </div>
              </form>
            }
          </Formik>
      }
    />
    <style jsx>{`
      .SubscribeForm {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h3 {
        color: ${lightGray};
        text-align: center;
      }
      .submit {
        margin-left: -2em;
      }
      form {
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: row;
        width: 280px;
      }
      .submit :global(button){
        margin: 0;
      }
      input:not([type='checkbox']):not([type='radio']) {
        margin: 0 -1em 0 0;
      }
      .hidden {
        position: absolute;
        left: -5000px;
      }
      p{
        color: ${offWhite};
        text-align: center;
      }
      @media only screen and (min-width: 768px) {
        .SubscribeForm {
          align-items: flex-start;
        }
        h3 {
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    `}</style>
  </div>

export default SubscribeForm
