import { compose, withProps } from 'recompose'
import Link from 'next/link'
import { velaGreen, lightGray } from '../style/colors'
import Cart from './Cart'
import HeaderDrawer from './HeaderDrawer'
import HeaderMenu from './HeaderMenu'
import withOpenDrawer from '../containers/withOpenDrawer'
import MainMenu from './MainMenu';
import Footer from './Footer';

const Header = ({ isCartOpen, isMenuOpen, children }) =>
  <>
    <HeaderDrawer visible={isCartOpen}><Cart /></HeaderDrawer>
    <HeaderDrawer visible={isMenuOpen}>
      <MainMenu />
      <Footer />
    </HeaderDrawer>
    <header className='Header'>
      <div className='top'>
        <HeaderMenu />
      </div>
      <div className='bottom'>
        <div><Link href='/store' prefetch>acessórios</Link></div>
        <div>monte sua vela</div>
      </div>
    </header>
    <div className='app-content'>
      {children}
    </div>
    <style jsx>{`
      header {
        display: flex;
        background-color: ${lightGray};
        justify-content: space-between;
        color: ${velaGreen};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      .app-content {
        margin-top: 4em;
      }
      header > div {
        display: flex;
      }
      header > div > :global(div) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 4rem;
      }
      .top :global(.Logo) {
        width: 2.59rem;
        height: 2.59rem;
      }
      .bottom > div {
        text-transform: uppercase;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 900;
        font-style: italic;
        padding: 1.5em;
        box-sizing: border-box;
        display: none;
        font-size: 1rem;
        line-height: 1rem;
      }
      .bottom > div:last-child {
        background-color: ${velaGreen};
        color: ${lightGray};
        display: block;
      }
      @media only screen and (min-width: 768px) {
        header {
          flex-direction: column;
          width: 5em;
          bottom: 0;
          rught: inital;
        }
        .app-content {
          margin-left: 5em;
          margin-top: 0;
        }
        header > div {
          flex-direction: column;
        }
        header > div > :global(div) {
          min-height: 5rem;
        }
        .bottom > div {
          writing-mode: vertical-rl;
          text-orientation: sideways;
          transform: rotate(180deg);
          display: block;
          padding: 2rem;
        }
      }
    `}</style>
  </>

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({ isCartOpen: openDrawer === 'CART', isMenuOpen: openDrawer === 'MENU' }))
)(Header)
