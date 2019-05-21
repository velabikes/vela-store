import PaddedView from './PaddedView'
import { velaBlue } from '../style/colors'

const SubscribeForm = () =>
  <PaddedView>
    <form action="https://velabikes.us15.list-manage.com/subscribe/post?u=950b7d190680648ed40ffbe84&amp;id=dde7c564df" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
      <h3>Newsletter:</h3>
      <input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" placeholder="Digite seu email"/>
      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
        <input type="text" name="b_950b7d190680648ed40ffbe84_dde7c564df" tabIndex="-1" defaultValue="" />
      </div>
      <button type="submit">Assinar</button>
    </form>
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

export default SubscribeForm
