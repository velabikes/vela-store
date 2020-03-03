import { compose, withProps, withHandlers } from 'recompose'
import PropTypes from 'prop-types'
import Link from 'next/link'
import PaddedView from 'components/PaddedView'
import { toggleDrawer } from '../lib/redux'
import { offBlack, offWhite, velaGreen } from '../style/colors'
import withOpenDrawer from '../containers/withOpenDrawer'
import Cart from './store/Cart'
import HeaderDrawer from './HeaderDrawer'
import HeaderMenu from './HeaderMenu'
import MainMenu from './MainMenu'
import Footer from './Footer'
import SubscribeForm from './SubscribeForm'
import { Logo } from './Icons'

/* eslint-disable */
const Header = ({ isCartOpen, isMenuOpen, children, handleContentClick }) =>
  <>
    <HeaderDrawer visible={isCartOpen}><Cart /></HeaderDrawer>
    <HeaderDrawer visible={isMenuOpen}>
      <PaddedView><MainMenu /></PaddedView>
      <PaddedView><SubscribeForm /></PaddedView>
      <PaddedView><Footer /></PaddedView>
    </HeaderDrawer>
    <header className='header'>
      <div className='top'>
        <div className='logo'><Link href='/'><a>
          <Logo />
        </a></Link></div>
        <div className='left'><Link href='/vela'><a>
          Vela 2
        </a></Link></div>
        <div className='left'><Link href='/store?handle=vela-1' as='/loja/vela-1'><a>
          Vela 1
        </a></Link></div>
        <div className='left'><Link href='/store' as='/loja'><a>
          Acessórios
        </a></Link></div>
        <div className='left'><Link href='/network/map' as='/rede/mapa'><a>
          Rede
        </a></Link></div>
        <div className='left'><Link href='/blog'><a>
          Blog
        </a></Link></div>
        <div className='left'><Link href='/contact' as='/contato'><a>
          Contato
        </a></Link></div>
        <div className='left'><Link href='/store?handle=outlet' as='/loja/outlet'><a>
          Outlet
        </a></Link></div>
      </div>
      <div className='right'>
        <HeaderMenu />
      </div>
    </header>
    <div className='app-content' onClick={handleContentClick}>
      {children}
      <div className='copyright'>
        <small>Copyright (C) 2020. Vela Bikes. Todos os direito reservados.</small>
      </div>
    </div>
    <style jsx>{`
      header {
        display: flex;
        background-color: ${offWhite};
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1001;
        box-shadow: 0px 0px 9px 0px rgba(100,100,100,0.3);
        width: 100%;
      }
      .app-content {
        margin-top: 4em;
        position: relative;
        min-width: calc(100vw - 4rem);
        min-width: calc(var(--vw, 1vw) * 100 - 4rem);
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
        color: ${offBlack};
        font-weight: 500;
      }
      .top :global(.Logo) {
        width: 2rem;
        height: 2rem;
        display: block;
      }
      .top .left {
        display: none;
        margin-right: 1.5em;
      } 
      .right {
        right: 0;
      }

      @media only screen and (min-width: 768px) {
        header {
          flex-direction: row;
          height: 4em;
          bottom: 0;
          right: initial;
        }
        .app-content {
          margin-top: 4em;
          margin-left: 0;
          min-height: calc(100vh);
        }
        header > div {
          flex-direction: row;
        }
        header > div :global(a) {
          min-height: 4rem;
          min-width: 4rem;
        }
        .top .left {
          display: flex;
        } 
        .right {
          right: 0;
          background-color: ${velaGreen};
        }
        .right :global(.CartIcon) {
          fill: ${offWhite};
        }
      }
    `}</style>
  </>

/* eslint-enable */

Header.propTypes = {
  children: PropTypes.node,
  handleContentClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  isCartOpen: PropTypes.bool
}

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({ isCartOpen: openDrawer === 'CART', isMenuOpen: openDrawer === 'MENU' })),
  withHandlers({
    handleContentClick: ({ dispatch, isCartOpen, isMenuOpen }) => e => {
      return (isCartOpen || isMenuOpen) && dispatch(toggleDrawer(null))
    }
  })
)(Header)
