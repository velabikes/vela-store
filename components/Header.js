import { compose, withProps } from 'recompose'
import Link from 'next/link'
import { velaGreen, cream } from '../style/colors'
import Logo from '../components/Logo'
// import Cart from '../components/Cart'
import CartContent from './HeaderCartDrawer'
import MenuDrawer from './HeaderMenuDrawer'
import { CartIcon, MenuIcon, UserIcon } from './Icons'
import HeaderMenu from './HeaderMenu'
import withOpenDrawer from '../containers/withOpenDrawer'

const Header = ({ isCartOpen, isMenuOpen }) =>
  <>
    <CartContent visible={isCartOpen} />
    <MenuDrawer visible={isMenuOpen} />
    <header>
      <div className='top'>
        <HeaderMenu />
      </div>
      <div className='bottom'>
        <div><Link href='/store' prefetch>acessorios</Link></div>
        <div>monte a sua vela</div>
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        background-color: ${cream};
        justify-content: space-between;
        color: ${velaGreen};
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
      }
      header > div {
        display: flex;
      }
      header > div > :global(div) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5em;
        min-width: 5em;
      }
      .bottom > div {
        text-transform: uppercase;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 900;
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
          width: 5em;
          padding-top: .5em;
        }
        header > div {
          flex-direction: column;
        }
        .bottom > div {
          writing-mode: vertical-rl;
          text-orientation: sideways;
          transform: rotate(180deg);
        }
      }
    `}</style>
  </>

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({ isCartOpen: openDrawer === 'CART', isMenuOpen: openDrawer === 'MENU' }))
)(Header)
