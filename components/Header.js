import { compose, withProps } from 'recompose'
import Link from 'next/link'
import PaddedView from 'components/PaddedView'
import { velaGreen, lightGray } from '../style/colors'
import withOpenDrawer from '../containers/withOpenDrawer'
import Cart from './store/Cart'
import HeaderDrawer from './HeaderDrawer'
import HeaderMenu from './HeaderMenu'
import MainMenu from './MainMenu'
import Footer from './Footer'
import SubscribeForm from './SubscribeForm'

const Header = ({ isCartOpen, isMenuOpen, children }) =>
  <>
    <HeaderDrawer visible={isCartOpen}><Cart /></HeaderDrawer>
    <HeaderDrawer visible={isMenuOpen}>
      <PaddedView><MainMenu /></PaddedView>
      <PaddedView><SubscribeForm /></PaddedView>
      <PaddedView><Footer /></PaddedView>
    </HeaderDrawer>
    <header className='Header'>
      <div className='top'>
        <HeaderMenu />
      </div>
      <div className='bottom'>
        <div><Link href='/store' as='/loja' prefetch><a>acessórios</a></Link></div>
        <div><Link href='/store?handle=vela-1' as='/loja/vela-1' prefetch><a>monte sua vela</a></Link></div>
      </div>
    </header>
    <div className='app-content'>
      {children}
      <div className='copyright'>
        <small>COPYRIGHT (C) 2019 VELA BIKES. TODOS DIREITOS RESERVADOS</small>
      </div>
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
        z-index: 1001;
        box-shadow: 0px 0px 9px 0px rgba(100,100,100,0.3);
      }
      .app-content {
        margin-top: 4em;
        position: relative;
      }
      .copyright {
        text-align: center;
        padding: 1em 0;
      }
      header > div {
        display: flex;
      }
      header > div :global(a) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 4rem;
        min-height: 4rem;
      }
      .top :global(.Logo) {
        width: 2.59rem;
        height: 2.59rem;
      }
      .bottom > div > a {
        text-transform: uppercase;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 700;
        font-style: italic;
        padding: 1.5em 1em;
        box-sizing: border-box;
        display: none;
        font-size: 1rem;
        line-height: 1rem;
      }
      .bottom > div:last-child > a {
        background-color: ${velaGreen};
        display: block;
        white-space: nowrap;
        color: ${lightGray};
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
        .app-content > :global(div:first-child) {
          min-height: calc(100vh - 3rem);
        }
        header > div {
          flex-direction: column;
        }
        header > div :global(a) {
          min-height: 5rem;
          min-width: 5rem;
        }
        .top {
          margin-top: 0.28em;
        }
        .bottom > div > a {
          writing-mode: vertical-rl;
          text-orientation: sideways;
          transform: rotate(180deg);
          display: block;
          padding: 2rem;
          font-size: 1.25rem
        }
      }
    `}</style>
  </>

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({ isCartOpen: openDrawer === 'CART', isMenuOpen: openDrawer === 'MENU' }))
)(Header)
