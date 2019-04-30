import HeaderMenu from '../components/HeaderMenu'
import { velaGreen, cream } from '../style/colors'
import Logo from '../components/Logo'
import Link from '../components/Link'
import Cart from '../components/Cart'
import { compose, withState } from 'recompose';
import CartContent from './CartContent';

const Header = ({ loading, setCartOpen, isCartOpen }) =>
  <>
    <div style={{ display: isCartOpen ? 'block' : 'none' }}><CartContent /></div>
    <header>
      <div className='top'>
        <div><Link href='/'><Logo color={loading ? 'red' : velaGreen} style={{ width: '5em', height: '5em' }} /></Link></div>
        <div><Link href='/user' prefetch>user</Link></div>
        <div>menu</div>
      </div>
      <div onClick={() => setCartOpen(!isCartOpen)}><Cart /></div>
      <div className='bottom'>
        <div><Link href='/store' prefetch>acessorios</Link></div>
        <div>monte a sua</div>
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        background-color: ${cream};
        justify-content: space-between;
        color: ${velaGreen};
        z-index: 9000;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
      }
      header > div {
        display: flex;
      }
      header > div > div {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 6em;
        min-width: 6em;
      }
      .bottom > div {
        text-transform: uppercase;
        font-weight: 700;
        font-style: italic;
        padding: 2em;
        box-sizing: border-box;
      }
      .bottom > div:last-child {
        background-color: ${velaGreen};
        color: ${cream}
      }
      @media only screen
      and (min-width: 600px) {
        header {
          flex-direction: column;
          width: 6em;
        }
        header > div {
          flex-direction: column;
        }
        .bottom > div {
          writing-mode: vertical-rl;
          text-orientation: sideways;
        }
      }
    `}</style>
  </>

export default compose(withState('isCartOpen', 'setCartOpen', false))(Header)
